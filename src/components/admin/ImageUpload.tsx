import { useRef, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useLocale } from "../../i18n";

interface Props {
  value: string;
  onChange: (url: string) => void;
  urlLabel: string;
  uploadLabel: string;
}

/**
 * Minimal image input — shows the current URL in a text field and offers a
 * "Upload image" button that pushes the file into the `product-images`
 * Supabase Storage bucket. Falls back to pure-URL mode when Supabase isn't
 * configured (local dev).
 */
export default function ImageUpload({ value, onChange, urlLabel, uploadLabel }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const { t } = useLocale();

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !supabase) return;
    setUploading(true);
    try {
      const ext = file.name.includes(".") ? file.name.split(".").pop() : "jpg";
      const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
      const up = await supabase.storage.from("product-images").upload(path, file, {
        cacheControl: "31536000",
        upsert: false,
      });
      if (up.error) throw up.error;
      const { data } = supabase.storage.from("product-images").getPublicUrl(path);
      onChange(data.publicUrl);
    } catch (err) {
      console.error("image upload", err);
      alert(err instanceof Error ? err.message : "upload failed");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  return (
    <div>
      <label className="text-[10px] tracking-wider2 uppercase text-muted block mb-1">
        {urlLabel}
      </label>
      <input
        type="url"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="https://… or /img/..."
        className="w-full border border-ink/15 bg-transparent px-3 py-2 text-sm"
      />
      <div className="mt-2 flex items-center gap-3">
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleUpload}
          disabled={uploading || !supabase}
        />
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          disabled={uploading || !supabase}
          className="text-xs tracking-wider2 uppercase border border-ink/20 px-3 py-1.5 hover:bg-ink/[0.03] disabled:opacity-40"
        >
          {uploading ? t("adminPanel.products.uploading") : uploadLabel}
        </button>
        {value ? (
          <img
            src={value}
            alt=""
            className="h-10 w-8 object-cover object-top border border-ink/10"
          />
        ) : null}
      </div>
    </div>
  );
}
