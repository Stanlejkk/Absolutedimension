-- Absolut Dimension — catalog seed (auto-generated from src/lib/data.ts)
begin;

-- Collections
insert into public.collections (id, name, slug, image, description_en, description_pl) values ('monaco', 'Monaco', 'monaco', '/img/products/8-zakiet-jour-y-1/0.webp', 'A line that answers to southern light, the movement of the body, and the shift from day to evening — not to overwhelm, but to be visible; not to decorate, but to build personality.', 'Linia, która odpowiada na południowe światło, ruch ciała i zmianę dnia w wieczór — nie po to, by przytłaczać, lecz by być widoczną; nie by zdobić, lecz by budować osobowość.') on conflict (id) do update set name=excluded.name, slug=excluded.slug, image=excluded.image, description_en=excluded.description_en, description_pl=excluded.description_pl;
insert into public.collections (id, name, slug, image, description_en, description_pl) values ('paris', 'Paris', 'paris', '/img/products/sukienka-hawaii/0.webp', 'The Core of the SM.ART Wardrobe. Paris does not react to the season — it organises Composition, Comfort, and Creativity into one timeless language.', 'Rdzeń Garderoby SM.ART. Paris nie reaguje na sezon — porządkuje Kompozycję, Komfort i Kreatywność w jeden ponadczasowy język.') on conflict (id) do update set name=excluded.name, slug=excluded.slug, image=excluded.image, description_en=excluded.description_en, description_pl=excluded.description_pl;
insert into public.collections (id, name, slug, image, description_en, description_pl) values ('cannes', 'Cannes', 'cannes', '/img/products/monaco-pulli-ocean/0.webp', 'A line of light on the body — silk and breath, for women who are visible because they simply are. The aesthetic of elegance: bright, calm, sovereign.', 'Linia światła na ciele — jedwab i oddech, dla kobiet, które są widoczne, bo po prostu są. Estetyka elegancji: jasnej, spokojnej, suwerennej.') on conflict (id) do update set name=excluded.name, slug=excluded.slug, image=excluded.image, description_en=excluded.description_en, description_pl=excluded.description_pl;
insert into public.collections (id, name, slug, image, description_en, description_pl) values ('st-tropez', 'St. Tropez', 'st-tropez', '/img/products/15-sukienka-desse-pele/0.webp', 'The line of the body in freedom — breathable structures and the soft rhythm of silk. The Aesthetics of Pleasure: live freely within yourself, in the sun, in movement, in lightness.', 'Linia ciała w wolności — oddychające struktury i miękki rytm jedwabiu. Estetyka Przyjemności: żyj swobodnie w sobie, w słońcu, w ruchu, w lekkości.') on conflict (id) do update set name=excluded.name, slug=excluded.slug, image=excluded.image, description_en=excluded.description_en, description_pl=excluded.description_pl;
insert into public.collections (id, name, slug, image, description_en, description_pl) values ('monte-carlo', 'Monte Carlo', 'monte-carlo', '/img/products/top-angel/0.webp', 'A line of visible presence, where form creates the message — the aesthetic of an authority full of energy that becomes the Manifesto of the Person.', 'Linia widocznej obecności, w której forma tworzy przekaz — estetyka autorytetu pełnego energii, który staje się Manifestem Osoby.') on conflict (id) do update set name=excluded.name, slug=excluded.slug, image=excluded.image, description_en=excluded.description_en, description_pl=excluded.description_pl;
insert into public.collections (id, name, slug, image, description_en, description_pl) values ('melbourne', 'Me.Bourn', 'melbourne', '/img/products/23-top-sydney/0.webp', 'A line of internal autonomy — for a woman who lives in her own form and gives herself the consent to be ''different''. Power without demonstration.', 'Linia wewnętrznej autonomii — dla kobiety, która żyje we własnej formie i daje sobie zgodę, by być „inną”. Siła bez demonstracji.') on conflict (id) do update set name=excluded.name, slug=excluded.slug, image=excluded.image, description_en=excluded.description_en, description_pl=excluded.description_pl;
insert into public.collections (id, name, slug, image, description_en, description_pl) values ('new-york-city', 'New.City', 'new-york-city', '/img/products/sukienka-cote-dazur-1/0.webp', 'A line of functional strength for women who build, decide, and move intensely — where form is a tool of agency. It does not tell a story; it creates it.', 'Linia funkcjonalnej siły dla kobiet, które intensywnie budują, decydują i poruszają się — gdzie forma jest narzędziem sprawczości. Nie opowiada historii; ją tworzy.') on conflict (id) do update set name=excluded.name, slug=excluded.slug, image=excluded.image, description_en=excluded.description_en, description_pl=excluded.description_pl;
insert into public.collections (id, name, slug, image, description_en, description_pl) values ('bali', 'Coco.Bali', 'bali', '/img/products/7-sukienka-megami/0.webp', 'The body''s breathing line — silks and linens, forms that do not restrict movement. The aesthetic of grounded freedom, where the wardrobe stops ruling the body and starts supporting it.', 'Linia oddechu ciała — jedwabie i lny, formy, które nie ograniczają ruchu. Estetyka ugruntowanej wolności, w której garderoba przestaje rządzić ciałem, a zaczyna je wspierać.') on conflict (id) do update set name=excluded.name, slug=excluded.slug, image=excluded.image, description_en=excluded.description_en, description_pl=excluded.description_pl;
insert into public.collections (id, name, slug, image, description_en, description_pl) values ('iq-atar', 'IQ.atar', 'iq-atar', '/img/products/15_sukienka-qatar/0.webp', 'A small, sovereign line — sculptural silk and scarves for moments that ask for quiet intensity.', 'Mała, suwerenna linia — rzeźbiarski jedwab i szale na chwile, które proszą o cichą intensywność.') on conflict (id) do update set name=excluded.name, slug=excluded.slug, image=excluded.image, description_en=excluded.description_en, description_pl=excluded.description_pl;
insert into public.collections (id, name, slug, image, description_en, description_pl) values ('say-shell', 'Say.Shell', 'say-shell', '/img/products/suknia-event-desse-pele/0.webp', 'A line of deep relaxation — a state in which one simply is. A wardrobe for women who need to live with themselves; here the wardrobe becomes a shelter and luxury means I AM MYSELF.', 'Linia głębokiego relaksu — stanu, w którym po prostu się jest. Garderoba dla kobiet, które potrzebują żyć ze sobą; tu garderoba staje się schronieniem, a luksus znaczy JESTEM SOBĄ.') on conflict (id) do update set name=excluded.name, slug=excluded.slug, image=excluded.image, description_en=excluded.description_en, description_pl=excluded.description_pl;
insert into public.collections (id, name, slug, image, description_en, description_pl) values ('deep-ly-me', 'Deep.ly Me', 'deep-ly-me', '/img/products/38-sukienka-paris/0.webp', 'An intimate line that turns inward — soft forms for the return to oneself.', 'Intymna linia zwrócona do wewnątrz — miękkie formy na powrót do siebie.') on conflict (id) do update set name=excluded.name, slug=excluded.slug, image=excluded.image, description_en=excluded.description_en, description_pl=excluded.description_pl;
insert into public.collections (id, name, slug, image, description_en, description_pl) values ('poza-murem', 'Beyond Limits', 'poza-murem', '/img/products/18-set-da-nuta/0.webp', 'Beyond Limits — forms for stepping past the wall of expectation into a freer, fuller presence.', 'Poza Murem — formy, by przekroczyć mur oczekiwań i wejść w wolniejszą, pełniejszą obecność.') on conflict (id) do update set name=excluded.name, slug=excluded.slug, image=excluded.image, description_en=excluded.description_en, description_pl=excluded.description_pl;
insert into public.collections (id, name, slug, image, description_en, description_pl) values ('new-chapter', 'New Chapter', 'new-chapter', '/img/products/18-set-blue-ocean/0.webp', 'Each Absolut Dimension design is unique, so subtle differences may occur. In line with our philosophy of conscious luxury, each garment is made individually only after an order is placed.', 'Każdy projekt Absolut Dimension jest niepowtarzalny, dlatego mogą wystąpić subtelne różnice. Zgodnie z naszą filozofią świadomego luksusu każda rzecz powstaje indywidualnie dopiero po złożeniu zamówienia.') on conflict (id) do update set name=excluded.name, slug=excluded.slug, image=excluded.image, description_en=excluded.description_en, description_pl=excluded.description_pl;
insert into public.collections (id, name, slug, image, description_en, description_pl) values ('lou-vre', 'Lou.Vre', 'lou-vre', '/img/products/poncho-absolut/0.webp', 'Lou.Vre — wearable art, where each form is composed like a piece in a gallery.', 'Lou.Vre — sztuka do noszenia, w której każda forma jest skomponowana jak dzieło w galerii.') on conflict (id) do update set name=excluded.name, slug=excluded.slug, image=excluded.image, description_en=excluded.description_en, description_pl=excluded.description_pl;
insert into public.collections (id, name, slug, image, description_en, description_pl) values ('sukienki-event', 'Event Dresses', 'sukienki-event', '/img/products/28-suknia-mantoine/0.webp', 'Event dresses for the moments that ask to be remembered — silk, presence, and ceremony.', 'Sukienki na wielkie wydarzenia — jedwab, obecność i ceremonia chwil, które chce się zapamiętać.') on conflict (id) do update set name=excluded.name, slug=excluded.slug, image=excluded.image, description_en=excluded.description_en, description_pl=excluded.description_pl;
insert into public.collections (id, name, slug, image, description_en, description_pl) values ('sukienki-cocktail', 'Cocktail Dresses', 'sukienki-cocktail', '/img/products/sukienka/0.webp', 'Cocktail dresses — lighter forms for evenings that move between conversation and dance.', 'Sukienki koktajlowe — lżejsze formy na wieczory między rozmową a tańcem.') on conflict (id) do update set name=excluded.name, slug=excluded.slug, image=excluded.image, description_en=excluded.description_en, description_pl=excluded.description_pl;

-- Products
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('38-sukienka-paris', '38.Sukienka Paris', 440000, 'dress', 'deep-ly-me', '/img/products/38-sukienka-paris/0.webp', '{"/img/products/38-sukienka-paris/0.webp","/img/products/38-sukienka-paris/1.webp","/img/products/38-sukienka-paris/2.webp","/img/products/38-sukienka-paris/3.webp"}', 'Sukienka Paris . Perły . światło . jedwab .

Sukienka Paris to projekt, w którym klasyczna elegancja spotyka się z autorską konstrukcją. Delikatna forma wykonana z naturalnego jedwabiu została zawieszona na konstrukcji z naturalnych pereł, tworząc wyjątkowe połączenie biżuterii i ubioru.

Miękko układający się jedwab płynnie otula sylwetkę, podkreślając jej naturalne proporcje. Odkryte ramiona, drapowanie przy dekolcie oraz minimalistyczna linia nadają projektowi lekkość i ponadczasowy charakter.

Naturalne perły stanowią integralny element konstrukcji sukienki. Symbolizują harmonię, kobiecość i ponadczasowe piękno, jednocześnie nadając projektowi unikalny, biżuteryjny wymiar.

Sukienka Paris została stworzona dla kobiet, które cenią szlachetne materiały, wyjątkowe detale i świadomie wybierają.

Spotkanie rzemiosła, biżuterii i jedwabiu w jednej formie .', 'Sukienka Paris . Perły . światło . jedwab .

Sukienka Paris to projekt, w którym klasyczna elegancja spotyka się z autorską konstrukcją. Delikatna forma wykonana z naturalnego jedwabiu została zawieszona na konstrukcji z naturalnych pereł, tworząc wyjątkowe połączenie biżuterii i ubioru.

Miękko układający się jedwab płynnie otula sylwetkę, podkreślając jej naturalne proporcje. Odkryte ramiona, drapowanie przy dekolcie oraz minimalistyczna linia nadają projektowi lekkość i ponadczasowy charakter.

Naturalne perły stanowią integralny element konstrukcji sukienki. Symbolizują harmonię, kobiecość i ponadczasowe piękno, jednocześnie nadając projektowi unikalny, biżuteryjny wymiar.

Sukienka Paris została stworzona dla kobiet, które cenią szlachetne materiały, wyjątkowe detale i świadomie wybierają.

Spotkanie rzemiosła, biżuterii i jedwabiu w jednej formie .', '{"34","36","38","40"}', false, true, '100% jedwab, naturalne perły', '100% jedwab, naturalne perły', 'Biały', 'Biały') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('18-set-angel', '18.Set Angel', 280000, 'set', 'deep-ly-me', '/img/products/18-set-angel/0.webp', '{"/img/products/18-set-angel/0.webp","/img/products/18-set-angel/1.webp","/img/products/18-set-angel/2.webp"}', 'Set Angel . Linia . Proporcja .

Set Angel to projekt oparty na sile prostoty. Minimalistyczna forma spotyka się z precyzją kroju i szlachetnością naturalnego jedwabiu, tworząc sylwetkę nowoczesną, lekką i ponadczasową.

Top Angel odsłania ramiona i plecy, podkreślając architekturę kobiecej sylwetki. Charakterystyczne wiązanie przy szyi nadaje projektowi subtelny, rzeźbiarski charakter, podczas gdy miękko układający się jedwab tworzy naturalną grę światła i ruchu.

Spódnica Japan na zakład z jedwabiu płynnie podąża za sylwetką, nadając całości lekkość i swobodę. Czerń i biel tworzą kontrast, który od dekad pozostaje symbolem niewymuszonej elegancji.', 'Set Angel . Linia . Proporcja .

Set Angel to projekt oparty na sile prostoty. Minimalistyczna forma spotyka się z precyzją kroju i szlachetnością naturalnego jedwabiu, tworząc sylwetkę nowoczesną, lekką i ponadczasową.

Top Angel odsłania ramiona i plecy, podkreślając architekturę kobiecej sylwetki. Charakterystyczne wiązanie przy szyi nadaje projektowi subtelny, rzeźbiarski charakter, podczas gdy miękko układający się jedwab tworzy naturalną grę światła i ruchu.

Spódnica Japan na zakład z jedwabiu płynnie podąża za sylwetką, nadając całości lekkość i swobodę. Czerń i biel tworzą kontrast, który od dekad pozostaje symbolem niewymuszonej elegancji.', '{"34","36","38","40"}', false, true, '100% jedwab', '100% jedwab', null, null) on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('18-set-amey-1', '18.Set Amey', 300000, 'set', 'deep-ly-me', '/img/products/18-set-amey-1/0.webp', '{"/img/products/18-set-amey-1/0.webp","/img/products/18-set-amey-1/1.webp","/img/products/18-set-amey-1/2.webp","/img/products/18-set-amey-1/3.webp"}', 'Set Amey . Warstwa . ruch . jedwab .

Set Amey powstał z fascynacji lekkością naturalnych tkanin i ich zachowaniem w ruchu. To kompozycja dwóch szlachetnych jedwabi — habotai i żorżety — które wspólnie tworzą formę pełną subtelności i głębi.

Top Amey wykonany z dwóch warstw jedwabiu charakteryzuje się miękką linią i swobodnym układaniem na sylwetce. Delikatny połysk tkaniny podkreśla jej szlachetny charakter, zachowując jednocześnie niewymuszoną elegancję. Wykończony broszkami na ramionach.

Spódnica została wykonana z dwóch warstw naturalnego jedwabiu. Wewnętrzna warstwa z habotai zapewnia komfort i płynność ruchu, natomiast zewnętrzna warstwa z jedwabnej żorżety nadaje całości lekkość, transparentność i wyjątkową dynamikę. Każdy krok sprawia, że tkanina porusza się własnym rytmem, tworząc efekt nieustannie zmieniającej się formy. Zapinana na broszki po dwóch stronach.

Doświadczenie naturalnego jedwabiu w ruchu .', 'Set Amey . Warstwa . ruch . jedwab .

Set Amey powstał z fascynacji lekkością naturalnych tkanin i ich zachowaniem w ruchu. To kompozycja dwóch szlachetnych jedwabi — habotai i żorżety — które wspólnie tworzą formę pełną subtelności i głębi.

Top Amey wykonany z dwóch warstw jedwabiu charakteryzuje się miękką linią i swobodnym układaniem na sylwetce. Delikatny połysk tkaniny podkreśla jej szlachetny charakter, zachowując jednocześnie niewymuszoną elegancję. Wykończony broszkami na ramionach.

Spódnica została wykonana z dwóch warstw naturalnego jedwabiu. Wewnętrzna warstwa z habotai zapewnia komfort i płynność ruchu, natomiast zewnętrzna warstwa z jedwabnej żorżety nadaje całości lekkość, transparentność i wyjątkową dynamikę. Każdy krok sprawia, że tkanina porusza się własnym rytmem, tworząc efekt nieustannie zmieniającej się formy. Zapinana na broszki po dwóch stronach.

Doświadczenie naturalnego jedwabiu w ruchu .', '{"34","36","38","40"}', false, true, '100% jedwab', '100% jedwab', 'Czerń', 'Czerń') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('15-sukienka-paradajsu-1', '15.Sukienka Paradajsu', 260000, 'dress', 'deep-ly-me', '/img/products/15-sukienka-paradajsu-1/0.webp', '{"/img/products/15-sukienka-paradajsu-1/0.webp","/img/products/15-sukienka-paradajsu-1/1.webp","/img/products/15-sukienka-paradajsu-1/2.webp"}', 'PARADAJSU . Tu się zaczynasz .

Paradajsu powstała z potrzeby stworzenia formy . która nie narzuca się ciału . która porusza się razem z nim

To sukienka o miękkiej . płynnej linii . zbudowana z warstw światła . ruchu . oddechu

Otula sylwetkę pozostawiając przestrzeń dla naturalności . lekkości . własnego rytmu

Jej forma zmienia się podczas ruchu . odsłaniając kolejne płaszczyzny jedwabiu niczym krajobraz . który nigdy nie wygląda tak samo dwa razy

PARADAJSU . nie została zaprojektowana po to by modelować ciało

Została stworzona po to by wydobywać obecność

Dla kobiet . które nie potrzebują niczego udowadniać

Dla kobiet . które chcą czuć siebie

Dla kobiet . które wybierają miękkość bez rezygnacji z siły

Każda Sukienka PARADAJSU .

powstaje indywidualnie w pracowni ABSOLUT DIMENSION . z uważnością na materiał proporcje i ruch

To nie jest produkt sezonowy

To forma doświadczenia

To moment powrotu do siebie . PRAWDZIWEJ .', 'PARADAJSU . Tu się zaczynasz .

Paradajsu powstała z potrzeby stworzenia formy . która nie narzuca się ciału . która porusza się razem z nim

To sukienka o miękkiej . płynnej linii . zbudowana z warstw światła . ruchu . oddechu

Otula sylwetkę pozostawiając przestrzeń dla naturalności . lekkości . własnego rytmu

Jej forma zmienia się podczas ruchu . odsłaniając kolejne płaszczyzny jedwabiu niczym krajobraz . który nigdy nie wygląda tak samo dwa razy

PARADAJSU . nie została zaprojektowana po to by modelować ciało

Została stworzona po to by wydobywać obecność

Dla kobiet . które nie potrzebują niczego udowadniać

Dla kobiet . które chcą czuć siebie

Dla kobiet . które wybierają miękkość bez rezygnacji z siły

Każda Sukienka PARADAJSU .

powstaje indywidualnie w pracowni ABSOLUT DIMENSION . z uważnością na materiał proporcje i ruch

To nie jest produkt sezonowy

To forma doświadczenia

To moment powrotu do siebie . PRAWDZIWEJ .', '{"34","36","38","40"}', false, true, null, null, 'Czerń', 'Czerń') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('18-set-aixa', '18.Set AIX''A', 315000, 'set', 'deep-ly-me', '/img/products/18-set-aixa/0.webp', '{"/img/products/18-set-aixa/0.webp","/img/products/18-set-aixa/1.webp","/img/products/18-set-aixa/2.webp"}', 'Set AIX''A Swoboda . Architektura Formy . Jedwab .

Set AIX''A powstał z myślą o kobietach, które cenią prostotę opartą na jakości, proporcji i szlachetności materiałów.

Sukienka Monaco wykonana z jedwabnej satyny miękko otula sylwetkę, poruszając się z każdym krokiem. Jej minimalistyczna forma pozwala materiałowi wybrzmieć w pełni — subtelnie odbijając światło i podkreślając naturalną elegancję.

Bluzka AIX''A stanowi współczesne dopełnienie całości. Luźna, geometryczna forma z charakterystycznymi rozcięciami na ramionach nadaje sylwetce lekkość i nowoczesny charakter, tworząc interesujący kontrast z płynnością jedwabnej sukienki. Punkty osadzenia konstrukcji stanowią białe perły z lawy.

Czerń i biel tworzą ponadczasowe zestawienie, które nie poddaje się sezonowym trendom. To projekt oparty na świadomym minimalizmie, w którym każdy detal ma swoje uzasadnienie.

Nowoczesna definicja elegancji .', 'Set AIX''A Swoboda . Architektura Formy . Jedwab .

Set AIX''A powstał z myślą o kobietach, które cenią prostotę opartą na jakości, proporcji i szlachetności materiałów.

Sukienka Monaco wykonana z jedwabnej satyny miękko otula sylwetkę, poruszając się z każdym krokiem. Jej minimalistyczna forma pozwala materiałowi wybrzmieć w pełni — subtelnie odbijając światło i podkreślając naturalną elegancję.

Bluzka AIX''A stanowi współczesne dopełnienie całości. Luźna, geometryczna forma z charakterystycznymi rozcięciami na ramionach nadaje sylwetce lekkość i nowoczesny charakter, tworząc interesujący kontrast z płynnością jedwabnej sukienki. Punkty osadzenia konstrukcji stanowią białe perły z lawy.

Czerń i biel tworzą ponadczasowe zestawienie, które nie poddaje się sezonowym trendom. To projekt oparty na świadomym minimalizmie, w którym każdy detal ma swoje uzasadnienie.

Nowoczesna definicja elegancji .', '{"34","36","38","40"}', false, true, '100% jedwab', '100% jedwab', null, null) on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('18-set-ana-monaco', '18.Set Ana Monaco', 320000, 'set', 'deep-ly-me', '/img/products/18-set-ana-monaco/0.webp', '{"/img/products/18-set-ana-monaco/0.webp","/img/products/18-set-ana-monaco/1.webp","/img/products/18-set-ana-monaco/2.webp"}', 'Set Ana Monaco . Kontrast . struktura . lekkość .

Połączenie jedwabnej sukienki Monaco z ręcznie wykonanym topem Ana *44* tworzy kompozycję opartą na dialogu dwóch faktur. Gładka, płynna powierzchnia jedwabiu spotyka się z przestrzenną, organiczną strukturą tworzoną ręcznie z naturalnych włókien.

Sukienka Monaco subtelnie otula sylwetkę, podkreślając jej naturalną linię i swobodę ruchu. Top Ana *44* stanowi wyrazisty element projektu — niczym rzeźbiarska forma nałożona na jedwabną bazę, dodając całości głębi i niepowtarzalnego charakteru.

Połączenie czerni i bieli buduje ponadczasową elegancję, w której nowoczesność spotyka rzemiosło.

To projekt dla kobiet, które wybierają formy wymykające się sezonowości i odnajdują luksus w unikalności wykonania.', 'Set Ana Monaco . Kontrast . struktura . lekkość .

Połączenie jedwabnej sukienki Monaco z ręcznie wykonanym topem Ana *44* tworzy kompozycję opartą na dialogu dwóch faktur. Gładka, płynna powierzchnia jedwabiu spotyka się z przestrzenną, organiczną strukturą tworzoną ręcznie z naturalnych włókien.

Sukienka Monaco subtelnie otula sylwetkę, podkreślając jej naturalną linię i swobodę ruchu. Top Ana *44* stanowi wyrazisty element projektu — niczym rzeźbiarska forma nałożona na jedwabną bazę, dodając całości głębi i niepowtarzalnego charakteru.

Połączenie czerni i bieli buduje ponadczasową elegancję, w której nowoczesność spotyka rzemiosło.

To projekt dla kobiet, które wybierają formy wymykające się sezonowości i odnajdują luksus w unikalności wykonania.', '{"34","36","38","40"}', false, true, '100% jedwab', '100% jedwab', null, null) on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('18-set-maturite', '18.Set Maturite', 260000, 'set', 'deep-ly-me', '/img/products/18-set-maturite/0.webp', '{"/img/products/18-set-maturite/0.webp","/img/products/18-set-maturite/1.webp","/img/products/18-set-maturite/2.webp","/img/products/18-set-maturite/3.webp"}', 'Set Maturite . Elegancja wyrażona formą . proporcją . detalem .

Set Maturité to połączenie sukienki Absolut Maturité oraz autorskiego Voile — elementu stworzonego jako współczesna interpretacja nakrycia głowy.

Wykonany z naturalnego jedwabiu zestaw subtelnie otula sylwetkę, podkreślając jej linię i swobodę ruchu. Minimalistyczna forma sukienki kontrastuje z wyrazistym charakterem Voile.

Czerń nadaje projektowi głębi i szlachetności, a ręcznie wykańczane detale podkreślają rzemieślniczy charakter kreacji.

Set Maturité został stworzony dla kobiet, które wybierają świadomy luksus, wyjątkowe materiały i projekty posiadające własną tożsamość.

kompletna forma wyrazu .', 'Set Maturite . Elegancja wyrażona formą . proporcją . detalem .

Set Maturité to połączenie sukienki Absolut Maturité oraz autorskiego Voile — elementu stworzonego jako współczesna interpretacja nakrycia głowy.

Wykonany z naturalnego jedwabiu zestaw subtelnie otula sylwetkę, podkreślając jej linię i swobodę ruchu. Minimalistyczna forma sukienki kontrastuje z wyrazistym charakterem Voile.

Czerń nadaje projektowi głębi i szlachetności, a ręcznie wykańczane detale podkreślają rzemieślniczy charakter kreacji.

Set Maturité został stworzony dla kobiet, które wybierają świadomy luksus, wyjątkowe materiały i projekty posiadające własną tożsamość.

kompletna forma wyrazu .', '{"34","36","38","40"}', false, true, '100% jedwab', '100% jedwab', 'Czerń', 'Czerń') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('18-set-da-nuta', '18. Set DA.NUTA', 260000, 'dress', 'poza-murem', '/img/products/18-set-da-nuta/0.webp', '{"/img/products/18-set-da-nuta/0.webp","/img/products/18-set-da-nuta/1.webp","/img/products/18-set-da-nuta/2.webp","/img/products/18-set-da-nuta/3.webp"}', 'Set DA.NUTA . Miękkość formy .

Ręcznie wykonana bawełniana bluzka Première zachwyca subtelną strukturą splotu. Delikatnie dopasowuje się do sylwetki, podkreślając jej naturalne proporcje i nadając całości lekkości.

Spódnica DA.NUTA uszyta z surowego jedwabiu urzeka charakterystyczną fakturą materiału. Jej płynna linia porusza się wraz z ciałem, tworząc elegancką, swobodną sylwetkę.

To duet, który łączy komfort z wyrafinowaniem — idealny zarówno na letnie spacery nad morzem, jak i na chwile, które nie wymagają niczego więcej niż obecności.

To harmonijne połączenie rzemiosła, naturalnych materiałów i ponadczasowej elegancji — stworzone dla kobiet, które wybierają jakość odczuwalną przy każdym ruchu .', 'Set DA.NUTA . Miękkość formy .

Ręcznie wykonana bawełniana bluzka Première zachwyca subtelną strukturą splotu. Delikatnie dopasowuje się do sylwetki, podkreślając jej naturalne proporcje i nadając całości lekkości.

Spódnica DA.NUTA uszyta z surowego jedwabiu urzeka charakterystyczną fakturą materiału. Jej płynna linia porusza się wraz z ciałem, tworząc elegancką, swobodną sylwetkę.

To duet, który łączy komfort z wyrafinowaniem — idealny zarówno na letnie spacery nad morzem, jak i na chwile, które nie wymagają niczego więcej niż obecności.

To harmonijne połączenie rzemiosła, naturalnych materiałów i ponadczasowej elegancji — stworzone dla kobiet, które wybierają jakość odczuwalną przy każdym ruchu .', '{"34","36","38","40"}', false, true, '100% jedwab, 100% bawełna', '100% jedwab, 100% bawełna', null, null) on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('38-sukienka-me-8', '38.Sukienka Me.8', 440000, 'dress', 'poza-murem', '/img/products/38-sukienka-me-8/0.webp', '{"/img/products/38-sukienka-me-8/0.webp","/img/products/38-sukienka-me-8/1.webp","/img/products/38-sukienka-me-8/2.webp","/img/products/38-sukienka-me-8/3.webp"}', 'Sukienka ME.8

Sukienka ME.8 to manifest rzemiosła, lekkości i świadomego luksusu. Ręcznie wykonana ze 100% bawełny. Tworzy subtelną, ażurową strukturę przypominającą morską pianę unoszoną przez wiatr.

Pod warstwą ręcznie wykonanej bawełnianej warstwy znajduje się delikatna jedwabna dzianina, która miękko otula sylwetkę, zapewniając komfort noszenia i wyjątkową płynność ruchu.', 'Sukienka ME.8

Sukienka ME.8 to manifest rzemiosła, lekkości i świadomego luksusu. Ręcznie wykonana ze 100% bawełny. Tworzy subtelną, ażurową strukturę przypominającą morską pianę unoszoną przez wiatr.

Pod warstwą ręcznie wykonanej bawełnianej warstwy znajduje się delikatna jedwabna dzianina, która miękko otula sylwetkę, zapewniając komfort noszenia i wyjątkową płynność ruchu.', '{"34","36","38","40"}', false, true, '100% dzianina jedwabna, 100% bawełna', '100% dzianina jedwabna, 100% bawełna', 'Biały', 'Biały') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('38-sukienka-cote-dazur', '38.Sukienka Côte d''Azur', 145000, 'dress', 'poza-murem', '/img/products/38-sukienka-cote-dazur/0.webp', '{"/img/products/38-sukienka-cote-dazur/0.webp","/img/products/38-sukienka-cote-dazur/1.webp"}', 'Sukienka Côte d''Azur . Esencja elegancji .

Sukienka Côte d''Azur została wykonana z mięsistego włoskiego weluru, który subtelnie otula ciało i podkreśla naturalną linię sylwetki. Odkryte plecy, szlachetna forma oraz delikatnie opływający materiał tworzą harmonijną kompozycję.

Minimalistyczna, a jednocześnie wyrazista .', 'Sukienka Côte d''Azur . Esencja elegancji .

Sukienka Côte d''Azur została wykonana z mięsistego włoskiego weluru, który subtelnie otula ciało i podkreśla naturalną linię sylwetki. Odkryte plecy, szlachetna forma oraz delikatnie opływający materiał tworzą harmonijną kompozycję.

Minimalistyczna, a jednocześnie wyrazista .', '{"34","36","38","40"}', false, true, '95% włoski welur, 5% elastan', '95% włoski welur, 5% elastan', 'Śmietanowa biel', 'Śmietanowa biel') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('sukienka-cote-dazur-1', '38.Sukienka Côte d''Azur', 145000, 'dress', 'new-york-city', '/img/products/sukienka-cote-dazur-1/0.webp', '{"/img/products/sukienka-cote-dazur-1/0.webp","/img/products/sukienka-cote-dazur-1/1.webp","/img/products/sukienka-cote-dazur-1/2.webp"}', 'Sukienka Côte d''Azur . Esencja elegancji .

Sukienka Côte d''Azur została wykonana z mięsistego włoskiego weluru, który subtelnie otula ciało i podkreśla naturalną linię sylwetki. Odkryte plecy, szlachetna forma oraz delikatnie opływający materiał tworzą harmonijną kompozycję.

Minimalistyczna, a jednocześnie wyrazista .', 'Sukienka Côte d''Azur . Esencja elegancji .

Sukienka Côte d''Azur została wykonana z mięsistego włoskiego weluru, który subtelnie otula ciało i podkreśla naturalną linię sylwetki. Odkryte plecy, szlachetna forma oraz delikatnie opływający materiał tworzą harmonijną kompozycję.

Minimalistyczna, a jednocześnie wyrazista .', '{"34","36","38","40"}', true, true, '95% włoski welur, 5% elastan', '95% włoski welur, 5% elastan', 'Śmietanowa biel', 'Śmietanowa biel') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('set-golden-age', 'Set Golden Age', 300000, 'set', 'poza-murem', '/img/products/set-golden-age/0.webp', '{"/img/products/set-golden-age/0.webp","/img/products/set-golden-age/1.webp","/img/products/set-golden-age/2.webp"}', 'Set Golden Age . między Światłem a Cieniem . między prostotą a Sztuką .

Jedwabna sukienka Monaco stanowi esencję ponadczasowej elegancji, podczas gdy top Golden Age wprowadza rzeźbiarską formę inspirowaną estetyką współczesnego luksusu.

Miękkie refleksy satyny spotykają się z płynną linią jedwabiu, tworząc sylwetkę pełną harmonii i wyrafinowania.', 'Set Golden Age . między Światłem a Cieniem . między prostotą a Sztuką .

Jedwabna sukienka Monaco stanowi esencję ponadczasowej elegancji, podczas gdy top Golden Age wprowadza rzeźbiarską formę inspirowaną estetyką współczesnego luksusu.

Miękkie refleksy satyny spotykają się z płynną linią jedwabiu, tworząc sylwetkę pełną harmonii i wyrafinowania.', '{"34","36","38","40"}', false, true, null, null, null, null) on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('set-chania', 'Set Chania', 170000, 'set', 'poza-murem', '/img/products/set-chania/0.webp', '{"/img/products/set-chania/0.webp","/img/products/set-chania/1.webp","/img/products/set-chania/2.webp","/img/products/set-chania/3.webp"}', 'Set Chania . Naturalna Swoboda .

Zestawienie Sukienki Chania wykonanej ze 100% bawełny z Topem Monaco z jedwabnej satyny tworzy harmonijną opowieść o współczesnym luksusie — lekkim . świadomym . ponadczasowym .

Minimalistyczna forma sukienki Chania miękko otula sylwetkę, pozwalając skórze oddychać i poruszać się w pełnej swobodzie. Naturalna bawełna nadaje jej organiczny charakter, podczas gdy jedwabny top Monaco wprowadza subtelny blask i wyrafinowaną strukturę.', 'Set Chania . Naturalna Swoboda .

Zestawienie Sukienki Chania wykonanej ze 100% bawełny z Topem Monaco z jedwabnej satyny tworzy harmonijną opowieść o współczesnym luksusie — lekkim . świadomym . ponadczasowym .

Minimalistyczna forma sukienki Chania miękko otula sylwetkę, pozwalając skórze oddychać i poruszać się w pełnej swobodzie. Naturalna bawełna nadaje jej organiczny charakter, podczas gdy jedwabny top Monaco wprowadza subtelny blask i wyrafinowaną strukturę.', '{"34","36","38","40"}', false, false, '100% jedwab, 100% bawełna', '100% jedwab, 100% bawełna', null, null) on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('set-monaco', 'Set Monaco', 180000, 'set', 'poza-murem', '/img/products/set-monaco/0.webp', '{"/img/products/set-monaco/0.webp","/img/products/set-monaco/1.webp","/img/products/set-monaco/2.webp","/img/products/set-monaco/3.webp"}', 'Set Monaco . Jak poranek na Riwierze .

Ciepłe światło na skórze . Powolny rytm dnia . Jedwab poruszający się wraz z każdym krokiem .

Top Monaco i Spódnica Kioto zostały stworzone z fascynacji ponadczasową elegancją kobiet, które nigdy nie muszą wybierać pomiędzy komfortem a wyrafinowaniem.

Szlachetność satyny jedwabnej spotyka się z organiczną fakturą surowego jedwabiu, tworząc kompozycję pełną harmonii i subtelnego luksusu.

to estetyka Ż Y C I A . Set Monaco dla kobiet, które podróżują lekko, żyją świadomie i wybierają piękno .', 'Set Monaco . Jak poranek na Riwierze .

Ciepłe światło na skórze . Powolny rytm dnia . Jedwab poruszający się wraz z każdym krokiem .

Top Monaco i Spódnica Kioto zostały stworzone z fascynacji ponadczasową elegancją kobiet, które nigdy nie muszą wybierać pomiędzy komfortem a wyrafinowaniem.

Szlachetność satyny jedwabnej spotyka się z organiczną fakturą surowego jedwabiu, tworząc kompozycję pełną harmonii i subtelnego luksusu.

to estetyka Ż Y C I A . Set Monaco dla kobiet, które podróżują lekko, żyją świadomie i wybierają piękno .', '{"34","36","38","40"}', false, false, null, null, 'Złoty-Beż', 'Złoty-Beż') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('set-megami', 'Set Megami', 360000, 'set', 'poza-murem', '/img/products/set-megami/0.webp', '{"/img/products/set-megami/0.webp","/img/products/set-megami/1.webp","/img/products/set-megami/2.webp"}', 'Set Megami .

Połączenie jedwabnej Sukienki Megami z lekkim Żakietem M’Antoine tworzy współczesną definicję luksusu — Swobodnego . Niewymuszonego. Ponadczasowego .

Megami miękko podąża za sylwetką, podkreślając jej naturalne proporcje. Delikatny połysk jedwabiu, subtelne ramiączka i płynna linia sukienki nadają całości zmysłowości, która nie potrzebuje nadmiaru.

Narzucany na ramiona żakiet M’Antoine wprowadza element lekkości. Jego zwiewna forma porusza się wraz z ciałem, tworząc harmonijną kompozycję.

dla chwil, które pozostają na zawsze .', 'Set Megami .

Połączenie jedwabnej Sukienki Megami z lekkim Żakietem M’Antoine tworzy współczesną definicję luksusu — Swobodnego . Niewymuszonego. Ponadczasowego .

Megami miękko podąża za sylwetką, podkreślając jej naturalne proporcje. Delikatny połysk jedwabiu, subtelne ramiączka i płynna linia sukienki nadają całości zmysłowości, która nie potrzebuje nadmiaru.

Narzucany na ramiona żakiet M’Antoine wprowadza element lekkości. Jego zwiewna forma porusza się wraz z ciałem, tworząc harmonijną kompozycję.

dla chwil, które pozostają na zawsze .', '{"34","36","38","40"}', false, false, null, null, 'Masłowy', 'Masłowy') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('set-kioto', 'Set Kioto', 280000, 'set', 'poza-murem', '/img/products/set-kioto/0.webp', '{"/img/products/set-kioto/0.webp","/img/products/set-kioto/1.webp","/img/products/set-kioto/2.webp"}', 'Set Kioto . Pomiędzy sztuką a codziennością .

Naturalny jedwab spotyka ręczne rzemiosło, tworząc sylwetkę pełną harmonii i niewymuszonej elegancji . Szlachetność materiałów, subtelność formy i piękno ręcznej pracy składają się na projekt, który celebruje wszystko to, co dziś najrzadsze — Czas . Jakość . Autentyczność .

Set składający się z trzech elementów:

- Spódnica Kioto - Top Absolut - Top Ana Arte

Piękno tkwi w tym, co prawdziwe .', 'Set Kioto . Pomiędzy sztuką a codziennością .

Naturalny jedwab spotyka ręczne rzemiosło, tworząc sylwetkę pełną harmonii i niewymuszonej elegancji . Szlachetność materiałów, subtelność formy i piękno ręcznej pracy składają się na projekt, który celebruje wszystko to, co dziś najrzadsze — Czas . Jakość . Autentyczność .

Set składający się z trzech elementów:

- Spódnica Kioto - Top Absolut - Top Ana Arte

Piękno tkwi w tym, co prawdziwe .', '{"34","36","38","40"}', false, false, null, null, 'Ecru', 'Ecru') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('7-sukienka-megami', '7.Sukienka Megami', 260000, 'dress', 'bali', '/img/products/7-sukienka-megami/0.webp', '{"/img/products/7-sukienka-megami/0.webp","/img/products/7-sukienka-megami/1.webp","/img/products/7-sukienka-megami/2.webp","/img/products/7-sukienka-megami/3.webp"}', 'Sukienka Megami . Jak światło na powierzchni wody .

Nieuchwytna. Naturalna. Niezapomniana.

Wykonana z jedwabnej satyny Megami celebruje piękno ruchu. Jej forma została oczyszczona ze wszystkiego, co zbędne, pozostawiając jedynie proporcje, światło i szlachetność materiału.

To projekt inspirowany kobietą, która nie potrzebuje niczego udowadniać. Jej siła tkwi w spokoju, a elegancja w autentyczności.

Megami to harmonia natury połączona z japońskim znaczeniem słowa „Megami” — bogini. Doskonałość płynącą z autentyczności, spokoju i świadomej wartości siebie.', 'Sukienka Megami . Jak światło na powierzchni wody .

Nieuchwytna. Naturalna. Niezapomniana.

Wykonana z jedwabnej satyny Megami celebruje piękno ruchu. Jej forma została oczyszczona ze wszystkiego, co zbędne, pozostawiając jedynie proporcje, światło i szlachetność materiału.

To projekt inspirowany kobietą, która nie potrzebuje niczego udowadniać. Jej siła tkwi w spokoju, a elegancja w autentyczności.

Megami to harmonia natury połączona z japońskim znaczeniem słowa „Megami” — bogini. Doskonałość płynącą z autentyczności, spokoju i świadomej wartości siebie.', '{"34","36","38","40"}', true, false, null, null, 'Biały', 'Biały') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('38-sukienka-nice', '38.Sukienka Nice', 280000, 'dress', 'deep-ly-me', '/img/products/38-sukienka-nice/0.webp', '{"/img/products/38-sukienka-nice/0.webp","/img/products/38-sukienka-nice/1.webp","/img/products/38-sukienka-nice/2.webp","/img/products/38-sukienka-nice/3.webp"}', 'Dress Nice

Nothing is more luxurious than confidence expressed with conviction .

Nice was created for women who understand that truth is elegance . When you are your true self . You don''t have to prove anything . You defend yourself . Your form speaks for itself .

Noble silk softly drapes the body, creating a silhouette full of movement and light. The open back gives the creation a subtle sensuality, while the minimalist form leaves space for what is most important - the presence of the woman who wears it.', 'Sukienka Nice

Nic nie jest bardziej luksusowe niż pewność siebie wyrażona przekonaniem .

Nice powstała dla kobiet, które rozumieją, że prawda jest elegancją . Kiedy jesteś prawdziwą sobą . Nic nie musisz . Bronisz się sama . Twoja forma mówi za Ciebie .

Szlachetny jedwab miękko opływa ciało, tworząc sylwetkę pełną ruchu i światła. Odkryte plecy nadają kreacji subtelną zmysłowość, podczas gdy minimalistyczna forma pozostawia przestrzeń dla tego, co najważniejsze — obecności kobiety, która ją nosi.', '{"36","38","40"}', false, false, null, null, 'Czerń', 'Czerń') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('15-sukienka-desse-pele', '15.Sukienka Desse Pele', 380000, 'dress', 'st-tropez', '/img/products/15-sukienka-desse-pele/0.webp', '{"/img/products/15-sukienka-desse-pele/0.webp","/img/products/15-sukienka-desse-pele/1.webp","/img/products/15-sukienka-desse-pele/2.webp"}', 'Desse Pele Dress . Lightness that follows every movement .

Desse Pele is the essence of effortless elegance. A flowing form, softly draped fabric, and a subtly accentuated silhouette create a creation that enchants with its simplicity and timeless character.

A high neckline with delicate ruffles gives the dress nobility, while the exposed shoulders emphasize feminine subtlety. The adjustable tie at the waist allows the fit to be tailored to the figure, and the smoothly falling hem moves with extraordinary lightness with every step. Made of silk.

Perfect for summer parties, travels, sunset dinners, and moments worth celebrating.', 'Sukienka Desse Pele . Lekkość, która podąża za każdym ruchem .

Desse Pele to esencja swobodnej elegancji. Zwiewna forma, miękko układająca się tkanina i subtelnie podkreślona sylwetka tworzą kreację, która zachwyca swoją prostotą i ponadczasowym charakterem.

Wysoki dekolt z delikatnymi marszczeniami nadaje sukience szlachetności, podczas gdy odkryte ramiona podkreślają kobiecą subtelność. Regulowane wiązanie w talii pozwala dopasować fason do sylwetki, a płynnie opadający dół porusza się z niezwykłą lekkością przy każdym kroku. Wykonana z jedwabiu.

Idealna na letnie przyjęcia, podróże, kolacje przy zachodzie słońca oraz chwile, które warto celebrować.', '{"34","36","38","40"}', true, false, null, null, 'Brudny róż', 'Brudny róż') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('suknia-event-desse-pele', '15.Sukienka Desse Pele', 380000, 'dress', 'say-shell', '/img/products/suknia-event-desse-pele/0.webp', '{"/img/products/suknia-event-desse-pele/0.webp","/img/products/suknia-event-desse-pele/1.webp","/img/products/suknia-event-desse-pele/2.webp"}', 'Desse Pele Dress . Lightness that follows every movement .

Desse Pele is the essence of effortless elegance. An airy silhouette, softly flowing fabric, and a subtly defined shape create a dress that captivates through its simplicity and timeless character.

The high neckline with delicate gathers lends nobility to the dress, while the bare shoulders highlight feminine subtlety. The adjustable waist tie allows the silhouette to be tailored to the body, while the fluidly falling hem moves with remarkable lightness at every step. Crafted from silk.

Perfect for summer gatherings, travels, sunset dinners, and moments worth celebrating.', 'Sukienka Desse Pele . Lekkość, która podąża za każdym ruchem .

Desse Pele to esencja swobodnej elegancji. Zwiewna forma, miękko układająca się tkanina i subtelnie podkreślona sylwetka tworzą kreację, która zachwyca swoją prostotą i ponadczasowym charakterem.

Wysoki dekolt z delikatnymi marszczeniami nadaje sukience szlachetności, podczas gdy odkryte ramiona podkreślają kobiecą subtelność. Regulowane wiązanie w talii pozwala dopasować fason do sylwetki, a płynnie opadający dół porusza się z niezwykłą lekkością przy każdym kroku. Wykonana z jedwabiu.

Idealna na letnie przyjęcia, podróże, kolacje przy zachodzie słońca oraz chwile, które warto celebrować.', '{"34","36","38","40"}', true, false, 'Jedwab', '100% jedwab', 'Dusty pink', 'Brudny róż') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('amey-53', '38.Sukienka Ame 53''', 440000, 'dress', 'bali', '/img/products/amey-53/0.webp', '{"/img/products/amey-53/0.webp","/img/products/amey-53/1.webp","/img/products/amey-53/2.webp"}', 'Ame''53 Dress . Like light moving with the body .

Ame''53 is a story of lightness, freedom, and timeless femininity. Created from eight meters of silk georgette, it captivates with its extraordinary fluidity of movement and the subtle play of light across the surface of the fabric.

Its minimalist form allows what matters most to emerge — the quality of the material, the harmony of proportions, and the presence of the woman who wears it. A softly flowing construction and delicately layered silhouette create an almost weightless sensation, evoking the feeling of an ocean breeze and the serenity of a summer morning.

Ame''53 was created for women who find beauty in simplicity and choose pieces that remain relevant beyond time.', 'Sukienka Ame 53'' . Jak światło poruszające się wraz z ciałem .

Ame''53 jest opowieścią o lekkości, swobodzie i ponadczasowej kobiecości. Stworzona z ośmiu metrów jedwabnej żorżety, zachwyca niezwykłą płynnością ruchu i subtelną grą światła na powierzchni tkaniny.

Jej minimalistyczna forma pozwala wybrzmieć temu, co najważniejsze — jakości materiału, proporcjom i obecności kobiety, która ją nosi. Delikatnie opływająca sylwetkę konstrukcja oraz miękko układające się warstwy tworzą wrażenie niemal nieważkości, przywołując skojarzenia z morską bryzą i spokojem letniego poranka.

Ame''53 została stworzona dla kobiet, które odnajdują piękno w prostocie i wybierają rzeczy, które pozostają aktualne niezależnie od czasu.', '{"36","38","40","42"}', false, false, null, null, 'Biały', 'Biały') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('18-set-blue-ocean', '18.Set Blue Ocean', 280000, 'set', 'new-chapter', '/img/products/18-set-blue-ocean/0.webp', '{"/img/products/18-set-blue-ocean/0.webp","/img/products/18-set-blue-ocean/1.webp","/img/products/18-set-blue-ocean/2.webp","/img/products/18-set-blue-ocean/3.webp"}', 'Unique . SM.ART . Nobility

take me wherever you go...

Set Blue Ocean

in lightness . freedom ... nobly you permeate your world

filled with light

liberated

your own . unique ...

*

Set:

1. Blue Ocean Top - artistically handmade, light and sensual

2. Japan Skirt - item No. 24 in the SM.ART Wardrobe

Made of wrap-around silk.

The skirt moves beautifully to the rhythm of your body... giving lightness and enormous freedom to the silhouette!

Fulfills all assumptions: creative . comfortable . creates compositions in the E.W.S system, meaning 1 skirt = many occasions. You change accessories and you have it in styling variations:

Event . Work . Street

Personalization - made-to-measure project execution:

Contact us via email: info@absolutdimension.com or by phone: +48 732 808 804', 'Unique . SM.ART . Nobility

take me wherever you go...

Set Blue Ocean

w lekkości . swobodzie ... szlachetnie przenikasz do swojego świata

przepełniona światłem

uwolniona

własna . niepowtarzalna ...

*

Zestaw:

1. Top Blue Ocean - artystycznie ręcznie wykonany, lekki i zmysłowy

2. Spódnica Japan - pozycja nr 24 w SM.ART Garderobie

Wykonana z jedwabiu na zakład.

Spódnica przepięknie się porusza w rytm Twojego ciała.. nadając lekkości i ogromnej swobody sylwetce!

Realizuje wszystkie założenia: kreatywna . komfortowa . tworzy kompozycje w systemie E.W.S czyli 1 spódnica = wiele okazji Zmieniasz dodatki i masz ją w odsłonach stylizacji:

Event . Work . Street

Personalizacja - wykonanie projektu na miarę:

Skontaktuj się z nami przez e-mail: info@absolutdimension.com lub telefonicznie: +48 732 808 804', '{"34","36","38","40"}', false, false, null, null, 'Błękitny', 'Błękitny') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('18-set-ballets', '18.Set Ballet''s', 240000, 'set', 'new-chapter', '/img/products/18-set-ballets/0.webp', '{"/img/products/18-set-ballets/0.webp","/img/products/18-set-ballets/1.webp","/img/products/18-set-ballets/2.webp","/img/products/18-set-ballets/3.webp"}', 'Unique . SM.ART . Nobility

18.Set Ballet''s

Top Absolut

A light and noble top made of silk satin. Perfect for hot days. It works great for everyday use, creating beautiful and comfortable combinations with sweaters, jackets, scarves and other wardrobe items...

A sophisticated and balanced combination of exclusivity and practicality in form and line...

Ballets Skirt

It''s the lightest skirt in the world!

Moves beautifully to the rhythm of your body... giving you lightness and immense freedom! Perfect for all occasions, just change your shoes and accessories - and you''ll be ready for anything from an event to a stroll!

Made from a double layer of silk.', 'Unique . SM.ART . Nobility

18.Set Ballet''s

Top Absolut

Lekki i szlachetny top z jedwabnej satyny. Idealne rozwiązanie na upalne dni . Służy wyśmienicie w codziennym użytkowaniu tworząc piękne i wygodne kompozycje ze swetrami, żakietami, szalami i pozostałymi elementami garderoby...

Wyrafinowane i wyważone w formie i linii połączenie ekskluzywności z użytkowością...

Spódnica Ballets

To najlżejsza spódnica świata!

Przepięknie poruszająca się w rytm Twojego ciała.. nadając Tobie lekkości i ogromnej swobody! Idealna na wszelkie okazje, wystarczy ze zmienisz buty i dodatki - a spełniać się będziesz od eventu po spacer!

Wykonana z podwójnej warstwy jedwabiu.', '{"34","36","38","40"}', false, false, '100% Silk', '100% Jedwab', 'Black', 'Czarny') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('18-set-amour', '18. Set Amour', 360000, 'set', 'new-chapter', '/img/products/18-set-amour/0.webp', '{"/img/products/18-set-amour/0.webp","/img/products/18-set-amour/1.webp","/img/products/18-set-amour/2.webp","/img/products/18-set-amour/3.webp"}', 'Unique . SM.ART . Nobility

Set Turks & Cacios

with lightness . freedom ... you nobly penetrate into your world

full of light

liberated

your own . unique ...

*

Set:

1. Top Nobility - artistically handmade, light and sensual

2. Japan Amour Skirt - item No. 24 in the SM.ART Wardrobe

It''s the lightest skirt in the world!

Made of two light layers: silk and silk georgette. Tied at the waist with a large slit at the front on the leg.

The skirt moves beautifully to the rhythm of your body... giving lightness and immense freedom to the silhouette!

It fulfills all assumptions: creative . comfortable . creates compositions in the E.W.S system, which means 1 skirt = many occasions You change accessories and you have it in different styling versions:

Event . Work . Street', 'SET AMOUR . Miłość . która nie potrzebuje deklaracji

SET AMOUR to kompozycja zbudowana z miękkości światła . ruchu

Trzy niezależne elementy tworzą jedną opowieść:

. jedwabna spódnica. jedwabny top. ręcznie tworzona narzutka z włóczki

Każda warstwa może istnieć samodzielnie Razem tworzą formę . która otula ciało lekkością . subtelną obecnością

AMOUR nie przyciąga uwagi krzykiem

Przyciąga spokojem

To forma dla kobiet . które nie potrzebują podkreślać swojej siły . ponieważ ją znają

Miękkie linie . delikatne przejścia materiałów . ręcznie budowana faktura narzutki tworzą sylwetkę pozostającą w ruchu . zmieniając się wraz ze światłem . gestem . sposobem noszenia

To nie jest zestaw oparty na zasadach

To przestrzeń do własnej interpretacji

Może być subtelny i codzienny

Może stać się formą wieczorową

Może być wspomnieniem lata

Może być osobistym rytuałem piękna

W ABSOLUT DIMENSION ubranie nie dominuje kobiety

Pozwola jej istnieć

SET AMOUR został stworzony właśnie z tej intencji', '{"34","36","38","40"}', false, false, null, null, 'Różowy', 'Różowy') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('15-sukienka-paradajsu', '15.Sukienka Paradajsu', 260000, 'dress', 'new-chapter', '/img/products/15-sukienka-paradajsu/0.webp', '{"/img/products/15-sukienka-paradajsu/0.webp","/img/products/15-sukienka-paradajsu/1.webp","/img/products/15-sukienka-paradajsu/2.webp","/img/products/15-sukienka-paradajsu/3.webp"}', 'PARADAJSU . This is where you begin .

Paradajsu was born from the need to create a form . that does not impose itself on the body . that moves together with it

It is a dress with a soft . fluid silhouette . built from layers of light . movement . breath

It embraces the figure while leaving space for naturalness . lightness . your own rhythm

Its form changes with movement . revealing new planes of silk like a landscape . that never looks the same twice

PARADAJSU . was not designed to shape the body

It was created to reveal presence

For women . who do not need to prove anything

For women . who want to feel themselves

For women . who choose softness without giving up strength

Each PARADAJSU . Dress

is created individually in the ABSOLUT DIMENSION atelier . with attention to fabric proportions and movement

This is not a seasonal product

It is a form of experience

It is a moment of returning to your TRUE self .', 'PARADAJSU . Tu się zaczynasz .

Paradajsu powstała z potrzeby stworzenia formy . która nie narzuca się ciału . która porusza się razem z nim

To sukienka o miękkiej . płynnej linii . zbudowana z warstw światła . ruchu . oddechu

Otula sylwetkę pozostawiając przestrzeń dla naturalności . lekkości . własnego rytmu

Jej forma zmienia się podczas ruchu . odsłaniając kolejne płaszczyzny jedwabiu niczym krajobraz . który nigdy nie wygląda tak samo dwa razy

PARADAJSU . nie została zaprojektowana po to by modelować ciało

Została stworzona po to by wydobywać obecność

Dla kobiet . które nie potrzebują niczego udowadniać

Dla kobiet . które chcą czuć siebie

Dla kobiet . które wybierają miękkość bez rezygnacji z siły

Każda Sukienka PARADAJSU .

powstaje indywidualnie w pracowni ABSOLUT DIMENSION . z uważnością na materiał proporcje i ruch

To nie jest produkt sezonowy

To forma doświadczenia

To moment powrotu do siebie . PRAWDZIWEJ .', '{"34","36","38","40"}', false, false, null, null, 'Różowy', 'Różowy') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('monaco-pulli-ocean', '2.Pulli *44*', 150000, 'cardigan', 'cannes', '/img/products/monaco-pulli-ocean/0.webp', '{"/img/products/monaco-pulli-ocean/0.webp","/img/products/monaco-pulli-ocean/1.webp","/img/products/monaco-pulli-ocean/2.webp","/img/products/monaco-pulli-ocean/3.webp"}', 'Unique . SM.ART . Nobility

Pulli *44*

An artistic, hand-made pullover that covers your body sensually and lightly. The perfect solution to make you feel feminine and at ease!

Total Look:

(composition of the entire composition in photos)

1. Monaco dress

2. Pulli

3. Handbag Unique', 'Unique . SM.ART . Nobility

Pulli *44*

Artystyczny, ręcznie tworzony pulower który zmysłowo i lekko okrywa Twoje ciało. Idealne rozwiazanie byś czuła się kobieco i swobodnie!

Total Look:

(skład całej kompozycji na zdjęciach)

1. Sukienka Monaco

2. Pulli

3. Torebka Unique', '{"36","38","40","42"}', true, false, '100 % PE', 'PE 100%', 'White', 'Biały') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('28-suknia-mantoine-2', '28.Suknia M''Antoine', 330000, 'dress', 'st-tropez', '/img/products/28-suknia-mantoine-2/0.webp', '{"/img/products/28-suknia-mantoine-2/0.webp","/img/products/28-suknia-mantoine-2/1.webp","/img/products/28-suknia-mantoine-2/2.webp","/img/products/28-suknia-mantoine-2/3.webp"}', 'Unique . SM.ART . Nobility

28. Dress M''Antoine

Creative . Unique . Noble .

Dress - Jewelry . The quintessence of composition - coherence, harmony, and balance of utility and beauty.

Very light, it freely interacts with the movement of the body, the cut subtly emphasizes the figure, revealing the essence of feminine beauty... sensuality and grace.

Made from one of the most luxurious materials in the world - 100% pure satin silk – a fabric that breathes and provides wonderful comfort for the body. Each item is individually sewn, maintaining a creative process that results in a unique and one-of-a-kind dress. Jewelry is part of the dress''s construction.

The dress is available in a wide range of colors (please inquire individually)

Accessories complementing the entire composition are also available for sale:

Total Look:

• 28_M''Antoine Dress

• 8_M''Antoine Jacket

• 10_Bag Bali', 'Unique . SM.ART . Nobility

28.Suknia M''Antoine

Kreatywnie . Unikalnie . Szlachetnie .

Suknia - Biżuteria . Kwintesencja kompozycji - spójność, harmonia i równowaga połączenia użytkowości i piękna.

Bardzo lekka, swobodnie współgra z ruchem ciała, krój lekko podkreśla sylwetkę ukazując istotę piękna kobiecości... zmysłowość i wdzięku.

Wykonana z jednego z najbardziej luksusowych materiałów świata - 100% czystego satynowego jedwabiu – tkaniny, która oddycha i daje cudowny komfort dla ciała. Każdy egzemplarz szyty jest indywidualnie z zachowaniem kreatywnego twórczego procesu którego efektem jest wyjątkowy i niepowtarzalny egzemplarz sukni. Częścią konstrukcji Sukni jest biżuteria

Suknia dostępna jest w szerokiej gamie kolorów (zapytaj nas indywidualnie)

Dodatki dopełniające całą kompozycje dostępne również w sprzedaży:

Total Look:

• 28_Suknia M''Antoine

• 8_Żakiet M''Antoine

• 10_Bag Bali', '{"36","38","40"}', false, false, '100% silk satin', '100% satyna jedwabna', 'Grafit', 'Grafit') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('28-suknia-mantoine-1', '28.Suknia M''Antoine', 350000, 'dress', 'cannes', '/img/products/28-suknia-mantoine-1/0.webp', '{"/img/products/28-suknia-mantoine-1/0.webp","/img/products/28-suknia-mantoine-1/1.webp","/img/products/28-suknia-mantoine-1/2.webp","/img/products/28-suknia-mantoine-1/3.webp"}', 'Unique . SM.ART . Nobility

28.Dress M''Antoine

Creative . Unique . Noble .

Dress - Jewelry. The quintessence of composition - coherence, harmony and balance of combining utility and beauty.

Very light, it freely harmonizes with the movement of the body, the cut gently emphasizes the figure, revealing the essence of feminine beauty... sensuality and grace.

Made from one of the most luxurious materials in the world - 100% pure satin silk – a fabric that breathes and provides wonderful comfort for the body. Each item is sewn individually, preserving a creative artistic process resulting in a unique and one-of-a-kind dress. Jewelry is part of the dress''s construction.

The dress is available in a wide range of colors (inquire individually)

Accessories complementing the entire composition are also available for sale:

Total Look:

• 28_M''Antoine Dress

• 6_Nobility Bag', 'Unique . SM.ART . Nobility

28.Suknia M''Antoine

Kreatywnie . Unikalnie . Szlachetnie .

Suknia - Biżuteria . Kwintesencja kompozycji - spójność, harmonia i równowaga połączenia użytkowości i piękna.

Bardzo lekka, swobodnie współgra z ruchem ciała, krój lekko podkreśla sylwetkę ukazując istotę piękna kobiecości... zmysłowość i wdzięku.

Wykonana z jednego z najbardziej luksusowych materiałów świata - 100% czystego satynowego jedwabiu – tkaniny, która oddycha i daje cudowny komfort dla ciała. Każdy egzemplarz szyty jest indywidualnie z zachowaniem kreatywnego twórczego procesu którego efektem jest wyjątkowy i niepowtarzalny egzemplarz sukni. Częścią konstrukcji Sukni jest biżuteria

Suknia dostępna jest w szerokiej gamie kolorów (zapytaj nas indywidualnie)

Dodatki dopełniające całą kompozycje dostępne również w sprzedaży:

Total Look:

• 28_Suknia M''Antoine

• 6_Torebka Nobility', '{"34","36","38","40"}', false, false, '100% silk satin', '100% satyna jedwabna', 'Grafit', 'Grafit') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('28-suknia-mantoine', '28.Suknia M''Antoine', 330000, 'dress', 'sukienki-event', '/img/products/28-suknia-mantoine/0.webp', '{"/img/products/28-suknia-mantoine/0.webp","/img/products/28-suknia-mantoine/1.webp"}', 'Unique . SM.ART . Nobility

28.Dress M''Antoine

Creative . Unique . Noble .

Dress - Jewelry. The quintessence of composition - coherence, harmony, and balance in combining utility and beauty.

Very light, it freely harmonizes with the body''s movement, the cut subtly emphasizes the figure, revealing the essence of feminine beauty... sensuality and grace.

Made from one of the world''s most luxurious materials - 100% pure satin silk – a fabric that breathes and provides wonderful comfort for the body. Each piece is individually sewn, maintaining a creative process that results in a unique and unrepeatable dress. Jewelry is part of the dress''s construction.

The dress is available in a wide range of colors (ask us individually)

Complementary accessories for the entire composition are also available for sale:

Total Look:

• 28_M''Antoine Dress

• 6_Nobility Handbag', 'Unique . SM.ART . Nobility

28.Suknia M''Antoine

Kreatywnie . Unikalnie . Szlachetnie .

Suknia - Biżuteria . Kwintesencja kompozycji - spójność, harmonia i równowaga połączenia użytkowości i piękna.

Bardzo lekka, swobodnie współgra z ruchem ciała, krój lekko podkreśla sylwetkę ukazując istotę piękna kobiecości... zmysłowość i wdzięku.

Wykonana z jednego z najbardziej luksusowych materiałów świata - 100% czystego satynowego jedwabiu – tkaniny, która oddycha i daje cudowny komfort dla ciała. Każdy egzemplarz szyty jest indywidualnie z zachowaniem kreatywnego twórczego procesu którego efektem jest wyjątkowy i niepowtarzalny egzemplarz sukni. Częścią konstrukcji Sukni jest biżuteria

Suknia dostępna jest w szerokiej gamie kolorów (zapytaj nas indywidualnie)

Dodatki dopełniające całą kompozycje dostępne również w sprzedaży:

Total Look:

• 28_Suknia M''Antoine

• 6_Torebka Nobility', '{"34","36","38","40"}', false, false, '100% silk satin', '100% satyna jedwabna', 'Grafit', 'Grafit') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('poncho-absolut', '8.Poncho Absolut', 180000, 'poncho', 'lou-vre', '/img/products/poncho-absolut/0.webp', '{"/img/products/poncho-absolut/0.webp","/img/products/poncho-absolut/1.webp","/img/products/poncho-absolut/2.webp","/img/products/poncho-absolut/3.webp"}', 'Unique . SM.ART . Nobility

take me wherever you go...

Poncho Absolut - Lightness and freedom express our highest value: *freedom*. A poncho thrown over your shoulders always leaves you free, and made of pressed wool, it is light and noble.', 'Unique . SM.ART . Nobility

take me wherever you go...

Poncho Absolut- Lekkość i swoboda wyrażają naszą najwyższą wartość: *wolność* Poncho narzucona na ramiona pozostawia Cię zawsze swobodną a wykonane z prasowanej wełny jest lekkie i szlachetne', '{"34","36","38","40"}', false, false, '100% WoolThe model is 166 cm tall and wears size 36', '100% WełnaModelka ma 166 cm wzrostu i rozmiar 36', 'Beżowy', 'Beżowy') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('8-zakiet-jour-y-1', '8.Żakiet Jour.y', 250000, 'blazer', 'monaco', '/img/products/8-zakiet-jour-y-1/0.webp', '{"/img/products/8-zakiet-jour-y-1/0.webp","/img/products/8-zakiet-jour-y-1/1.webp"}', 'Unique . SM.ART . Nobility

take me wherever you go...

8. Jour.y Jacket

All-Season Know-How . Noble . Relaxed . Double-layered . Lightweight . Silk velvet jacket . The perfect "cover-up" solution for anything you need!', 'Unique . SM.ART . Nobility

take me wherever you go...

8.Żakiet Jour.y

Całosezonowy Know-How . Szlachetny . Swobodny . Dwu-warstwowy . Lekki . Żakiet z jedwabnego weluru . Idealne rozwiązanie typu "narzutka" na wszystko co potrzebujesz!', '{"34","36","38","40"}', true, false, 'silk velvet, 100% silk', 'welur jedwabny, jedwab 100%', 'Burgund', 'Burgund') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('20-top-monaco', '20.Top Monaco', 60000, 'top', 'monaco', '/img/products/20-top-monaco/0.webp', '{"/img/products/20-top-monaco/0.webp","/img/products/20-top-monaco/1.webp","/img/products/20-top-monaco/2.webp","/img/products/20-top-monaco/3.webp"}', 'Unique . SM.ART . Nobility

take me wherever you go...

20.Top Monaco

with lightness . freedom ... you nobly penetrate into your world

filled with light

liberated

your own . unique ...

*

It fulfills all assumptions: creative . comfortable . it creates compositions in the E.W.S system, meaning 1 skirt = many occasions. You change accessories and you have it in various styling options:

Event . Work . Street

The model is 170 cm tall and wears size 38

Personalization - made-to-measure design:

Contact us via email: info@absolutdimension.com or phone: +48 732 808 804', 'Unique . SM.ART . Nobility

take me wherever you go...

20.Top Monaco

w lekkości . swobodzie ... szlachetnie przenikasz do swojego świata

przepełniona światłem

uwolniona

własna . niepowtarzalna ...

*

Realizuje wszystkie założenia: kreatywna . komfortowa . tworzy kompozycje w systemie E.W.S czyli 1 spódnica = wiele okazji Zmieniasz dodatki i masz ją w odsłonach stylizacji:

Event . Work . Street

Modelka ma 170 cm wzrostu i rozmiar 38

Personalizacja - wykonanie projektu na miarę:

Skontaktuj się z nami przez e-mail: info@absolutdimension.com lub telefonicznie: +48 732 808 804', '{"34","36","38","40"}', false, false, null, null, 'Złoty', 'Złoty') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('25-bluzka-versailles', '25.Bluzka Ver.Sale', 85000, 'blouse', 'monaco', '/img/products/25-bluzka-versailles/0.webp', '{"/img/products/25-bluzka-versailles/0.webp","/img/products/25-bluzka-versailles/1.webp","/img/products/25-bluzka-versailles/2.webp","/img/products/25-bluzka-versailles/3.webp"}', 'Unique . SM.ART . Nobility

Versailles Blouse

All-season Know-How . Noble . Relaxed . Lightweight . Silk velour blouse

Total Look:

(composition of the entire look in the pictures)

• Versailles Blouse

•

Skirt from ADAMA Set

• Shinrein Handbag

• Absolut Monaco Dress

•

Work . Event . Street

1 blouse = many occasions

Personalization - custom project realization:

Contact us via e-mail: info@absolutdimension.com or phone: +48 732 808 804', 'Unique . SM.ART . Nobility

Bluzka Versailles

Całosezonowy Know-How . Szlachetna . Swobodna . Lekka . Bluzka z jedwabnego weluru', '{"34","36","38","40"}', false, false, null, null, 'Czekolada', 'Czekolada') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('26-spodnica-josepha', '26.Spódnica Josepha', 70000, 'skirt', 'monaco', '/img/products/26-spodnica-josepha/0.webp', '{"/img/products/26-spodnica-josepha/0.webp","/img/products/26-spodnica-josepha/1.webp","/img/products/26-spodnica-josepha/2.webp","/img/products/26-spodnica-josepha/3.webp"}', 'Unique . SM.ART . Nobility

Skirt JosephANA

An elegant skirt made of high-quality Italian velour, which captivates with its softness and subtle, noble sheen. The fabric drapes beautifully on the figure, delicately emphasizing its lines and adding exceptional elegance to the styling.

The simple, figure-flattering cut makes this model incredibly versatile and timeless. A subtle slit adds lightness and ensures freedom of movement, making the skirt perfect for both elegant and more casual styles.

JosephANA is a proposal for women who appreciate the highest quality materials, wearing comfort, and a minimalist form with a luxurious character.

Total Look:

(composition of the entire look in the photos)

• Black&White Blouse

• JosephAna Skirt

Personalization - made-to-measure project:

Contact us via email: info@absolutdimension.com or phone: +48 732 808 804', 'Unique . SM.ART . Nobility

Spódnica JosephANA

Elegancka spódnica wykonana z wysokiej jakości włoskiego weluru, który zachwyca swoją miękkością oraz subtelnym, szlachetnym połyskiem. Tkanina pięknie układa się na sylwetce, delikatnie podkreślając jej linię i nadając stylizacji wyjątkowej elegancji.

Prosty, wydłużający sylwetkę krój sprawia, że model ten jest niezwykle uniwersalny i ponadczasowy. Subtelne rozcięcie dodaje lekkości oraz zapewnia swobodę ruchu, dzięki czemu spódnica doskonale sprawdza się zarówno w eleganckich, jak i bardziej codziennych stylizacjach.

JosephANA to propozycja dla kobiet, które cenią najwyższą jakość materiałów, komfort noszenia oraz minimalistyczną formę o luksusowym charakterze.

Total Look:

(skład całej kompozycji na zdjęciach)

•

Bluzka Black&White

• Spódnica JosephAna

• Żakiet Seiko

*

Work . Event . Street

1 spódnica = wiele okazji

Personalizacja - wykonanie projektu na miarę:

Skontaktuj się z nami przez e-mail: info@absolutdimension.com lub telefonicznie: +48 732 808 804', '{"34","36","38","40","42"}', false, false, null, null, 'Biały', 'Biały') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('30-bluzka-aixa', '30.Bluzka AIX''A', 92000, 'blouse', 'new-chapter', '/img/products/30-bluzka-aixa/0.webp', '{"/img/products/30-bluzka-aixa/0.webp","/img/products/30-bluzka-aixa/1.webp","/img/products/30-bluzka-aixa/2.webp","/img/products/30-bluzka-aixa/3.webp"}', 'Unique . SM.ART . Nobility

Blouse AIX''A

When lightness reaches its maximum possible range, fulfilling the main need: to cover the body and at the same time maintain a feeling of free nakedness... when nothing pinches, touches, or rubs - that''s AIX''A! Made of the lightest silk with sensually exposed shoulders and jewelry integrated into its design! Pearls that are like periods at the end of your sentence...

Total Look:

(composition of the whole set in the pictures)

1. AIX''A Blouse

2. Absolut Top

3. Ver.Sale Skirt

4. Scarf/Choker

5. SM.ART Handbag

Personalization - custom design:

Contact us via email: info@absolutdimension.com or by phone: +48 732 808 804', 'Unique . SM.ART . Nobility

Bluzka AIX''A

Kiedy lekkość osiąga maksymalny możliwy zakres realizując główną potrzebę: okryć ciało i jednocześnie utrzymać uczucie swobodnej nagości.. kiedy nic nie uwiera, dotyka, czy ociera - to jest to właśnie AIX''A! Wykonana z najlżejszego jedwabiu ze zmysłowo odsłaniającymi ramionami i posiadającą w swej konstrukcji biżuterię! Perły które są jak kropki na końcu Twojego zdania...

Total Look:

(skład całej kompozycji na zdjęciach)

1. Bluzka AIX''A

2. Top Absolut

3. Spódnica Ver.Sale

4. Apaszka/Chocker

5. Torebka SM.ART

Personalizacja - wykonanie projektu na miarę:

Skontaktuj się z nami przez e-mail: info@absolutdimension.com lub telefonicznie: +48 732 808 804', '{"34/36","38/40"}', false, false, null, null, 'Czerń', 'Czerń') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('18-set-adama', '18. Set ADAMA', 240000, 'set', 'monaco', '/img/products/18-set-adama/0.webp', '{"/img/products/18-set-adama/0.webp","/img/products/18-set-adama/1.webp","/img/products/18-set-adama/2.webp","/img/products/18-set-adama/3.webp"}', 'Unique . SM.ART . Nobility

take me wherever you go...

18.Set ADAMA

ADAMA Set - a set made of luxurious silk crepe, which captivates with its subtle texture and exceptionally soft, flowing drape on the figure. The set consists of a light, minimalist blouse and a skirt with a simple, figure-lengthening cut.

The noble fabric moves beautifully, giving the styling natural lightness and elegance. Silk crepe ensures wearing comfort, gently embracing the body and emphasizing its lines without excessive fitting.

This is a timeless set that will work perfectly in both elegant and everyday stylings – just change the accessories to create a completely new character for the whole outfit. The minimalism of its form and the highest quality of the material make it a wardrobe essential that remains relevant for many seasons.', 'Unique . SM.ART . Nobility

take me wherever you go...

18. Set ADAMA

Set ADAMA - zestaw wykonany z luksusowej jedwabnej krepy, która zachwyca subtelną strukturą i wyjątkowo miękkim, płynnym układaniem się na sylwetce. Komplet składa się z lekkiej bluzki o minimalistycznej formie oraz spódnicy o prostym, wydłużającym sylwetkę kroju.

Szlachetna tkanina pięknie pracuje w ruchu, nadając stylizacji naturalnej lekkości i elegancji. Jedwabna krepa zapewnia komfort noszenia, delikatnie otulając ciało i podkreślając jego linię bez nadmiernego dopasowania.

To ponadczasowy zestaw, który doskonale sprawdzi się zarówno w eleganckich, jak i codziennych stylizacjach – wystarczy zmienić dodatki, aby stworzyć zupełnie nowy charakter całości. Minimalizm formy i najwyższa jakość materiału czynią go elementem garderoby, który pozostaje aktualny przez wiele sezonów.

*

Opcja oddzielnego zakupu:

Jeśli chcesz kupić oddzielnie bluzkę i spódnicę - zadzwoń do nas lub napisz 1. Spódnica ADAMA - 1500 PLN 2. Bluzka ADAMA - 1100 PLN', '{"34","36","38","40","42"}', false, false, 'Silk crepe, 100%', 'Krep jedwab, 100%', 'Czekolada', 'Czekolada') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('25_bluzka-black-white', '25.Bluzka Black&White', 130000, 'blouse', 'deep-ly-me', '/img/products/25_bluzka-black-white/0.webp', '{"/img/products/25_bluzka-black-white/0.webp","/img/products/25_bluzka-black-white/1.webp","/img/products/25_bluzka-black-white/2.webp","/img/products/25_bluzka-black-white/3.webp"}', 'Unique . SM.ART . Nobility

25.Blouse Black&White

The Black&White blouse is made of silk, combining white with black. The front of the blouse is in a subtle, white shade that beautifully brightens the silhouette, while the contrasting black back adds a sophisticated character to the whole. The model is complemented by a tie belt at the waist, which allows you to gently emphasize the figure and adjust the blouse to your silhouette.

The light, noble fabric makes the blouse drape incredibly softly and elegantly, ensuring wearing comfort and a unique, luxurious look. Perfect for both elegant styles and more modern, minimalist outfits.', 'Unique . SM.ART . Nobility

25.Bluzka Black&White

Bluzka Black&White wykonana z jedwabiu, łącząca biel z czernią. Przód bluzki utrzymany jest w subtelnym, białym odcieniu, który pięknie rozświetla sylwetkę, natomiast tył w kontrastowej czerni dodaje całości wyrafinowanego charakteru. Model uzupełnia wiązany pasek w talii, który pozwala delikatnie podkreślić figurę i dopasować bluzkę do sylwetki.

Lekka, szlachetna tkanina sprawia, że bluzka układa się niezwykle miękko i elegancko, zapewniając komfort noszenia oraz wyjątkowy, luksusowy wygląd. Idealna zarówno do eleganckich stylizacji, jak i bardziej nowoczesnych, minimalistycznych zestawów.', '{"34","36","38","40"}', false, false, '100% silk crepe', 'krepa jedwab 100%', 'Biało-Czarny', 'Biało-Czarny') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('8_zakiet-mantoine-1', '8.Żakiet M''Antoine', 150000, 'blazer', 'monaco', '/img/products/8_zakiet-mantoine-1/0.webp', '{"/img/products/8_zakiet-mantoine-1/0.webp","/img/products/8_zakiet-mantoine-1/1.webp"}', 'Unique . SM.ART . Nobility

take me wherever you go...

8.JacketM''Antoine

All-season Know-How . Noble . Casual . Light . Silk jacket . The perfect "cover-up" for everything you need!

•

Work . Event . Street

1 jacket = many occasions

*

Personalization - custom design execution:

Contact us via e-mail: info@absolutdimension.com or by phone: +48 732 808 804', 'Unique . SM.ART . Nobility

take me wherever you go...

8.Żakiet M''Antoine

Całosezonowy Know-How . Szlachetny . Swobodny . Lekki . Żakiet z jedwabiu . Idealne rozwiązanie typu "narzutka" na wszystko co potrzebujesz!

•

Work . Event . Street

1 żakiet = wiele okazji

*

Personalizacja - wykonanie projektu na miarę:

Skontaktuj się z nami przez e-mail: info@absolutdimension.com lub telefonicznie: +48 732 808 804', '{"36","38","40","42"}', false, false, null, null, 'Złoty beż', 'Złoty beż') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('30-kimono-dan-y', '30.Kimono Dan.y', 145000, 'blazer', 'monaco', '/img/products/30-kimono-dan-y/0.webp', '{"/img/products/30-kimono-dan-y/0.webp","/img/products/30-kimono-dan-y/1.webp"}', 'Unique . SM.ART . Nobility

30.Kimono Dan.y

All-season Know-How. Noble. Loose. Lightweight. Silk velvet Kimono blouse. The perfect "throw-on" solution for whatever you need!', 'Unique . SM.ART . Nobility

30.Kimono Dan.y

Całosezonowy Know-How . Szlachetna . Swobodna . Lekka . Bluzka typu Kimono z jedwabnego weluru . Idealne rozwiązanie typu "narzutka" na wszystko co potrzebujesz!', '{"34","36","38","40"}', false, false, 'silk velvet, 100% silk', 'welur jedwabny, jedwab 100%', 'Czekolada', 'Czekolada') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('sukienka-amey-54', '38.Sukienka Ame 53''', 440000, 'dress', 'st-tropez', '/img/products/sukienka-amey-54/0.webp', '{"/img/products/sukienka-amey-54/0.webp","/img/products/sukienka-amey-54/1.webp","/img/products/sukienka-amey-54/2.webp","/img/products/sukienka-amey-54/3.webp"}', 'Ame''53 Dress . Like light moving with the body .

Ame''53 is a story of lightness, freedom, and timeless femininity. Created from eight meters of silk georgette, it captivates with its extraordinary fluidity of movement and the subtle play of light across the surface of the fabric.

Its minimalist form allows what matters most to emerge — the quality of the material, the harmony of proportions, and the presence of the woman who wears it. A softly flowing construction and delicately layered silhouette create an almost weightless sensation, evoking the feeling of an ocean breeze and the serenity of a summer morning.

Ame''53 was created for women who find beauty in simplicity and choose pieces that remain relevant beyond time.', 'Sukienka Ame 53'' . Jak światło poruszające się wraz z ciałem .

Ame''53 jest opowieścią o lekkości, swobodzie i ponadczasowej kobiecości. Stworzona z ośmiu metrów jedwabnej żorżety, zachwyca niezwykłą płynnością ruchu i subtelną grą światła na powierzchni tkaniny.

Jej minimalistyczna forma pozwala wybrzmieć temu, co najważniejsze — jakości materiału, proporcjom i obecności kobiety, która ją nosi. Delikatnie opływająca sylwetkę konstrukcja oraz miękko układające się warstwy tworzą wrażenie niemal nieważkości, przywołując skojarzenia z morską bryzą i spokojem letniego poranka.

Ame''53 została stworzona dla kobiet, które odnajdują piękno w prostocie i wybierają rzeczy, które pozostają aktualne niezależnie od czasu.', '{"34","36","38","40","42"}', false, false, 'Jedwab Żorżeta', 'Jedwab Żorżeta', 'Biały', 'Biały') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('sukienka-amey-53', '38.Sukienka Ame 53''', 440000, 'dress', 'say-shell', '/img/products/sukienka-amey-53/0.webp', '{"/img/products/sukienka-amey-53/0.webp","/img/products/sukienka-amey-53/1.webp","/img/products/sukienka-amey-53/2.webp"}', 'Dress Ame''53 . Like light moving with the body .

Ame''53 is a story of lightness, freedom, and timeless femininity. Created from eight meters of silk georgette, it captivates with its extraordinary fluidity of movement and the subtle play of light across the surface of the fabric.

Its minimalist form allows what matters most to emerge — the quality of the material, the harmony of proportions, and the presence of the woman who wears it. A softly flowing construction and delicately layered silhouette create an almost weightless sensation, evoking the feeling of an ocean breeze and the serenity of a summer morning.

Ame''53 was created for women who find beauty in simplicity and choose pieces that remain relevant beyond time.', 'Sukienka Ame 53'' . Jak światło poruszające się wraz z ciałem .

Ame''53 jest opowieścią o lekkości, swobodzie i ponadczasowej kobiecości. Stworzona z ośmiu metrów jedwabnej żorżety, zachwyca niezwykłą płynnością ruchu i subtelną grą światła na powierzchni tkaniny.

Jej minimalistyczna forma pozwala wybrzmieć temu, co najważniejsze — jakości materiału, proporcjom i obecności kobiety, która ją nosi. Delikatnie opływająca sylwetkę konstrukcja oraz miękko układające się warstwy tworzą wrażenie niemal nieważkości, przywołując skojarzenia z morską bryzą i spokojem letniego poranka.

Ame''53 została stworzona dla kobiet, które odnajdują piękno w prostocie i wybierają rzeczy, które pozostają aktualne niezależnie od czasu.', '{"34","36","38","40","42"}', false, false, null, null, 'Biały', 'Biały') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('10_torba-bali', '10_Bag Bali', 45000, 'bag', 'bali', '/img/products/10_torba-bali/0.webp', '{"/img/products/10_torba-bali/0.webp","/img/products/10_torba-bali/1.webp","/img/products/10_torba-bali/2.webp","/img/products/10_torba-bali/3.webp"}', 'During our trip to Bali, we fell in love with these unique baskets. We bought our own first, and it was love at first wear. The natural materials, handcrafted craftsmanship, and unique design made us decide to import them.

The basket is handmade from natural fibers, has a delicate lining inside, and its drawstring closure makes it both stylish and practical. Perfect for summer, vacations, the beach, or everyday styling – lightweight, spacious, and timeless.', 'Podczas naszej podróży na Bali zakochałyśmy się w tych niezwykłych koszach. Najpierw kupiłyśmy swoją i to była miłość od pierwszego noszenia. Naturalne materiały, ręczne wykonanie i wyjątkowy design sprawiły, że postanowiłyśmy je sprowadzić.

Kosz jest wykonany ręcznie z naturalnych włókien, wewnątrz posiada delikatną podszewkę, a jej zamknięcie w formie ściąganego worka sprawia, że jest zarówno stylowa, jak i praktyczna. Idealna na lato, wakacje, plażę czy codzienne stylizacje – lekka, pojemna i ponadczasowa.', '{"One size"}', false, false, null, null, null, null) on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('15_sukienka-qatar', '15_sukienka Qatar', 350000, 'dress', 'iq-atar', '/img/products/15_sukienka-qatar/0.webp', '{"/img/products/15_sukienka-qatar/0.webp","/img/products/15_sukienka-qatar/1.webp","/img/products/15_sukienka-qatar/2.webp","/img/products/15_sukienka-qatar/3.webp"}', 'Unique . SM.ART . Nobility

15_Dress Qatar

This is the pure essence of perfect design!

It is a base dress from which you begin your beautiful, free and exciting journey that is... LIFE.

Made of silk satin, it''s lightweight, casual, and breathable. No zippers, buttons, or stiffeners!

A dress that matches all your wardrobe items perfectly!

Finish: hand-stitched bottom, top and straps

Personalization - tailor-made design:

Contact us by email: info@absolutdimension.com or by phone: +48 732 808 804', 'Unique . SM.ART . Nobility

15_sukienka Qatar

To czysta esencja doskonałego projektu!

Jest sukienką bazą od której rozpoczynasz swoją piękną, swobodną i ekscytującą podróż jaką jest.. Ż-Y-C-I-E

Wykonana z jedwabnej satyny, lekka, swobodna, oddychająca. Żadnych suwaków, guzików czy usztywnień!

Sukienka do której wszystkie elementy garderoby pasują idealnie!

Wykończenie: ręczne obszycie dołu i góry oraz ramiączek

Personalizacja - wykonanie projektu na miarę:

Skontaktuj się z nami przez e-mail: info@absolutdimension.com lub telefonicznie: +48 732 808 804', '{"34","36","38","40","42"}', false, false, null, null, 'Biały', 'Biały') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('top-japan-absolut', '20_Top Japan Absolut', 85000, 'top', 'bali', '/img/products/top-japan-absolut/0.webp', '{"/img/products/top-japan-absolut/0.webp","/img/products/top-japan-absolut/1.webp","/img/products/top-japan-absolut/2.webp","/img/products/top-japan-absolut/3.webp"}', 'Unique . SM.ART . Nobility

Top Japan Absolut

in lightness. freedom... you nobly penetrate into your world

filled with light

freed

own . unique ...

*

Top Japan Absolut

Light and casual, a great base for scarves, jackets or cardigans.

A refined and balanced combination of form and line, exclusivity and utility...

Event, concert, going out to dinner... travel... walk on the beach, vacation... this set will be perfect everywhere! At the same time, when worn separately, it fulfills our main design idea: it inspires you to create unlimited styling possibilities!', 'Unique . SM.ART . Nobility

Top Japan Absolut

w lekkości . swobodzie ... szlachetnie przenikasz do swojego świata

przepełniona światłem

uwolniona

własna . niepowtarzalna ...

*

Top Japan Absolut

Lekki i swobodny, świetna baza również pod szale, żakiety czy kardigany

Wyrafinowane i wyważone w formie i linii połączenie ekskluzywności z użytkowością...

Event, koncert, wyjście na kolację... podróże... spacer po plaży, urlop... wszędzie tam odnajdzie się ten zestaw wyśmienicie! Jednocześnie nosząc go rozdzielnie, wypełnia on naszą główną ideę projektową: inspiruje Cię do tworzenia nieograniczonych możliwości stylizacyjnych!', '{"34","36","38","40","42"}', false, false, '100% silk', '100% jedwab', null, null) on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('31-szal-nu', '31.Szal NU', 120000, 'scarf', 'iq-atar', '/img/products/31-szal-nu/0.webp', '{"/img/products/31-szal-nu/0.webp","/img/products/31-szal-nu/1.webp"}', 'Unique . SM.ART . Nobility

31.NU Scarf

makes your life easier ...

Natural silk scarf.

Our unique technological silk processing method, handmade finishes, and innovative construction solutions result in an exceptional effect of lightness, comfort, and freedom in its use.

This noble creation realizes all our goals:', 'Unique . SM.ART . Nobility

31.Szal NU

makes your life easier ...

Szal z naturalnego jedwabiu.

Nasz unikalny technologiczny sposób obróbki jedwabiu, ręczne wykończenia i nowatorskie rozwiązania konstrukcyjne dają wyjątkowy efekt lekkości, komfortu i swobody w jej użytkowaniu .

To szlachetne dzieło realizuje wszystkie nasze cele:

Kompozycja . Komfort . Kreatywność

naszego systemu twórczego WSE (Work . Street . Event )

czyli 1 projekt = wiele okazji - wystarczy że zmienisz dodatki a zmienisz charakter projektu - jej genialność to możność bezwarunkowej adaptacji..

Wymiar 100 cm x 260 cm

Personalizacja:

• Możesz zamówić ten projekt w innych kolorach

w tym celu prosimy skontaktuj się z nami e-mail: info@absolutdimension.com / tel. +48 732 808 804', '{"One size"}', false, false, null, null, 'Biały', 'Biały') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('23_top-larte', '23_Top L''Arte', 150000, 'top', 'say-shell', '/img/products/23_top-larte/0.webp', '{"/img/products/23_top-larte/0.webp","/img/products/23_top-larte/1.webp","/img/products/23_top-larte/2.webp","/img/products/23_top-larte/3.webp"}', 'L''Arte Top

An artistic, handmade top that sensually and lightly drapes your body. The perfect solution to make you feel feminine and free!

Total Look:

• Scarf/headwrap

• Ballet''s Skirt', 'Top L''Arte

Artystyczny, ręcznie tworzony top który zmysłowo i lekko okrywa Twoje ciało. Idealne rozwiązanie byś czuła się kobieco i swobodnie!

Total Look:

• Szal/ husta na głowę

• Spódnica Ballet''s', '{"34","36","38"}', false, false, null, null, 'White', 'Biały') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('zestaw-dr-kogo', '40_Bluzka Vienna', 75000, 'blouse', 'lou-vre', '/img/products/zestaw-dr-kogo/0.webp', '{"/img/products/zestaw-dr-kogo/0.webp","/img/products/zestaw-dr-kogo/1.webp","/img/products/zestaw-dr-kogo/2.webp","/img/products/zestaw-dr-kogo/3.webp"}', 'Unique . SM.ART . Nobility

40_Blouse Vienna

A blouse with a belt made of a thick, very delicate to the touch Italian velvet, beautifully emphasizing the feminine silhouette. The body feels wonderful and free in it throughout the day of activity! A perfect base for jackets, cardigans, scarves.Finished with hand-stitched hems while maintaining the elasticity of the fabric that works beautifully with the body.', 'Unique . SM.ART . Nobility

40_Bluzka Vienna

Bluzka z paskiem wykonana z mięsistego, bardzo delikatnego w dotyku włoskiego weluru, pięknie podkreślająca kobiecą sylwetkę. Ciało czuje się w niej cudownie i swobodnie przez cały dzień aktywności! Doskonała baza pod żakiety, kardigany, szale.

Wykończona ręcznym obszyciem z zachowaniem pięknie pracującej z ciałem sprężystości tkaniny.', '{"34","36","38","40","42","44"}', false, false, 'Italian velvet 100% PE', 'włoski welur 100% PE', 'Czerń', 'Czerń') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('koszulka-absolut', '25_Koszulka Calmea', 60000, 'blouse', 'lou-vre', '/img/products/koszulka-absolut/0.webp', '{"/img/products/koszulka-absolut/0.webp","/img/products/koszulka-absolut/1.webp","/img/products/koszulka-absolut/2.webp"}', 'Unique . SM.ART . Nobility

25_Blouse Calmea

Blouse with a belt made of thick, very delicate to the touch Italian velvet, beautifully emphasizing the female silhouette. The body feels wonderful and free in it throughout the day of activity! Perfect base for jackets, cardigans, scarves.

Finished with hand-stitching while maintaining the elasticity of the fabric that works beautifully with the body.', 'Unique . SM.ART . Nobility

25_Koszulka Calmea

Koszulka z paskiem wykonane z mięsistego, bardzo delikatnego w dotyku włoskiego weluru, pięknie podkreślające kobiecą sylwetkę. Ciało czuje się w nim cudownie i swobodnie przez cały dzień aktywności! Doskonała baza pod żakiety, kardigany, szale.

Wykończony ręcznym obszyciem z zachowaniem pięknie pracującej z ciałem sprężystości tkaniny.', '{"34","36","38","40","42","44"}', false, false, 'Italian velvet 100% PE', 'włoski welur 100% PE', 'White', 'Biały') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('dress-je-absolut', '37.Sukienka Je Bilionera', 180000, 'dress', 'cannes', '/img/products/dress-je-absolut/0.webp', '{"/img/products/dress-je-absolut/0.webp","/img/products/dress-je-absolut/1.webp","/img/products/dress-je-absolut/2.webp"}', 'Unique . SM.ART . Nobility

Dress Je Bilionera it is a work of lightness. freedom . quality! Made of noble silk, beautifully fitting the silhouette, giving its absolute freedom of movement! A base dress - to which all other wardrobe items match!Total Look:(composition of the entire composition in photos)1. Meisei *M.M*2. IBO Scarf3. Nobility Belt4. Nobility ClutchChanging accessories to the Je Bilionera Dress changes its entire characterComposition: 100% silkPersonalization - tailor-made design:Contact us by e-mail: info@absolutdimension.com or by phone:

+48 530 88 66 99', 'Unique . SM.ART . Nobility

Sukienka Je Bilionera

to dzieło lekkości . swobody . jakości! Wykonania ze szlachetnego jedwabiu, pięknie układająca się do sylwetki dając jej absolutną wolność ruchu! Sukienka baza - do której pasują wszystkie pozostałe elementy garderoby!

Total Look:

(skład całej kompozycji na zdjęciach)

1. Sukienka Billionaire

2. Kardigan *44*

3. Naszyjnik/Pasek Nobility

4. Torebka Nobility

5. Torba SM.ART

Zmiana dodatków do Sukienki Je Bilionera - zmienia cały jej charakter', '{"34","36","38","40"}', false, false, '100% jedwab', '100% jedwab', 'White', 'Biały') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('set-maturite-1', '16_Płaszcz Meisei *M.M*', 850000, 'coat', 'poza-murem', '/img/products/set-maturite-1/0.webp', '{"/img/products/set-maturite-1/0.webp","/img/products/set-maturite-1/1.webp","/img/products/set-maturite-1/2.webp","/img/products/set-maturite-1/3.webp"}', 'Unique . SM.ART . Nobility

take me wherever you go...

16_Meisei M.MThis is an artistic work. Hand-woven unique design of a fur - coat. A refined in chic and sensuality proposition for those who love art Uniqueness and Exceptionality...

Unique and made to order.

Delivery time 4 weeks', 'Unique . SM.ART . Nobility

take me wherever you go...

16_Meisei M.M

To artystyczne dzieło . Ręcznie tkany unikalny projekt futra-płaszcza. Wyrafinowana w szyku i zmysłowości propozycja dla kochających sztukę Unikalność i Wyjątkowość...

Tworzony jest na specjalne indywidualne zamówienie.

Czas realizacji 4 tygodnie', '{"36","38","40","42"}', false, false, 'yarn with shiny thread, 100% PE', 'przędza z połyskującym włosem 100% PE', 'Black', 'Czarny') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('body-maturite', 'Body Maturite', 78000, 'body', 'sukienki-event', '/img/products/body-maturite/0.webp', '{"/img/products/body-maturite/0.webp","/img/products/body-maturite/1.webp"}', 'Bodysuit made of fleshy and very pleasant to the touch Italian velvet. Finished by hand.', 'Body wykonane z mięsistego i bardzo przyjemnego w dotyku włoskiego weluru. Wykończone ręcznie.', '{"36","38","40","42"}', false, false, '100% cotton velvet', '100% bawełniany welur', null, null) on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('18-set-amey', '18.Set Amey', 300000, 'set', 'new-chapter', '/img/products/18-set-amey/0.webp', '{"/img/products/18-set-amey/0.webp","/img/products/18-set-amey/1.webp","/img/products/18-set-amey/2.webp","/img/products/18-set-amey/3.webp"}', 'Amey Set . Layer . movement . silk .

The Amey Set was born from a fascination with the lightness of natural fabrics and the way they behave in motion. It is a composition of two noble silks — habotai and georgette — brought together to create a form rich in subtlety and depth.

The Amey top is crafted from two layers of silk and is defined by its soft lines and effortless drape on the silhouette. The delicate sheen of the fabric highlights its refined character while maintaining an understated elegance. Finished with brooch details at the shoulders.

The skirt is crafted from two layers of natural silk. The inner layer of habotai silk provides comfort and fluidity of movement, while the outer layer of silk georgette adds lightness, transparency, and exceptional dynamism. With every step, the fabric moves in its own rhythm, creating the impression of a form in constant transformation. Fastened with brooches on both sides.

The experience of natural silk in motion .', 'Set Amey . Warstwa . ruch . jedwab .

Set Amey powstał z fascynacji lekkością naturalnych tkanin i ich zachowaniem w ruchu. To kompozycja dwóch szlachetnych jedwabi — habotai i żorżety — które wspólnie tworzą formę pełną subtelności i głębi.

Top Amey wykonany z dwóch warstw jedwabiu charakteryzuje się miękką linią i swobodnym układaniem na sylwetce. Delikatny połysk tkaniny podkreśla jej szlachetny charakter, zachowując jednocześnie niewymuszoną elegancję. Wykończony broszkami na ramionach.

Spódnica została wykonana z dwóch warstw naturalnego jedwabiu. Wewnętrzna warstwa z habotai zapewnia komfort i płynność ruchu, natomiast zewnętrzna warstwa z jedwabnej żorżety nadaje całości lekkość, transparentność i wyjątkową dynamikę. Każdy krok sprawia, że tkanina porusza się własnym rytmem, tworząc efekt nieustannie zmieniającej się formy. Zapinana na broszki po dwóch stronach.

Doświadczenie naturalnego jedwabiu w ruchu .', '{"34","36","38","40"}', false, false, 'Jedwab', '100% jedwab', 'Czerń', 'Czerń') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('sukienka-cote-dazur', '38.Sukienka Côte d''Azur', 145000, 'dress', 'st-tropez', '/img/products/sukienka-cote-dazur/0.webp', '{"/img/products/sukienka-cote-dazur/0.webp","/img/products/sukienka-cote-dazur/1.webp","/img/products/sukienka-cote-dazur/2.webp"}', 'Dress Côte d''Azur . The essence of elegance .

The Côte d''Azur Dress is crafted from rich Italian velvet, designed to gently embrace the body and enhance the natural line of the silhouette. An open back, refined form, and softly flowing fabric create a harmonious composition.

Minimalist, yet undeniably expressive .', 'Sukienka Côte d''Azur . Esencja elegancji .

Sukienka Côte d''Azur została wykonana z mięsistego włoskiego weluru, który subtelnie otula ciało i podkreśla naturalną linię sylwetki. Odkryte plecy, szlachetna forma oraz delikatnie opływający materiał tworzą harmonijną kompozycję.

Minimalistyczna, a jednocześnie wyrazista .', '{"34","36","38","40"}', false, false, '95% włoski welur, 5% elastan', '95% włoski welur, 5% elastan', 'Śmietanowa biel', 'Śmietanowa biel') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('31-szal-nu-1', '31.Szal NU', 120000, 'scarf', 'new-york-city', '/img/products/31-szal-nu-1/0.webp', '{"/img/products/31-szal-nu-1/0.webp","/img/products/31-szal-nu-1/1.webp","/img/products/31-szal-nu-1/2.webp","/img/products/31-szal-nu-1/3.webp"}', 'Unique . SM.ART . Nobility

31. Scarf NU

makes your life easier ...

Natural silk scarf.

Our unique technological silk processing method, handmade finishes, and innovative structural solutions create an exceptional effect of lightness, comfort, and freedom in its use.

This noble creation realizes all our goals:', 'Unique . SM.ART . Nobility

31.Szal NU

makes your life easier ...

Szal z naturalnego jedwabiu.

Nasz unikalny technologiczny sposób obróbki jedwabiu, ręczne wykończenia i nowatorskie rozwiązania konstrukcyjne dają wyjątkowy efekt lekkości, komfortu i swobody w jej użytkowaniu .

To szlachetne dzieło realizuje wszystkie nasze cele:

Kompozycja . Komfort . Kreatywność

naszego systemu twórczego WSE (Work . Street . Event )

czyli 1 projekt = wiele okazji - wystarczy że zmienisz dodatki a zmienisz charakter projektu - jej genialność to możność bezwarunkowej adaptacji..

Wymiar 100 cm x 260 cm

Personalizacja:

• Możesz zamówić ten projekt w innych kolorach

w tym celu prosimy skontaktuj się z nami e-mail: info@absolutdimension.com / tel. +48 732 808 804', '{"One size"}', false, false, null, null, null, null) on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('38_set-gorudo-ny', '38_Set Gorudo NY', 230000, 'dress', 'new-york-city', '/img/products/38_set-gorudo-ny/0.webp', '{"/img/products/38_set-gorudo-ny/0.webp","/img/products/38_set-gorudo-ny/1.webp","/img/products/38_set-gorudo-ny/2.webp","/img/products/38_set-gorudo-ny/3.webp"}', 'Unique . SM.ART . Nobility

Dress + Handbag

Noble. Artistic. Luxurious

The quintessence of composition - coherence, harmony and balance of the combination of utility and beauty.

Made of lamé in the style of Top Ana Absolut , very light, it freely harmonizes with the movement of the body, the cut slightly emphasizes the silhouette, revealing the essence of the beauty of femininity... sensuality and charm.

Comes with a bag made of the same material.

Personalization - tailor-made design:

Contact us by email: info@absolutdimension.com or by phone: +48 732 808 804', 'Unique . SM.ART . Nobility

Sukienka + Torebka

Szlachetna . Artystyczna . Luksusowa

Kwintesencja kompozycji - spójność, harmonia i równowaga połączenia użytkowości i piękna.

Wykonana z lamy w stylizacji z Top Ana Absolut, bardzo lekka, swobodnie współgra z ruchem ciała, krój podkreśla lekko sylwetkę ukazując istotę piękna kobiecości... zmysłowość i wdzięku.

W zestawie z torebką wykonane z tego samego materiału.

Personalizacja - wykonanie projektu na miarę:

Skontaktuj się z nami przez e-mail: info@absolutdimension.com lub telefonicznie: +48 732 808 804', '{"34","36","38","40"}', false, false, 'Lama', 'Lama', 'Złoty', 'Złoty') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('top-absolut', '21_Top Absolut', 60000, 'top', 'lou-vre', '/img/products/top-absolut/0.webp', '{"/img/products/top-absolut/0.webp","/img/products/top-absolut/1.webp","/img/products/top-absolut/2.webp","/img/products/top-absolut/3.webp"}', 'Unique . SM.ART . Nobility

21_Top Absolut

Light and noble top made of silk satin. The perfect solution for hot days, but not only..It serves perfectly in everyday use, creating beautiful and comfortable compositions with sweaters, jackets, scarves and other elements of the wardrobe...

A refined and balanced combination of form and line, exclusivity and utility...', 'Unique . SM.ART . Nobility

21_Top Absolut

Lekki i szlachetny top z jedwabnej satyny. Idealne rozwiązanie na upalne dni . Służy wyśmienicie w codziennym użytkowaniu tworząc piękne i wygodne kompozycje ze swetrami, żakietami, szalami i pozostałymi elementami garderoby...

Wyrafinowane i wyważone w formie i linii połączenie ekskluzywności z użytkowością...', '{"34","36","38","40"}', false, false, '100% silk', '100% jedwab', 'White', 'Biały') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('sukienka-coeur-maturite', '37.Sukienka Cœur', 135000, 'dress', 'lou-vre', '/img/products/sukienka-coeur-maturite/0.webp', '{"/img/products/sukienka-coeur-maturite/0.webp","/img/products/sukienka-coeur-maturite/1.webp","/img/products/sukienka-coeur-maturite/2.webp"}', 'Unique . SM.ART . Nobility

37_Cœur Dress

Warm. Comfortable. Enveloping... it''s like your second skin! Made of thick, delicate to the touch noble Italian velvet, it beautifully emphasizes every female silhouette. The body feels wonderful and free in it. Brilliant for cold days. Ideal for traveling.

Perfect base for jackets, cardigans, scarves. Finished with hand-stitching while maintaining the elasticity of the fabric that works beautifully with the body.

For every occasion, just change the accessories!', 'Unique . SM.ART . Nobility

37.Sukienka Cœur

Ciepła . Wygodna . Otulająca... jest jak Twoja druga skóra! Wykonana z mięsistego, delikatnego w dotyku szlachetnego włoskiego weluru, pięknie podkreśla każdą kobiecą sylwetkę. Ciało czuje się w niej cudownie i swobodnie . Genialna na chodne dni . Idealna do podróży .

Doskonała baza pod żakiety, kardigany, szale. Wykończona ręcznym obszyciem z zachowaniem pięknie pracującej z ciałem sprężystości tkaniny.

Na każdą Twoją okazję, wystarczy że zmienisz dodatki!', '{"34","36","38","40","42","44"}', false, false, 'Italian velvet 100% PE', 'włoski welur 100% PE', 'Czerń', 'Czerń') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('38_sukienka-naiss-ance', '38.Sukienka Naiss.ance', 300000, 'dress', 'say-shell', '/img/products/38_sukienka-naiss-ance/0.webp', '{"/img/products/38_sukienka-naiss-ance/0.webp","/img/products/38_sukienka-naiss-ance/1.webp","/img/products/38_sukienka-naiss-ance/2.webp","/img/products/38_sukienka-naiss-ance/3.webp"}', 'Unique . SM.ART . Nobility

Naiss.ance is a cocktail dress that doesn''t need an occasion - it creates it. It was created for women who move through the world consciously and lightly.

Made of 100% silk satin, it softly hugs the silhouette, allowing the fabric to flow with movement. Its simple, balanced lines convey a sense of calm and strength simultaneously – effortless elegance, modern and timeless.

Naiss.ance is a travel dress in our understanding: one you always take with you. Because every trip – short or long – needs a cocktail dress, ready for an unexpected meeting, dinner, or evening that happens “along the way.”

It''s part of the SM.ART Wardrobe – well-thought-out, cohesive, built not on impulse, but with a vision. A dress that doesn''t follow trends, but stays with you for years.

Naiss.ance is the beginning. Pure form. A new chapter.', 'Unique . SM.ART . Nobility

Naiss.ance to sukienka koktajlowa, która nie potrzebuje okazji – ona ją tworzy.Powstała z myślą o kobietach, które poruszają się po świecie świadomie, lekko.

Wykonana w 100% z jedwabnej satyny, miękko otula sylwetkę, pozwalając tkaninie pracować w ruchu. Prosta, wyważona linia daje poczucie spokoju i siły jednocześnie – to elegancja bez wysiłku, nowoczesna i ponadczasowa.

Naiss.ance jest sukienką podróżną w naszym rozumieniu:taką, którą zawsze zabierasz ze sobą.Bo każda podróż – krótka czy daleka – potrzebuje sukienki koktajlowej, gotowej na nieoczekiwane spotkanie, kolację, wieczór, który wydarza się „po drodze”.

To element SM.ART Garderoby – przemyślanej, spójnej, budowanej nie z impulsu, lecz z wizji. Sukienka, która nie sezonuje się trendami, tylko zostaje z Tobą na lata.

Naiss.ance to początek.Czysta forma.Nowy rozdział.', '{"34","36","38","40"}', false, false, null, null, 'Burgund', 'Burgund') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('38_-suknia-imperatriece', '38.Suknia Impératrice', 500000, 'dress', 'sukienki-event', '/img/products/38_-suknia-imperatriece/0.webp', '{"/img/products/38_-suknia-imperatriece/0.webp","/img/products/38_-suknia-imperatriece/1.webp","/img/products/38_-suknia-imperatriece/2.webp","/img/products/38_-suknia-imperatriece/3.webp"}', 'Unique . SM.ART . Nobility

Impératrice is a cocktail dress designed for the woman who moves between worlds – cities, hotels, dinners and moments just for herself.

Crafted entirely from 100% silk satin, it gently drapes over the silhouette, creating a line of lightness and inner strength. The open back is accentuated by a Swarovski crystal that catches the light with every movement, while a custom-designed back necklace completes the look, like jewelry worn as a statement.

Impératrice is a dress that you take with you on a journey.

In the SM.ART Wardrobe aesthetic, every trip should have its own cocktail dress – one, sufficient, always ready for a dinner, a meeting, an evening that happens spontaneously.

This is a model that doesn''t need an occasion.

This is an opportunity in itself.', 'Unique . SM.ART . Nobility

Impératrice to sukienka koktajlowa zaprojektowana dla kobiety, która porusza się między światami – miastami, hotelami, kolacjami i momentami tylko dla siebie.

Wykonana w całości z 100% satyny jedwabnej, miękko układa się na sylwetce, tworząc linię pełną lekkości i wewnętrznej siły. Odsłonięte plecy podkreśla kryształ Swarovski, który łapie światło przy każdym ruchu, a zaprojektowany specjalnie do tego modelu naszyjnik na plecy dopełnia kompozycję niczym biżuteria noszona jako manifest.

Impératrice jest sukienką, którą zabiera się w podróż.

W estetyce SM.ART Garderoby każda podróż powinna mieć swoją sukienkę koktajlową – jedną, wystarczającą, zawsze gotową na kolację, spotkanie, wieczór, który wydarzy się spontanicznie.

To model, który nie potrzebuje okazji.

To okazja sama w sobie.

Detale:

• 100% jedwabna satyna

• Kryształ Swarovski na plecach

• Dedykowany naszyjnik na plecy

• Lekka forma koktajlowa

• Idealna do podróży i wieczornych wyjść', '{"36","38","40"}', false, false, null, null, 'Czerwień', 'Czerwień') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('suknia-valentine-opera', '28.Suknia Valentine Opera', 450000, 'dress', 'sukienki-event', '/img/products/suknia-valentine-opera/0.webp', '{"/img/products/suknia-valentine-opera/0.webp","/img/products/suknia-valentine-opera/1.webp","/img/products/suknia-valentine-opera/2.webp","/img/products/suknia-valentine-opera/3.webp"}', 'Unique . SM.ART . Nobility

Dress Valentine Opera - sensuality is a combination of Beauty. Lightness and Nobility... which leaves room for stimulated imagination...

In this dress you move freely... your body flows easily... you are captivating.

Decorated with 4 handmade pearl brooches', 'Unique . SM.ART . Nobility

Suknia Valentine Opera - zmysłowość to połączenie Piękna . Lekkości i Szlachetności … które pozostawia przestrzeń na pobudzoną wyobraźnię..

W tej Sukni poruszasz się swobodnie.. płynie lekko Twoje ciało.. urzekasz.

Ozdobiona 4 szt. ręcznie tworzonymi broszkami z perłami', '{"34","36","38","40"}', false, false, null, null, 'Czerń', 'Czerń') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('1-ana-absolut', '1.Ana Absolut', 280000, 'set', 'cannes', '/img/products/1-ana-absolut/0.webp', '{"/img/products/1-ana-absolut/0.webp","/img/products/1-ana-absolut/1.webp","/img/products/1-ana-absolut/2.webp"}', 'Unique . SM.ART . Nobility

Absolut Ana Set

in lightness . freedom ... nobly you penetrate into your world

filled with light

liberated

your own . unique ...

*

Set includes:

1. Ana Top - artistically handmade, light and sensual, made of shimmering yarn with hair-like texture', 'Unique . SM.ART . Nobility

Set Absolut Ana

w lekkości . swobodzie ... szlachetnie przenikasz do swojego świata

przepełniona światłem

uwolniona

własna . niepowtarzalna ...

*

Zestaw:

1. Top Ana - artystycznie ręcznie wykonany, lekki i zmysłowy z połyskującej przędzy z włosem', '{"36","38","40"}', false, false, '100% PE', '100% PE', 'Biały', 'Biały') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('set-amei', '18.Set Amey', 300000, 'set', 'new-york-city', '/img/products/set-amei/0.webp', '{"/img/products/set-amei/0.webp","/img/products/set-amei/1.webp","/img/products/set-amei/2.webp"}', 'Unique . SM.ART . Nobility

take me wherever you go...

Amey Set

with lightness . ease ... you nobly penetrate into your world

filled with light

freed

your own . unique ...

*

Set:

1. Amey Top - artistically handmade, light and sensual', 'Unique . SM.ART . Nobility

take me wherever you go...

Set Amey

w lekkości . swobodzie ... szlachetnie przenikasz do swojego świata

przepełniona światłem

uwolniona

własna . niepowtarzalna ...

*

Zestaw:

1. Top Amey - artystycznie ręcznie wykonany, lekki i zmysłowy', '{"34","36","38","40","42"}', false, false, '100% silk', '100% jedwab', 'Black', 'Czarny') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('sukienka-belle-de-jour', '37.Sukienka Belle de Jour', 160000, 'dress', 'monaco', '/img/products/sukienka-belle-de-jour/0.webp', '{"/img/products/sukienka-belle-de-jour/0.webp","/img/products/sukienka-belle-de-jour/1.webp","/img/products/sukienka-belle-de-jour/2.webp","/img/products/sukienka-belle-de-jour/3.webp"}', 'Unique . SM.ART . Nobility

Dress Belle de Jour

The main assumption of the project is its compatibility and universality while maintaining a maximum sense of comfort.

Made of silk velvet, it beautifully highlights the female figure. The body feels wonderful in it and harmonizes freely with movement, revealing the essence of femininity... sensuality, grace and luxury.

On the photo shown with our Kimono Dany

•

Work . Event . Street

1 dress = many occasions

*', 'Unique . SM.ART . Nobility

Sukienka Belle de Jour

Główne założenie projektu to jego kompatybilność i uniwersalność z zachowaniem maksymalnego poczucia komfortu.

Wykonana z jedwabnego, pięknie podkreśla kobiecą sylwetkę. Ciało czuje się w niej cudownie i swobodnie współgra z ruchem ukazując istotę kobiecości... zmysłowość, wdzięk i luksus.

Na zdjęciu w stylizacji z Kimono Dany

•

Work . Event . Street

1 sukienka = wiele okazji', '{"34","36","38","40"}', false, false, null, null, 'Czekolada', 'Czekolada') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('23-top-sydney', '23.Top Sydney', 110000, 'top', 'melbourne', '/img/products/23-top-sydney/0.webp', '{"/img/products/23-top-sydney/0.webp","/img/products/23-top-sydney/1.webp","/img/products/23-top-sydney/2.webp","/img/products/23-top-sydney/3.webp"}', 'Unique . SM.ART . Nobility

take me wherever you go...

The Sydney top with a belt, made of rich Italian cotton velvet, beautifully accentuates the feminine silhouette. It feels wonderful and comfortable throughout the day!

A perfect base for jackets, cardigans, and scarves.

Finished with hand-stitched hems, maintaining the fabric''s elasticity, which works beautifully with the body.', 'Unique . SM.ART . Nobility

take me wherever you go...

Top Sydney z paskiem wykonany z mięsistego bawełnianego włoskiego weluru, pięknie podkreślające kobiecą sylwetkę. Ciało czuje się w nim cudownie i swobodnie przez cały dzień aktywności!

Doskonała baza pod żakiety, kardigany, szale.

Wykończony ręcznym obszyciem z zachowaniem pięknie pracującej z ciałem sprężystości tkaniny.', '{"36","38","40"}', false, false, null, null, 'Burgund', 'Burgund') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('24-spodnica-japan-monaco', '24.Spódnica Japan Monaco', 170000, 'skirt', 'monaco', '/img/products/24-spodnica-japan-monaco/0.webp', '{"/img/products/24-spodnica-japan-monaco/0.webp","/img/products/24-spodnica-japan-monaco/1.webp","/img/products/24-spodnica-japan-monaco/2.webp"}', 'Unique . SM.ART . Nobility

take me wherever you go...

Skirt Japan

in lightness, freedom... you nobly penetrate into your world

filled with light

freed

own. unique...

*

A refined and balanced combination of form and lines, exclusivity and practicality...

An event, a concert, a dinner outing... travel... a walk on the beach, a vacation... this set will be perfect anywhere! Wearing it separately, it fulfills our main design idea: inspiring you to create limitless styling possibilities!

Skirt with a Japanese pleat, the skirt tails overlap one another, fastened with snaps

It is very light, and its aesthetically refined form can create countless styles - changing the shoes, changing the belt, cardigan, jacket or scarf... creates new faces!

Made of silk, finished by hand

Personalization - tailor-made design:

Contact us by email: info@absolutdimension.com or by phone: +48 732 808 804', 'Unique . SM.ART . Nobility

take me wherever you go...

Spódnica Japan

w lekkości . swobodzie ... szlachetnie przenikasz do swojego świata

przepełniona światłem

uwolniona

własna . niepowtarzalna ...

*

Wyrafinowane i wyważone w formie i linii połączenie ekskluzywności z użytkowością...

Event, koncert, wyjście na kolację... podróże... spacer po plaży, urlop... wszędzie tam odnajdzie się ten zestaw wyśmienicie! Jednocześnie nosząc go rozdzielnie, wypełnia on naszą główną ideę projektową: inspiruje Cię do tworzenia nieograniczonych możliwości stylizacyjnych!

Spódnica z japońskim zakładem, poły spódnicy zachodzą jeden na drugi na siebie, zapinana na zatrzaski

Jest bardzo lekka, a jej wyrafinowana estetycznie forma może tworzyć niezliczoną liczbę stylizacji - zmiana butów, zmiana paska, kardigana, żakietu czy szala.. tworzy nowe jej oblicza!

Wykonana z jedwabiu, wykończona ręcznie

Personalizacja - wykonanie projektu na miarę:

Skontaktuj się z nami przez e-mail: info@absolutdimension.com lub telefonicznie: +48 732 808 804', '{"36","38","40"}', false, false, null, null, 'Czekolada', 'Czekolada') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('2-pulli-cloudy', '2.Pulli Cloudy Monaco', 260000, 'cardigan', 'monaco', '/img/products/2-pulli-cloudy/0.webp', '{"/img/products/2-pulli-cloudy/0.webp","/img/products/2-pulli-cloudy/1.webp"}', 'Unique . SM.ART . Nobility

take me wherever you go...

Sweater Cloudy Monaco

when you want to feel your whole self... that omnipresent, unfettered freedom within you... put it on!

Its delicate weave of light mohair threads falls freely on silk, caressing your body.. Pulli from the Unique line.. the only one of its kind in the world!', 'Unique . SM.ART . Nobility

take me wherever you go...

Sweter Cloudy Monaco

kiedy chcesz poczuć całą sobą siebie..tę wszechobecną w Tobie wolność nieskrępowaną... załóż Go!

Jego delikatny splot lekkiej nici moheru swobodnie opadający na jedwab muskającą Twoje ciało.. Pulli z lini Unique .. jedyny taki na świecie!', '{"34/36","38/40"}', false, false, null, null, 'Carmel', 'Carmel') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('23-top-unique-chocco', '23.Top Jour.y Monaco', 150000, 'top', 'monaco', '/img/products/23-top-unique-chocco/0.webp', '{"/img/products/23-top-unique-chocco/0.webp","/img/products/23-top-unique-chocco/1.webp","/img/products/23-top-unique-chocco/2.webp","/img/products/23-top-unique-chocco/3.webp"}', 'Unique . SM.ART . Nobility

Top Unique Chocco

Unique in its form... noble silk velvet in an innovative and artistic expression! Its wonderful qualities include sensuality and refined nonchalance, allowing you to feel absolutely at ease!

Total Look:

(the composition of the entire composition is in the photos)

• Skirt Ver.Sale

• Top Top Unique Kogo

• Jacket Jour.y

• Handbag Unique

• Handbag Nobility', 'Unique . SM.ART . Nobility

Top Unique Chocco

Unikalny w swojej formie.. szlachetny jedwabny welur w nowatorskim i artystycznym wyrazie! Jego cudowne wartości to zmysłowość . wyrafinowana nonszalancja pozwalająca czuć się absolutnie swobodnie!

Total Look:

(skład całej kompozycji na zdjęciach)

• Spódnica Ver.Sale

• Top Unique Kogo

• Żakiet Jour.y

• Torebka Unique

• Torebka Nobility', '{"36","38","40"}', false, false, null, null, 'Czekolada', 'Czekolada') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('26-spodnica-furansu', '26.Spódnica Furansu', 60000, 'skirt', 'monaco', '/img/products/26-spodnica-furansu/0.webp', '{"/img/products/26-spodnica-furansu/0.webp","/img/products/26-spodnica-furansu/1.webp","/img/products/26-spodnica-furansu/2.webp","/img/products/26-spodnica-furansu/3.webp"}', 'Unique . SM.ART . Nobility

26.Skirt Furansu

A perfectly feminine and comfortable skirt made of incredibly soft, rich velvet. Beautifully fitted, casual, and elegant! It pairs perfectly with everything in your wardrobe. Wonderful comfort and limitless creativity!', 'Unique . SM.ART . Nobility

26.Spódnica Furansu

Idealnie kobieca i wygodna spódnica z doskonale przyjemnego w dotyku mięsistego weluru . Pięknie układająca się do ciała, swobodna i genialna! Tworzy perfekcyjne kompozycje ze wszystkimi elementami w garderobie . Cudowny Komfort i nieograniczona Kreatywność!', '{"36","38","40","42"}', false, false, 'Italian velvet, 100% PE', 'włoski welur, 100% PE', 'Chocolate', 'Czekolada') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('30-bluzka-jour-y', '30.Bluzka Jour.y', 145000, 'blouse', 'monaco', '/img/products/30-bluzka-jour-y/0.webp', '{"/img/products/30-bluzka-jour-y/0.webp","/img/products/30-bluzka-jour-y/1.webp","/img/products/30-bluzka-jour-y/2.webp","/img/products/30-bluzka-jour-y/3.webp"}', 'Unique . SM.ART . Nobility

Blouse Jour.y

All-Season Know-How. Noble. Casual. Light. Kimono-style blouse in silk velvet.

•

Work. Event. Street

1 blouse = many occasions', 'Unique . SM.ART . Nobility

Bluzka Jour.y

Całosezonowy Know-How . Szlachetna . Swobodna . Lekka . Bluzka typu Kimono z jedwabnego weluru .

Total Look:

(skład całej kompozycji na zdjęciach)

• Bluzka Jour.y

•

Sukienka Absolut

•

Sukienka Belle de Jour

• Torebka Shinrein

•

Work . Event . Street

1 bluzka = wiele okazji

Personalizacja - wykonanie projektu na miarę:

Skontaktuj się z nami przez e-mail: info@absolutdimension.com lub telefonicznie: +48 732 808 804', '{"36","38","40"}', false, false, null, null, 'Czekolada', 'Czekolada') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('28_suknia-absolut', '28.Suknia Absolut Monaco', 300000, 'dress', 'monaco', '/img/products/28_suknia-absolut/0.webp', '{"/img/products/28_suknia-absolut/0.webp","/img/products/28_suknia-absolut/1.webp","/img/products/28_suknia-absolut/2.webp","/img/products/28_suknia-absolut/3.webp"}', 'Unique . SM.ART . Nobility

28.Gown Absolut

in lightness, freedom... you nobly penetrate into your world

filled with light

freed

own. unique...

28. Absolut dress - made of silk satin with straps, hand-made hems at the top and bottom of the dress, with a slit on the side.', 'Unique . SM.ART . Nobility

28.Suknia Absolut

w lekkości . swobodzie ... szlachetnie przenikasz do swojego świata

przepełniona światłem

uwolniona

własna . niepowtarzalna ...

28.Suknia Absolut - wykonana z jedwabnej satyny na ramiączkach, ręcznie wykonane obszycia u góry i dołu sukienki, z rozporkiem po boku.

Total Look:

(skład całej kompozycji na zdjęciach)

• Top Ana

•

Szal NU

•

Żakiet Seiko

• Torebka Shinrein

•

Bluzka Ver.Sale

• Torebka Unique

Personalizacja - wykonanie projektu na miarę:

Skontaktuj się z nami przez e-mail: info@absolutdimension.com lub telefonicznie: +48 732 808 804', '{"36","38","40"}', false, false, null, null, 'Czekolada', 'Czekolada') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('8-zakiet-jour-y', '8.Żakiet Jour.y', 250000, 'blazer', 'monaco', '/img/products/8-zakiet-jour-y/0.webp', '{"/img/products/8-zakiet-jour-y/0.webp"}', 'Unique . SM.ART . Nobility

take me wherever you go...

8.Jacket Jour.y

All-Season Know-How. Noble. Casual. Double-layered. Lightweight. Silk velour jacket. The perfect "cover-up" solution for everything you need!', 'Unique . SM.ART . Nobility

take me wherever you go...

8_Żakiet Jour.y

Całosezonowy Know-How . Szlachetny . Swobodny . Dwu-warstwowy . Lekki . Żakiet z jedwabnego weluru . Idealne rozwiązanie typu "narzutka" na wszystko co potrzebujesz!', '{"36","38","40"}', false, false, 'silk velvet, 100% silk', 'welur jedwabny, jedwab 100%', 'Czekolada', 'Czekolada') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('24_spodnica-ver-sale', '24.Spódnica Ver.Sale', 160000, 'skirt', 'monaco', '/img/products/24_spodnica-ver-sale/0.webp', '{"/img/products/24_spodnica-ver-sale/0.webp","/img/products/24_spodnica-ver-sale/1.webp","/img/products/24_spodnica-ver-sale/2.webp","/img/products/24_spodnica-ver-sale/3.webp"}', 'Unique . SM.ART . Nobility

take me wherever you go...

Japan skirt

in lightness, freedom... you nobly penetrate into your world

filled with light

freed

own. unique...

*

A refined and balanced combination of form and lines, exclusivity and practicality...

An event, a concert, a dinner outing... travel... a walk on the beach, a vacation... this set will be perfect anywhere! At the same time, when worn separately, it fulfills our main design idea: inspiring you to create limitless styling possibilities!

Skirt with a Japanese pleat, the skirt tails overlap one another, fastened with snaps

It is very light, and its aesthetically refined form can create countless styles - changing the shoes, changing the belt, cardigan, jacket or scarf... creates new faces!

Made of silk velvet, hand- finished', 'Unique . SM.ART . Nobility

take me wherever you go...

Spódnica Japan

w lekkości . swobodzie ... szlachetnie przenikasz do swojego świata

przepełniona światłem

uwolniona

własna . niepowtarzalna ...

*

Wyrafinowane i wyważone w formie i linii połączenie ekskluzywności z użytkowością...

Event, koncert, wyjście na kolację... podróże... spacer po plaży, urlop... wszędzie tam odnajdzie się ten zestaw wyśmienicie! Jednocześnie nosząc go rozdzielnie, wypełnia on naszą główną ideę projektową: inspiruje Cię do tworzenia nieograniczonych możliwości stylizacyjnych!

Spódnica z japońskim zakładem, poły spódnicy zachodzą jeden na drugi na siebie, zapinana na zatrzaski

Jest bardzo lekka, a jej wyrafinowana estetycznie forma może tworzyć niezliczoną liczbę stylizacji - zmiana butów, zmiana paska, kardigana, żakietu czy szala.. tworzy nowe jej oblicza!

Wykonana z weluru jedwabnego, wykończona ręcznie', '{"36","38","40"}', false, false, null, null, 'Czekolada', 'Czekolada') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('8-zakiet-seiko', '8.Żakiet Seiko', 210000, 'blazer', 'lou-vre', '/img/products/8-zakiet-seiko/0.webp', '{"/img/products/8-zakiet-seiko/0.webp","/img/products/8-zakiet-seiko/1.webp"}', 'Unique . SM.ART . Nobility

8.Jacket Seiko

This is all-season know-how. A beautiful and unique jacket made of fine Italian astrakhan fur with a subtle sheen. Perfect for both evening events and everyday city activities. Lined with a glossy jacquard lining, embossed with ornamental patterns.

The refined quintessence of modern, effortless elegance. It seamlessly blends with the body, emphasizing sensuality, grace, and luxury.', 'Unique . SM.ART . Nobility

8.Żakiet Seiko

To całosezonowy Know-How . Piękny i wyjątkowy żakiet ze szlachetnej włoskiej tkaniny futrzanej o fakturze karakułu z subtelnym połyskiem . idealny na wielkie wieczorowe wyjścia i miejskie codzienne aktywności... Podszyty żakardową tłoczoną w ornamentne wzory podszewką z połyskiem .

Wyrafinowana kwintesencja nowoczesnej swobodnej dostojności . Lekko współgra z ciałem, podkreślając zmysłowość, wdzięk i luksus.', '{"36","38","40","42"}', false, false, '100% PE fur fabric', 'Tkanina futrzana PE 100%', 'Chocolate', 'Czekolada') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('36-plaszcz-shinrein', '36.Płaszcz Shinrein', 440000, 'coat', 'new-chapter', '/img/products/36-plaszcz-shinrein/0.webp', '{"/img/products/36-plaszcz-shinrein/0.webp","/img/products/36-plaszcz-shinrein/1.webp"}', 'Unique . SM.ART . Nobility

36.Coat Shinrein

This is all-season know-how. A beautiful and unique coat made of fine Italian astrakhan fur with a subtle sheen. Perfect for big nights out and everyday city activities. Lined with a glossy jacquard lining, embossed with ornamental patterns.

The refined quintessence of modern, effortless elegance. It seamlessly blends with the body, emphasizing sensuality, grace, and luxury.', 'Unique . SM.ART . Nobility

36.Płaszcz Shinrein

To całosezonowy Know-How . Piękny i wyjątkowy płaszcz ze szlachetnej włoskiej tkaniny futrzanej o fakturze karakułu z subtelnym połyskiem . idealny na wielkie wieczorowe wyjścia i miejskie codzienne aktywności... Podszyty żakardową tłoczoną w ornamentne wzory podszewką z połyskiem .

Wyrafinowana kwintesencja nowoczesnej swobodnej dostojności . Lekko współgra z ciałem, podkreślając zmysłowość, wdzięk i luksus.', '{"36","38","40","42"}', false, false, '100% PE fur fabric', 'Tkanina futrzana PE 100%,', 'Czekolada', 'Czekolada') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('37-sukienka-icon', '37.Sukienka ICON', 170000, 'dress', 'deep-ly-me', '/img/products/37-sukienka-icon/0.webp', '{"/img/products/37-sukienka-icon/0.webp","/img/products/37-sukienka-icon/1.webp","/img/products/37-sukienka-icon/2.webp","/img/products/37-sukienka-icon/3.webp"}', 'Unique . SM.ART . Nobility

Dress ICON - Velvet Edition

ICON is a dress that needs no statement. Its presence speaks for itself—quiet, majestic, magnetic. Crafted from soft, refined velvet in a deep, saturated hue, it envelops the silhouette like a luxurious shadow, accentuating movement, the body''s curves, and natural grace.

This is a design for women who combine strength with calm, and elegance with effortless self-confidence.', 'Unique . SM.ART . Nobility

Sukienka ICON — Velvet Edition

ICON to suknia, która nie potrzebuje manifestów. Jej obecność mówi sama za siebie — cicha, majestatyczna, magnetyczna. Stworzona z miękkiego, szlachetnego weluru o głębokim, nasyconym odcieniu, otula sylwetkę jak luksusowy cień, podkreślając ruchy, linię ciała i naturalną grację.

To projekt dla kobiet, które łączą siłę ze spokojem, a elegancję z bezwysiłkową pewnością siebie.

Detale, które definiują ICON

• Miękki, gęsty welur premium — pięknie chłonie światło, tworząc efekt subtelnego połysku.

• Prosta, długa linia — wysmukla sylwetkę i podkreśla proporcje w sposób niezwykle dyskretny.

• Asymetryczne, boczne rozcięcie — zapewnia lekkość ruchu i dodaje nowoczesnego wymiaru.

• Rękawy o czystej formie — tworzą minimalistyczny, rzeźbiarski efekt.

• Komfort i miękkość — materiał dopasowuje się do ciała, nie krępując ruchów.

Jak nosić ICON

ICON jest suknią, która zmienia charakter w zależności od stylizacji:

• z welurowymi lub satynowymi akcesoriami podkreśla elegancję,

• z botkami i dużą torebką — nowoczesny nonchalance,

• z biżuterią w odcieniach złota lub wina — głębię i sensualność.

Dla kogo powstała ICON?

Dla kobiety, która jest obecna.

Dla kobiety, która wybiera jakość zamiast nadmiaru, ponadczasowość zamiast chwilowości.

Dla kobiety, która wie, kim jest.', '{"I (34-36)","II (38-40)","III (42-44)"}', false, false, null, null, 'Czekolada', 'Czekolada') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('18_set-soul-light', '18.Set Soul.Light', 360000, 'set', 'say-shell', '/img/products/18_set-soul-light/0.webp', '{"/img/products/18_set-soul-light/0.webp","/img/products/18_set-soul-light/1.webp","/img/products/18_set-soul-light/2.webp"}', 'Soul.Light Set . The light you discover within yourself .

Soul.Light is a story of lightness, freedom, and a return to one''s true nature. Created for women who find luxury in authenticity, it captivates through its subtle form and effortless elegance.

The flowing top gently embraces the silhouette, while the voluminous skirt moves with remarkable fluidity, creating a sense of lightness with every step. Its minimalist construction allows the quality of craftsmanship, harmonious proportions, and movement of the fabric to take center stage.

The buttery shade of silk evokes the first light of morning, warm sand beneath bare feet, and a sense of serenity.

Soul.Light accompanies moments that remain in memory — from journeys and summer gatherings to meaningful occasions that celebrate a new chapter.', 'Set Soul.Light . Światło, które odnajdujesz w sobie .

Soul.Light to opowieść o lekkości, wolności i powrocie do własnej natury. Stworzony z myślą o kobietach, które odnajdują luksus w autentyczności, zachwyca subtelną formą i niewymuszoną elegancją.

Zwiewna góra delikatnie otula sylwetkę, podczas gdy obszerna spódnica porusza się z niezwykłą płynnością, tworząc efekt lekkości przy każdym kroku. Minimalistyczna konstrukcja pozwala wybrzmieć jakości wykonania, proporcjom i ruchowi tkaniny.

Masłowy odcień jedwabiu przywołuje skojarzenia z pierwszym światłem poranka, ciepłym piaskiem i spokojem.

Soul.Light towarzyszy chwilom, które pozostają w pamięci — od podróży i letnich przyjęć po wyjątkowe momenty celebrujące nowy rozdział.', '{"34","36","38","40"}', false, false, null, null, 'Masłowy', 'Masłowy') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('18_set-kioto', '18.Set Kioto', 240000, 'set', 'say-shell', '/img/products/18_set-kioto/0.webp', '{"/img/products/18_set-kioto/0.webp","/img/products/18_set-kioto/1.webp","/img/products/18_set-kioto/2.webp","/img/products/18_set-kioto/3.webp"}', 'Kioto Set . The art of simplicity expressed through raw silk .

The Kioto Set is a tribute to conscious luxury — the kind that requires no excess to captivate. Crafted from raw silk, it enchants with the fabric’s natural texture, subtle sheen, and exceptional lightness.

The kimono, with its soft architectural form, gently embraces the silhouette while highlighting its natural proportions. A waist tie brings harmony to the composition, while the long skirt with a refined slit introduces freedom of movement and effortless elegance.

Inspired by the Japanese aesthetic of balance and beauty found in simplicity, Kioto celebrates the authenticity of the material, the artistry of craftsmanship, and timeless design.

It is a set created for women who choose quality over seasonality and authenticity over fleeting trends.', 'Set Kioto . Sztuka prostoty zamknięta w surowym jedwabiu .

Set Kioto to hołd dla świadomego luksusu — tego, który nie potrzebuje nadmiaru, aby zachwycać. Wykonany z surowego jedwabiu, urzeka naturalną strukturą tkaniny, subtelnym połyskiem i wyjątkową lekkością.

Kimono o miękkiej, architektonicznej formie delikatnie otula sylwetkę, podkreślając jej naturalne proporcje. Wiązanie w talii nadaje całości harmonii, podczas gdy długa spódnica z rozcięciem wprowadza swobodę ruchu i niewymuszoną elegancję.

Inspirowany japońską estetyką równowagi i piękna odnajdywanego w prostocie, Kioto celebruje naturalność materiału, kunszt wykonania i ponadczasowy design.

To komplet stworzony dla kobiet, które wybierają jakość ponad sezonowość, a autentyczność ponad chwilowe trendy.', '{"34","36","38","40"}', false, false, null, null, 'Masłowy', 'Masłowy') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('dress-say-shell', '15.Sukienka Say.Shell', 440000, 'dress', 'say-shell', '/img/products/dress-say-shell/0.webp', '{"/img/products/dress-say-shell/0.webp","/img/products/dress-say-shell/1.webp","/img/products/dress-say-shell/2.webp"}', 'Dress Say.Shell

The Say.Shell Dress is crafted from natural silk and adorned with hand-painted floral motifs. Each piece is created individually, making every composition of painted elements entirely unique.

Light and fluid, it brings freedom of movement to the silhouette, while the delicately transparent silk creates an impression of subtle weightlessness. The hand-painted artwork highlights the distinctive character of the design, transforming every dress into a one-of-a-kind creation.', 'Sukienka Say.Shell

Sukienka Say.Shell została wykonana z naturalnego jedwabiu z ręcznie namalowanymi kwiatami. Każdy projekt tej sukienki powstaje indywidualnie, dzięki czemu układ malowanych elementów jest niepowtarzalny.

Lekka, nadaje sylwetce swobodę ruchu, a delikatnie transparentny jedwab tworzy efekt subtelnej lekkości. Ręczne malowanie podkreśla unikatowy charakter projektu i sprawia, że każda sukienka staje się wyjątkowym egzemplarzem.', '{"34","36","38","40"}', false, false, 'Jedwab', '100% jedwab', 'Różowy', 'Różowy') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('sukienka-work-kioto-1', '37.Sukienka Kioto', 155000, 'dress', 'poza-murem', '/img/products/sukienka-work-kioto-1/0.webp', '{"/img/products/sukienka-work-kioto-1/0.webp","/img/products/sukienka-work-kioto-1/1.webp","/img/products/sukienka-work-kioto-1/2.webp","/img/products/sukienka-work-kioto-1/3.webp"}', 'Unique . SM.ART . Nobility

Dress Kioto

Everyday elegance. Silence that holds power.

The Kioto Dress was designed as a key element of your SM.ART Wardrobe — light, harmonious, and remarkably versatile. A minimalist silhouette with luxurious finishing, created for women who travel, create, work… and need one thing: beauty that requires no effort.

Made of 100% high-quality cotton with a smooth, soft texture, it delivers all-day comfort. The cotton breathes, moves with you, and its natural matte finish brings a gentle glow to every look.

The cut was developed to subtly elongate the figure while giving complete freedom of movement. You can work in it, lead meetings, travel, stroll through the city — and still look like a woman who knows her worth.

Kioto is a dress that emanates.

What makes Kioto exceptional?

• creates effortless elegance• pairs with most SM.ART Wardrobe elements• perfect for travel, the office, meetings, and slow evenings• carries the energy of calm confidence

Care: gentle wash at 30°C or hand wash; no dry cleaning required.', 'Unique . SM.ART . Nobility

Sukienka Kioto

Elegancja codzienności. Cisza, która ma moc.

Sukienka Kioto została zaprojektowana jako kluczowy element Twojej SM.ART Garderoby — lekka, harmonijna i niezwykle uniwersalna. To minimalistyczna forma o luksusowym wykończeniu, stworzona dla kobiet, które podróżują, tworzą, pracują… i potrzebują jednej rzeczy: piękna, które nie wymaga wysiłku.

Wykonana w 100% z wysokogatunkowej bawełny, o gładkiej, miękkiej strukturze, zapewnia komfort przez cały dzień. Bawełna oddycha, dopasowuje się do ruchu, a jej naturalny mat przełamuje światłem każdą stylizację.

Linia cięcia została opracowana tak, by subtelnie wydłużać sylwetkę i dawać swobodę. Możesz w niej pracować, prowadzić spotkania, podróżować, spacerować po mieście — a nadal wyglądać jak kobieta, która zna swoją wartość.

Kioto to sukienka, która emanuje.

Dlaczego Kioto jest wyjątkowa?

• tworzy elegancję bez wysiłku

• łączy się z większością elementów SM.ART Garderoby

• jest idealna na podróże, biuro, spotkania i slow evenings

• „niesie” energię spokojnej pewności siebie

Pielęgnacja: pranie delikatne w 30°C lub ręczne; nie wymaga chemicznego', '{"I (34-36)","II (38-40)","III (42-44)"}', false, false, null, null, null, null) on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('18_set-oasis', '18_Set Oasis', 250000, 'set', 'bali', '/img/products/18_set-oasis/0.webp', '{"/img/products/18_set-oasis/0.webp","/img/products/18_set-oasis/1.webp","/img/products/18_set-oasis/2.webp","/img/products/18_set-oasis/3.webp"}', 'Unique . SM.ART . Nobility

Set Oasis

An artistic, handcrafted set that sensually and lightly covers your body. The perfect solution to feel feminine and comfortable!

Total Look:

(the composition of the entire composition is in the photos)

1. Top Oasis

2. Oasis skirt', 'Unique . SM.ART . Nobility

Set Oasis

Artystyczny, ręcznie tworzony set który zmysłowo i lekko okrywa Twoje ciało. Idealne rozwiązanie byś czuła się kobieco i swobodnie!

Total Look:

(skład całej kompozycji na zdjęciach)

1. Top Oasis

2. Spódnica Oasis', '{"34","36","38","40"}', false, false, null, null, 'Masłowy', 'Masłowy') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('38_sukienka-lux-ury', '38_Sukienka Lux.URY', 260000, 'dress', 'say-shell', '/img/products/38_sukienka-lux-ury/0.webp', '{"/img/products/38_sukienka-lux-ury/0.webp","/img/products/38_sukienka-lux-ury/1.webp","/img/products/38_sukienka-lux-ury/2.webp","/img/products/38_sukienka-lux-ury/3.webp"}', 'Unique . SM.ART . Nobility

38_Dress Lux.URY

This is Project No. 38 in our SM.ART Wardrobe concept. It''s a work of lightness, freedom, and quality!

Made of fine silk, it beautifully fits the silhouette, giving it absolute freedom of movement!

Feminine. Light. Noble

Personalization - tailor-made design:

Contact us by email: info@absolutdimension.com or by phone: +48 732 808 804', 'Unique . SM.ART . Nobility

38_Sukienka Lux.URY

to Projekt nr 38 w naszej koncepcji SM.ART Garderoby. To dzieło lekkości . swobody . jakości!

Wykonania ze szlachetnego jedwabiu, pięknie układająca się do sylwetki dając jej absolutną wolność ruchu!

Kobieca . Lekka . Szlachetna

Personalizacja - wykonanie projektu na miarę:

Skontaktuj się z nami przez e-mail: info@absolutdimension.com lub telefonicznie: +48 732 808 804', '{"34","36","38","40","42","44"}', false, false, null, null, 'Gold', 'Złoty') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('top-monaco', '20.Top Monaco', 60000, 'top', 'monaco', '/img/products/top-monaco/0.webp', '{"/img/products/top-monaco/0.webp","/img/products/top-monaco/1.webp","/img/products/top-monaco/2.webp","/img/products/top-monaco/3.webp"}', 'Unique . SM.ART . Nobility

take me wherever you go...

20.Top Monaco

in lightness . freedom ... you nobly penetrate into your world

filled with light

freed

your own . unique ...

*

It fulfills all assumptions: creative . comfortable . it creates compositions in the E.W.S system, meaning 1 skirt = many occasions. You change accessories and you have it in various styling options:

Event . Work . Street

The model is 170 cm tall and wears size 38

Personalization - made-to-measure design:

Contact us by email: info@absolutdimension.com or by phone: +48 732 808 804', 'Unique . SM.ART . Nobility

take me wherever you go...

20.Top Monaco

w lekkości . swobodzie ... szlachetnie przenikasz do swojego świata

przepełniona światłem

uwolniona

własna . niepowtarzalna ...

*

Realizuje wszystkie założenia: kreatywna . komfortowa . tworzy kompozycje w systemie E.W.S czyli 1 spódnica = wiele okazji Zmieniasz dodatki i masz ją w odsłonach stylizacji:

Event . Work . Street

Modelka ma 170 cm wzrostu i rozmiar 38

Personalizacja - wykonanie projektu na miarę:

Skontaktuj się z nami przez e-mail: info@absolutdimension.com lub telefonicznie: +48 732 808 804', '{"34","36","38","40","42","44"}', false, false, null, null, 'Złoty', 'Złoty') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('sukienka-bali', '15_Sukienka Bali', 220000, 'dress', 'bali', '/img/products/sukienka-bali/0.webp', '{"/img/products/sukienka-bali/0.webp","/img/products/sukienka-bali/1.webp","/img/products/sukienka-bali/2.webp","/img/products/sukienka-bali/3.webp"}', 'Unique . SM.ART . Nobility

take me wherever you go...

Dress Bali is Design No. 15 in our SM.ART Wardrobe concept. Created with your romantic vacation in mind – full of freedom, joy, and lightness. This luxurious holiday dress made of natural fabrics will make you feel unique and feminine, regardless of the occasion.

Perfect for: Vacations, travel, sightseeing, walks on the beach, candlelit dinners, yacht cruises, or elegant events. This premium linen dress will always be perfect – from daytime after dark, from exotic vacations to special meetings in the city.

Feminine. Light. Noble

•

Breathable and friendly to sensitive skin – made of high-quality natural fabrics

•

Personalized premium dress – available in other colors

Personalization:

• You can order this design in other colors

• You can order this design made to measure

For this purpose, please contact us by e-mail: info@absolutdimension.com / tel. +48 732 808 804', 'Unique . SM.ART . Nobility

take me wherever you go...

Sukienka Bali to Projekt nr 15 w naszej koncepcji SM.ART Garderoby. Stworzona z myślą o Twoim romantycznym urlopie – pełnym swobody, radości i lekkości. To luksusowa sukienka wakacyjna z naturalnych tkanin, w której poczujesz się wyjątkowo i kobieco, niezależnie od okazji.

Idealna na:wakacje, podróże, zwiedzanie, spacer po plaży, kolację przy świecach, rejs jachtem czy elegancki event. Ta lniana sukienka premium zawsze odnajdzie się wyśmienicie – od dnia po zmroku, od egzotycznych wakacji po wyjątkowe spotkania w mieście.

Kobieca . Lekka . Szlachetna

•

Oddychająca i przyjazna dla skóry wrażliwej – wykonana z wysokiej jakości tkanin naturalnych

•

Personalizowana sukienka premium – dostępna w innych kolorach

Personalizacja:

• Możesz zamówić ten projekt w innych kolorach

• Możesz zamówić ten projekt szyty na miarę

w tym celu prosimy skontaktuj się z nami e-mail: info@absolutdimension.com / tel. +48 732 808 804', '{"34","36","38","40","42","44"}', false, false, null, null, null, null) on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('8_zakiet-melbourne', '8_Żakiet Melbourne', 215000, 'blazer', 'melbourne', '/img/products/8_zakiet-melbourne/0.webp', '{"/img/products/8_zakiet-melbourne/0.webp","/img/products/8_zakiet-melbourne/1.webp","/img/products/8_zakiet-melbourne/2.webp","/img/products/8_zakiet-melbourne/3.webp"}', 'Unique . SM.ART . Nobility

take me wherever you go...

8_Jacket Melbourne

All-Season Know-How. Noble. Casual. Light. Silk Jacket. The perfect "cover-up" solution for everything you need!

•

Work. Event. Street

1 jacket = many occasions

*

Styled with:

1. Melbourne Dress

2. Côte d''Azur Dress

Personalization - tailor-made design:

Contact us by email: info@absolutdimension.com or by phone: +48 732 808 804', 'Unique . SM.ART . Nobility

take me wherever you go...

8_Żakiet Melbourne

Całosezonowy Know-How . Szlachetny . Swobodny . Lekki . Żakiet z jedwabiu . Idealne rozwiązanie typu "narzutka" na wszystko co potrzebujesz!

•

Work . Event . Street

1 żakiet = wiele okazji

*

W stylizacji z:

1. Sukienka Melbourne

2. Sukienka Côte d''Azur

Personalizacja - wykonanie projektu na miarę:

Skontaktuj się z nami przez e-mail: info@absolutdimension.com lub telefonicznie: +48 732 808 804', '{"34","36","38","40","42"}', false, false, 'Jedwab', 'Jedwab', 'Złoty beż', 'Złoty beż') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('38_upper-east-side', '38.Upper East Side', 300000, 'dress', 'new-york-city', '/img/products/38_upper-east-side/0.webp', '{"/img/products/38_upper-east-side/0.webp","/img/products/38_upper-east-side/1.webp","/img/products/38_upper-east-side/2.webp","/img/products/38_upper-east-side/3.webp"}', 'Unique . SM.ART . Nobility

38_Upper East Side

Project No. 38 in our SM.ART Wardrobe concept. The main design premise is dedicated to your romantic getaway... a time spent in freedom, joy, and ease... enjoying the beauty of life and the beauty of yourself!

Vacations, travel, sightseeing, a walk on the beach, dinner, a yacht, an event... it will always be perfect everywhere.

Feminine. Light. Noble

38_Upper East Side is a beautiful composition of asymmetry... made by combining our Absolut Dress with the Ame''53 Dress in silk georgette and satin...

A dress you will love for life!

Personalization - tailor-made design:

Contact us by email: info@absolutdimension.com or by phone: +732 808 804', 'Unique . SM.ART . Nobility

38.Upper East Side

Projekt nr 38 w naszej koncepcji SM.ART Garderoby. Głównym założeniem projektowym jest dedykowanie jej Twojemu romantycznemu urlopowi... czas który spędzasz w swobodzie, radości i lekkości... ciesząc się pięknem życia i piękna sobą!

Wakacje, podróże, zwiedzanie, spacer po plaży, kolacja, jacht, event... zawsze i wszędzie odnajdzie się wyśmienicie.

Kobieca . Lekka . Szlachetna

38_Upper East Side to piękna kompozycja asymetrii... wykonana z połączenia naszej Sukienki Absolut z Sukienką Ame''53 jedwabnej żorżety i satyny...

Sukienka którą pokochasz na całe życie!

Personalizacja - wykonanie projektu na miarę:

Skontaktuj się z nami przez e-mail: info@absolutdimension.com lub telefonicznie: +732 808 804', '{"34","36","38","40"}', false, false, 'Jedwab', 'Jedwab', 'Śmietanowa biel', 'Śmietanowa biel') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('38_sukienka-melbourne', '38_Sukienka Melbourne', 270000, 'dress', 'new-york-city', '/img/products/38_sukienka-melbourne/0.webp', '{"/img/products/38_sukienka-melbourne/0.webp","/img/products/38_sukienka-melbourne/1.webp","/img/products/38_sukienka-melbourne/2.webp","/img/products/38_sukienka-melbourne/3.webp"}', 'Unique . SM.ART . Nobility

38_Dress Melbourne

Noble. Artistic. Luxurious

The quintessence of composition - coherence, harmony and balance of the combination of utility and beauty.

Made of fine silk, very light, it flows freely with the body''s movements, the cut subtly emphasizes the silhouette, revealing the essence of femininity''s beauty... sensuality and grace.

Personalization - tailor-made design:

Contact us by email: info@absolutdimension.com or by phone: +48 732 808 804', 'Unique . SM.ART . Nobility

38_Sukienka Melbourne

Szlachetna . Artystyczna . Luksusowa

Kwintesencja kompozycji - spójność, harmonia i równowaga połączenia użytkowości i piękna.

Wykonana ze szlachetnej krepy jedwabnej, swobodnie współgra z ruchem ciała, krój podkreśla lekko sylwetkę ukazując istotę piękna kobiecości... zmysłowość i wdzięku.

Do sukienki możesz dobrać:

8_Żakiet Melbourne

I tak uzyskasz cały spójny total look.

Personalizacja - wykonanie projektu na miarę:

Skontaktuj się z nami przez e-mail: info@absolutdimension.com lub telefonicznie: +48 732 808 804', '{"34","36","38","40"}', false, false, 'Jedwab', 'Jedwab', 'Złoty beż', 'Złoty beż') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('38_set-manhattan', '38_Set Manhattan', 290000, 'dress', 'new-york-city', '/img/products/38_set-manhattan/0.webp', '{"/img/products/38_set-manhattan/0.webp","/img/products/38_set-manhattan/1.webp","/img/products/38_set-manhattan/2.webp","/img/products/38_set-manhattan/3.webp"}', 'Unique . SM.ART . Nobility

38_Set Manhattan

Project No. 38 in our SM.ART Wardrobe concept. The main design premise is dedicated to your romantic getaway... a time spent in freedom, joy, and ease... enjoying the beauty of life and the beauty of yourself!

Vacations, travel, sightseeing, a walk on the beach, dinner, a yacht, an event... it will always be perfect everywhere.

Feminine. Light. Noble

A dress with a top that you will love forever!', 'Unique . SM.ART . Nobility

38_Set Manhattan

Projekt nr 38 w naszej koncepcji SM.ART Garderoby. Głównym założeniem projektowym jest dedykowanie jej Twojemu romantycznemu urlopowi... czas który spędzasz w swobodzie, radości i lekkości... ciesząc się pięknem życia i piękna sobą!

Wakacje, podróże, zwiedzanie, spacer po plaży, kolacja, jacht, event... zawsze i wszędzie odnajdzie się wyśmienicie.

Kobieca . Lekka . Szlachetna

Sukienka z Topem którą pokochasz na całe życie!', '{"34","36","38","40"}', false, false, 'Jedwab', 'Jedwab', 'Burgund', 'Burgund') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('31_szal-nu-1', '31.Szal NU', 120000, 'scarf', 'lou-vre', '/img/products/31_szal-nu-1/0.webp', '{"/img/products/31_szal-nu-1/0.webp","/img/products/31_szal-nu-1/1.webp","/img/products/31_szal-nu-1/2.webp","/img/products/31_szal-nu-1/3.webp"}', 'Unique . SM.ART . Nobility

31.NU Scarf

makes your life easier...

Scarf made of natural silk.

Our unique technological method of silk processing, hand-finished finishes and innovative construction solutions give it an exceptional effect of lightness, comfort and ease of use.

This noble work realizes all our goals:', 'Unique . SM.ART . Nobility

31.Szal NU

makes your life easier ...

Szal z naturalnego jedwabiu.

Nasz unikalny technologiczny sposób obróbki jedwabiu, ręczne wykończenia i nowatorskie rozwiązania konstrukcyjne dają wyjątkowy efekt lekkości, komfortu i swobody w jej użytkowaniu .

To szlachetne dzieło realizuje wszystkie nasze cele:

Kompozycja . Komfort . Kreatywność

naszego systemu twórczego WSE (Work . Street . Event )

czyli 1 projekt = wiele okazji - wystarczy że zmienisz dodatki a zmienisz charakter projektu - jej genialność to możność bezwarunkowej adaptacji..

Wymiar 100 cm x 260 cm

Personalizacja:

• Możesz zamówić ten projekt w innych kolorach

w tym celu prosimy skontaktuj się z nami e-mail: info@absolutdimension.com / tel. +48 732 808 804', '{"One size"}', false, false, null, null, null, null) on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('17_sukienka-free-dom', '17_Sukienka Free.Dom', 210000, 'dress', 'st-tropez', '/img/products/17_sukienka-free-dom/0.webp', '{"/img/products/17_sukienka-free-dom/0.webp","/img/products/17_sukienka-free-dom/1.webp","/img/products/17_sukienka-free-dom/2.webp","/img/products/17_sukienka-free-dom/3.webp"}', 'Unique . SM.ART . Nobility

17_Free.Dom Dress

Project No. 17 in our SM.ART Wardrobe concept. The main design premise is dedicated to your romantic getaway... a time spent in freedom, joy, and ease... enjoying the beauty of life and the beauty of yourself!

Vacations, travel, sightseeing, a walk on the beach, dinner, a yacht, an event... it will always be perfect everywhere.

Feminine. Light. Noble

A dress you will love for life!', 'Unique . SM.ART . Nobility

17_Sukienka Free.Dom

Projekt nr 17 w naszej koncepcji SM.ART Garderoby. Głównym założeniem projektowym jest dedykowanie jej Twojemu romantycznemu urlopowi... czas który spędzasz w swobodzie, radości i lekkości... ciesząc się pięknem życia i piękna sobą!

Wakacje, podróże, zwiedzanie, spacer po plaży, kolacja, jacht, event... zawsze i wszędzie odnajdzie się wyśmienicie.

Kobieca . Lekka . Szlachetna

Sukienka którą pokochasz na całe życie!', '{"34","36","38","40"}', false, false, 'Jedwab', 'Jedwab', 'Burgund', 'Burgund') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('8_zakiet-mantoine', '8_Żakiet M''Antoine', 150000, 'blazer', 'new-chapter', '/img/products/8_zakiet-mantoine/0.webp', '{"/img/products/8_zakiet-mantoine/0.webp","/img/products/8_zakiet-mantoine/1.webp","/img/products/8_zakiet-mantoine/2.webp","/img/products/8_zakiet-mantoine/3.webp"}', 'Unique . SM.ART . Nobility

take me wherever you go...

8_Jacket M''Antoine

All-Season Know-How. Noble. Casual. Light. Silk Jacket. The perfect "cover-up" solution for everything you need!

•

Work. Event. Street

1 jacket = many occasions

*

Personalization - tailor-made design:

Contact us by email: info@absolutdimension.com or by phone: +48 732 808 804', 'Unique . SM.ART . Nobility

take me wherever you go...

8_Żakiet M''Antoine

Całosezonowy Know-How . Szlachetny . Swobodny . Lekki . Żakiet z jedwabiu . Idealne rozwiązanie typu "narzutka" na wszystko co potrzebujesz!

•

Work . Event . Street

1 żakiet = wiele okazji

*

Personalizacja - wykonanie projektu na miarę:

Skontaktuj się z nami przez e-mail: info@absolutdimension.com lub telefonicznie: +48 732 808 804', '{"34","36","38","40"}', false, false, 'Jedwab', 'Jedwab', 'Złoty beż', 'Złoty beż') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('4_kardigan-ocean', '4_Kardigan Ocean', 130000, 'cardigan', 'melbourne', '/img/products/4_kardigan-ocean/0.webp', '{"/img/products/4_kardigan-ocean/0.webp","/img/products/4_kardigan-ocean/1.webp","/img/products/4_kardigan-ocean/2.webp","/img/products/4_kardigan-ocean/3.webp"}', 'Unique . SM.ART . Nobility

4_Ocean Cardigan

makes your life easier ...

Excellent to the touch. Noble. Light. Sensual. Hand-spun cardigan made of shimmering hairy yarn. Perfect for all occasions from EVENT to WORK to STREET - creates creative styles, matching all other wardrobe elements!

Our unique craftsmanship, hand-finishes, and innovative structural solutions create an exceptional effect of lightness, comfort, and freedom in its use.

This noble piece achieves all our goals:', 'Unique . SM.ART . Nobility

4_Kardigan Ocean

makes your life easier ...

Doskonały w dotyku . Szlachetny . Lekki . Zmysłowy . Ręcznie przędzony kardigan z połyskującej przędzy z włosem . Idealny na wszelkie okazje od EVENTU przez WORK po STREET - tworzy keatywne stylizacje, pasując do wszystkich pozostałych elementów garderoby!

Nasze unikalne rękodzielnicze tworzenie, ręczne wykończenia i nowatorskie rozwiązania konstrukcyjne dają wyjątkowy efekt lekkości, komfortu i swobody w jej użytkowaniu .

To szlachetne dzieło realizuje wszystkie nasze cele:

Kompozycja . Komfort . Kreatywność

naszego systemu twórczego WSE (Work . Street . Event )

czyli 1 projekt = wiele okazji - wystarczy że zmienisz dodatki a zmienisz charakter projektu - jej genialność to możność bezwarunkowej adaptacji..', '{"34","36","38","40"}', false, false, '. Comfort. Creativity', '100% PE', 'Czekolada', 'Czekolada') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('31_szal-nu', '31_Szal M''Antoine NU', 80000, 'scarf', 'deep-ly-me', '/img/products/31_szal-nu/0.webp', '{"/img/products/31_szal-nu/0.webp","/img/products/31_szal-nu/1.webp","/img/products/31_szal-nu/2.webp"}', 'Unique . SM.ART . Nobility

31_NU Shawl

makes your life easier...

Shawl made of natural silk.

Our unique technological method of silk processing, hand-finished finishes and innovative construction solutions give it an exceptional effect of lightness, comfort and ease of use.

This noble work realizes all our goals:', 'Unique . SM.ART . Nobility

31_Szal M''Antoine NU

makes your life easier ...

Szal z naturalnego jedwabiu.

Nasz unikalny technologiczny sposób obróbki jedwabiu, ręczne wykończenia i nowatorskie rozwiązania konstrukcyjne dają wyjątkowy efekt lekkości, komfortu i swobody w jej użytkowaniu .

To szlachetne dzieło realizuje wszystkie nasze cele:

Kompozycja . Komfort . Kreatywność

naszego systemu twórczego WSE (Work . Street . Event )

czyli 1 projekt = wiele okazji - wystarczy że zmienisz dodatki a zmienisz charakter projektu - jej genialność to możność bezwarunkowej adaptacji..

Wymiar 70cm x 200 cm

Personalizacja:

• Możesz zamówić ten projekt w innych kolorach

• Możesz zamówić ten projekt szyty na miarę

w tym celu prosimy skontaktuj się z nami e-mail: info@absolutdimension.com / tel. +48 732 808 804', '{"One size"}', false, false, '. Comfort. Creativity', 'Jedwab', 'Złoty beż', 'Złoty beż') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('26_top-golden-age', '25_Bluzka Golden Age', 85000, 'top', 'st-tropez', '/img/products/26_top-golden-age/0.webp', '{"/img/products/26_top-golden-age/0.webp","/img/products/26_top-golden-age/1.webp","/img/products/26_top-golden-age/2.webp","/img/products/26_top-golden-age/3.webp"}', 'Unique . SM.ART . Nobility

25_Blouse Golden Age

makes your life easier...

Elegance in a modern form. This blouse is made of natural silk. The elegantly shimmering satin gently flows over the body, making you look sensual, intriguing, and noble.

Our unique technological method of silk processing, hand-finished finishes and innovative construction solutions give it an exceptional effect of lightness, comfort and ease of use.

This noble work realizes all our goals:', 'Unique . SM.ART . Nobility

25_Bluzka Golden Age

makes your life easier ...

Elegancja w nowoczesnej formie . Bluzka wykonana z naturalnego jedwabiu . Szlachetnie połyskująca satyna delikatnie opływająca ciało, czyni że wyglądasz w niej zmysłowo, intrygująco i nobility .

Nasz unikalny technologiczny sposób obróbki jedwabiu, ręczne wykończenia i nowatorskie rozwiązania konstrukcyjne dają wyjątkowy efekt lekkości, komfortu i swobody w jej użytkowaniu .

To szlachetne dzieło realizuje wszystkie nasze cele:

Kompozycja . Komfort . Kreatywność

naszego systemu twórczego WSE (Work . Street . Event )

czyli 1 projekt = wiele okazji - wystarczy że zmienisz dodatki a zmienisz charakter projektu - jej genialność to możność bezwarunkowej adaptacji..

zobacz Kreatywne Stylizacje

*

Personalizacja:

• Możesz zamówić ten projekt w innych kolorach

• Możesz zamówić ten projekt szyty na miarę

w tym celu prosimy skontaktuj się z nami e-mail: info@absolutdimension.com / tel. +48 732 808 804', '{"34","36","38","40"}', false, false, '. Comfort. Creativity', 'Jedwab', 'Złoty', 'Złoty') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('23_top-my-way-2', '23_Top My.Way 2', 110000, 'top', 'st-tropez', '/img/products/23_top-my-way-2/0.webp', '{"/img/products/23_top-my-way-2/0.webp","/img/products/23_top-my-way-2/1.webp","/img/products/23_top-my-way-2/2.webp","/img/products/23_top-my-way-2/3.webp"}', 'Unique . SM.ART . Nobility

take me wherever you go...

23_Top My.Way 2

in lightness, freedom... you nobly penetrate into your world

filled with light

freed

own. unique...

*

My.Way 2 Top - artistically hand-made, light and sensual, trimmed with pearls

It meets all the requirements: creative. comfortable. creates compositions in the EWS system, meaning 1 skirt = many occasions. Change the accessories and you can have it in different styles:

Event. Work. Street

The model is 166 cm tall and wears size 36

Personalization - tailor-made design:

Contact us by email: info@absolutdimension.com or by phone: 732 808 804', 'Unique . SM.ART . Nobility

take me wherever you go...

23_Top My.Way 2

w lekkości . swobodzie ... szlachetnie przenikasz do swojego świata

przepełniona światłem

uwolniona

własna . niepowtarzalna ...

*

Top My.Way 2 - artystycznie ręcznie wykonany, lekki i zmysłowy, obszyty perełkami

Realizuje wszystkie założenia: kreatywna . komfortowa . tworzy kompozycje w systemie E.W.S czyli 1 spódnica = wiele okazji Zmieniasz dodatki i masz ją w odsłonach stylizacji:

Event . Work . Street

Modelka ma 166 cm i rozmiar 36

Personalizacja - wykonanie projektu na miarę:

Skontaktuj się z nami przez e-mail: info@absolutdimension.com lub telefonicznie: 732 808 804', '{"34","36","38","40"}', false, false, 'Jedwab', 'Jedwab', 'Biały', 'Biały') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('15_sukienka-kanga-roo', '15_Sukienka Kanga.Roo', 360000, 'dress', 'melbourne', '/img/products/15_sukienka-kanga-roo/0.webp', '{"/img/products/15_sukienka-kanga-roo/0.webp","/img/products/15_sukienka-kanga-roo/1.webp","/img/products/15_sukienka-kanga-roo/2.webp","/img/products/15_sukienka-kanga-roo/3.webp"}', 'Unique . SM.ART . Nobility

15_Kanga.Roo Dress

makes your life easier...

A double-layer silk dress. A design from the "Paradajs" dress collection, dedicated to leisurely journeys to your dream destinations! Designed with a lightweight construction, it provides maximum comfort for your body, even in the hottest temperatures.

A dress in which you can feel absolutely yourself beyond any limits... (you don''t have to wear any underwear with it!)

Feminine. Light. Noble

Our unique technological method of silk processing, hand-finished finishes and innovative construction solutions give it an exceptional effect of lightness, comfort and ease of use.

This noble work realizes all our goals:', 'Unique . SM.ART . Nobility

15_Sukienka Kanga.Roo

makes your life easier ...

Sukienka z podwójnej warstwy jedwabiu . Projekt z grupy sukienek "Paradajsu" dedykowana swobodnym podróżom w Twoje wymarzone miejsca! Zaprojektowana tak by swoją lekkością dawała maksymalny komfort Twojemu ciału nawet w najwiekszych temperaturach .

Sukienka w której możesz czuć się absolutnie sobą poza wszelkie ograniczenia... (nie musisz nosić od nią żadnej bielizny!)

Kobieca . Lekka . Szlachetna

Nasz unikalny technologiczny sposób obróbki jedwabiu, ręczne wykończenia i nowatorskie rozwiązania konstrukcyjne dają wyjątkowy efekt lekkości, komfortu i swobody w jej użytkowaniu .

To szlachetne dzieło realizuje wszystkie nasze cele:

Kompozycja . Komfort . Kreatywność

naszego systemu twórczego WSE (Work . Street . Event )

czyli 1 projekt = wiele okazji - wystarczy że zmienisz dodatki a zmienisz charakter projektu - jej genialność to możność bezwarunkowej adaptacji..

zobacz różne stylizacje:

Personalizacja:

• Możesz zamówić ten projekt w innych kolorach

• Możesz zamówić ten projekt szyty na miarę

w tym celu prosimy skontaktuj się z nami e-mail: info@absolutdimension.com / tel. +48 732 808 804', '{"34","36","38","40"}', false, false, null, null, 'Czekolada', 'Czekolada') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('sukienka-hawaii', '37_Sukienka Hawaii', 190000, 'dress', 'paris', '/img/products/sukienka-hawaii/0.webp', '{"/img/products/sukienka-hawaii/0.webp","/img/products/sukienka-hawaii/1.webp","/img/products/sukienka-hawaii/2.webp","/img/products/sukienka-hawaii/3.webp"}', 'Unique . SM.ART . Nobility

Hawaii dress

The main assumption of the project is its compatibility and universality while maintaining a maximum sense of comfort.

Made of velour, it beautifully highlights the female silhouette. The body feels wonderful in it and freely harmonizes with movement, showing the essence of femininity... sensuality, charm and luxury.

Designed in accordance with our SM.ART Wardrobe concept:

- Compatibility - fits perfectly with all wardrobe items, creates an unlimited number of styles, just change the accessories

- Composition - balances the proportions of the silhouette, you can order specially designed wardrobe elements and accessories

- Comfort - very comfortable, light, you feel comfortable in it

•

Work . Event . Street

1 dress = many occasions

On the photo with Coat Shinrein

*

Personalization - tailor-made project:

Contact us by e-mail: info@absolutdimension.com or by phone: 530 88 66 99', 'Unique . SM.ART . Nobility

Sukienka Hawaii

Główne założenie projektu to jego kompatybilność i uniwersalność z zachowaniem maksymalnego poczucia komfortu.

Wykonana z weluru, pięknie podkreśla kobiecą sylwetkę. Ciało czuje się w niej cudownie i swobodnie współgra z ruchem ukazując istotę kobiecości... zmysłowość, wdzięk i luksus.

Zaprojektowana zgodnie z naszą koncepcją SM.ART Garderoby:

- Kompatybilność - idealnie pasuje do wszystkich elementów garderoby, tworzy nieograniczoną ilość stylizacji, wystarczy że zmieniasz dodatki

- Kompozycja - równoważy proporcje sylwetki, możesz zamówić specjalnie do niej zaprojektowane elementy garderoby i dodatków

- Komfort - bardzo wygodna, lekka, swobodnie się w niej czujesz

•

Work . Event . Street

1 sukienka = wiele okazji

Na zdjęciu w stylizacji z Topem Jour.y i Płaszcz Shinrein

*

Personalizacja - wykonanie projektu na miarę:

Skontaktuj się z nami przez e-mail: info@absolutdimension.com lub telefonicznie: +48 732 808 804', '{"34","36","38","40"}', true, false, 'Welur', 'Welur', 'Burgund', 'Burgund') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('spodnica-ver-sale', '24_Spódnica Ver.Sale', 160000, 'skirt', 'paris', '/img/products/spodnica-ver-sale/0.webp', '{"/img/products/spodnica-ver-sale/0.webp","/img/products/spodnica-ver-sale/1.webp","/img/products/spodnica-ver-sale/2.webp","/img/products/spodnica-ver-sale/3.webp"}', 'Unique . SM.ART . Nobility

take me wherever you go...

Japan skirt

in lightness. freedom... you nobly penetrate into your world

filled with light

freed

own . unique ...

*

A refined and balanced combination of form and line, exclusivity and utility...

Event, concert, going out to dinner... travel... walk on the beach, vacation... this set will be perfect everywhere! At the same time, when worn separately, it fulfills our main design idea: it inspires you to create unlimited styling possibilities!

Skirt with Japanese pleat, skirt tails overlapping one another, fastened with snaps

It is very light, and its aesthetically refined form can create countless stylings - changing shoes, changing a belt, cardigan, jacket or scarf... creates new faces!

Made of silk velvet, hand- finished', 'Unique . SM.ART . Nobility

take me wherever you go...

Spódnica Japan

w lekkości . swobodzie ... szlachetnie przenikasz do swojego świata

przepełniona światłem

uwolniona

własna . niepowtarzalna ...

*

Wyrafinowane i wyważone w formie i linii połączenie ekskluzywności z użytkowością...

Event, koncert, wyjście na kolację... podróże... spacer po plaży, urlop... wszędzie tam odnajdzie się ten zestaw wyśmienicie! Jednocześnie nosząc go rozdzielnie, wypełnia on naszą główną ideę projektową: inspiruje Cię do tworzenia nieograniczonych możliwości stylizacyjnych!

Spódnica z japońskim zakładem, poły spódnicy zachodzą jeden na drugi na siebie, zapinana na zatrzaski

Jest bardzo lekka, a jej wyrafinowana estetycznie forma może tworzyć niezliczoną liczbę stylizacji - zmiana butów, zmiana paska, kardigana, żakietu czy szala.. tworzy nowe jej oblicza!

Wykonana z weluru jedwabnego, wykończona ręcznie', '{"34","36","38","40"}', false, false, null, null, 'Burgund', 'Burgund') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('top-angel', '23_Top Angel', 80000, 'top', 'monte-carlo', '/img/products/top-angel/0.webp', '{"/img/products/top-angel/0.webp","/img/products/top-angel/1.webp","/img/products/top-angel/2.webp","/img/products/top-angel/3.webp"}', 'Unique . SM.ART . Nobility

take me wherever you go...

Top Angel

in lightness. freedom... you nobly penetrate into your world

filled with light

freed

own . unique ...

*

Top Angel - artistically hand-made, light and sensual', 'Unique . SM.ART . Nobility

take me wherever you go...

Top Angel

w lekkości . swobodzie ... szlachetnie przenikasz do swojego świata

przepełniona światłem

uwolniona

własna . niepowtarzalna ...

*

Top Angel - artystycznie ręcznie wykonany, lekki i zmysłowy', '{"34","36","38","40"}', true, false, '100% silk', '100% jedwab', null, null) on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('23_top-g22', '23_Top G22', 90000, 'top', 'monte-carlo', '/img/products/23_top-g22/0.webp', '{"/img/products/23_top-g22/0.webp","/img/products/23_top-g22/1.webp","/img/products/23_top-g22/2.webp"}', 'Unique . SM.ART . Nobility

take me wherever you go...

23_Top G22

Light and noble silk top. The perfect solution for hot days. It serves perfectly in everyday use, creating beautiful and comfortable compositions with sweaters, jackets, scarves and other wardrobe elements...

A refined and balanced combination of form and line, exclusivity and utility...', 'Unique . SM.ART . Nobility

take me wherever you go...

23_Top G22

Lekki i szlachetny top z jedwabiu. Idealne rozwiązanie na upalne dni . Służy wyśmienicie w codziennym użytkowaniu tworząc piękne i wygodne kompozycje ze swetrami, żakietami, szalami i pozostałymi elementami garderoby...

Wyrafinowane i wyważone w formie i linii połączenie ekskluzywności z użytkowością...', '{"34","36","38","40","42"}', false, false, '100% silk', '100% jedwab', null, null) on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('set-icann-sss', '18.Set ICann.SSS', 300000, 'set', 'monte-carlo', '/img/products/set-icann-sss/0.webp', '{"/img/products/set-icann-sss/0.webp","/img/products/set-icann-sss/1.webp","/img/products/set-icann-sss/2.webp","/img/products/set-icann-sss/3.webp"}', 'Set ICANN.SSS . Form . movement .

The ICANN.SSS Set is a signature composition of a top and skirt, where construction becomes an integral part of the design itself. Crafted from natural silk, it combines the softness of the fabric with an architectural approach to the silhouette.

The top, featuring a deep, softly draped neckline and an open back, emphasizes the lightness of the form. Adjustable ties allow the piece to be styled in different ways, giving the design a personal and individual character. The skirt is enriched with signature structural draping and brooch details, creating a dynamic line and a subtle interplay of proportions.

Its refined graphite hue highlights the nobility of silk and the timeless nature of the design. With every movement, the fabric reveals its natural fluidity, bringing freedom and elegance to the silhouette.

The ICANN.SSS Set was created for women who seek designs that are distinctive, expressive, and crafted with exceptional attention to detail.

A construction that moves with you .', 'Set ICANN.SSS Forma . ruch .

Set ICANN.SSS to autorska kompozycja topu i spódnicy, w której konstrukcja staje się częścią projektu. Wykonany z naturalnego jedwabiu, łączy miękkość tkaniny z architektonicznym podejściem do sylwetki.

Top z głębokim, swobodnie układającym się dekoltem i odkrytymi plecami podkreśla lekkość formy. Regulowane wiązania pozwalają modelować sposób noszenia, nadając projektowi indywidualny charakter. Spódnica została wzbogacona o autorskie drapowania i wykończenia broszkami, które tworzą dynamiczną linię oraz subtelną grę proporcji.

Stonowany odcień grafitu podkreśla szlachetność jedwabiu i ponadczasowy charakter projektu. Każdy ruch wydobywa naturalną płynność tkaniny, nadając sylwetce swobodę i elegancję.

Set ICANN.SSS powstał dla kobiet, które poszukują projektów nieoczywistych, wyrazistych i tworzonych z dbałością o detal.

Konstrukcja, która porusza się razem z Tobą .', '{"34","36","38","40"}', false, false, 'Jedwab', '100% jedwab', 'Grafit', 'Grafit') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('sukienka-nuee-monaco', '38.Sukienka NUèe Monaco', 600000, 'dress', 'monte-carlo', '/img/products/sukienka-nuee-monaco/0.webp', '{"/img/products/sukienka-nuee-monaco/0.webp","/img/products/sukienka-nuee-monaco/1.webp","/img/products/sukienka-nuee-monaco/2.webp","/img/products/sukienka-nuee-monaco/3.webp"}', 'Unique . SM.ART . Nobility

take me wherever you go...

Dress Cocktail Cloudy

when you want to feel with all your being..that omnipresent unfettered freedom within you... put it on!

Its delicate weave of light mohair thread falls freely on silk, caressing your body.. A dress from the Unique line.. the only one of its kind in the world!', 'Unique . SM.ART . Nobility

take me wherever you go...

Sukienka NUèe Monaco

kiedy chcesz poczuć całą sobą siebie..tę wszechobecną w Tobie wolność nieskrępowaną... załóż Ją!

Jej delikatny splot lekkiej nici moheru swobodnie opadający na jedwab muskającą Twoje ciało.. Suknia z lini Unique .. jedyna taka na świecie!', '{"34","36","38"}', false, false, '100% mohair, 100% silk', '100% moher, jedwab 100 %', 'Masłowy', 'Masłowy') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('kimono-dany', '30.Kimono Dan.y', 145000, 'blazer', 'melbourne', '/img/products/kimono-dany/0.webp', '{"/img/products/kimono-dany/0.webp","/img/products/kimono-dany/1.webp","/img/products/kimono-dany/2.webp","/img/products/kimono-dany/3.webp"}', 'Unique . SM.ART . Nobility

30.Kimono Dany

All-Season Know-How. Noble. Casual. Light. Kimono-type blouse in silk velvet. The perfect "cover-up" solution for everything you need!', 'Unique . SM.ART . Nobility

30.Kimono Dan.y

Całosezonowy Know-How . Szlachetna . Swobodna . Lekka . Bluzka typu Kimono z jedwabnego weluru . Idealne rozwiązanie typu "narzutka" na wszystko co potrzebujesz!', '{"34","36","38","40","42","44"}', false, false, 'silk velvet, 100% silk', 'welur jedwabny, jedwab 100%', 'Chocolate', 'Czekolada') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('torebka-shinrein', '13.Torebka Shinrein', 95000, 'bag', 'poza-murem', '/img/products/torebka-shinrein/0.webp', '{"/img/products/torebka-shinrein/0.webp","/img/products/torebka-shinrein/1.webp","/img/products/torebka-shinrein/2.webp","/img/products/torebka-shinrein/3.webp"}', 'Unique . SM.ART . Nobility

take me wherever you go...

The Shinrein bag is made of a texture of a caracul. It perfectly complements the Shinrein Coat and Seiko Jacket.', 'Unique . SM.ART . Nobility

take me wherever you go...

Torebka Shinrein wykonana jest z tkaniny o fakturze karakuł. Idealnie współgra z Płaszczem Shinrein i Żakietem Seiko', '{"One size"}', false, false, null, null, 'Czekolada', 'Czekolada') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('plaszcz-pluid', '36_Płaszcz Imper', 280000, 'coat', 'paris', '/img/products/plaszcz-pluid/0.webp', '{"/img/products/plaszcz-pluid/0.webp","/img/products/plaszcz-pluid/1.webp","/img/products/plaszcz-pluid/2.webp","/img/products/plaszcz-pluid/3.webp"}', 'Unique . SM.ART . Nobility

36_Coat Imper

Versatile and Brilliant. It protects you from the rain. It protects you from the wind. It is a multifunctional design. It has a detachable hood. You can wear it with an evening dress - and it will enhance the shine of the EVENT. It also plays perfectly with WORK and STREET stylings.

Conclusion: you have it for every occasion!

To get the complete Total Look, you can also buy a coherently designed bag and gloves.

Additional option : gloves and bag', 'Unique . SM.ART . Nobility

36_Płaszcz Imper

Wszechstronny i Genialny . Chroni cię przed deszczem . Chroni cię przed wiatrem . To projekt wielofunkcyjny . Może mieć odpinany kaptur . Możesz założyć go do sukni wieczorowej - a podbije blask EVENTu . Gra perfekcyjnie również ze stylizacjami WORK i STREET .

Wniosek: masz go na każdą okazję!

By uzyskać całkowity Total Look - możesz również dokupić do niego spójnie zaprojektowaną torbę i rękawiczki.

Opcja dodatkowa: rękawiczki i torebka', '{"34","36","38","40"}', false, false, 'Lateks', 'Lateks', 'Czerń', 'Czerń') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('zakiet-jour-y-absolut', '8.Żakiet Jour.y', 250000, 'blazer', 'say-shell', '/img/products/zakiet-jour-y-absolut/0.webp', '{"/img/products/zakiet-jour-y-absolut/0.webp","/img/products/zakiet-jour-y-absolut/1.webp","/img/products/zakiet-jour-y-absolut/2.webp","/img/products/zakiet-jour-y-absolut/3.webp"}', 'Unique . SM.ART . Nobility

8.Jour.y jacket

All-Season Know-How. Noble. Casual. Two-layered. Light. Silk velvet jacket. The perfect "cover-up" solution for everything you need!', 'Unique . SM.ART . Nobility

take me wherever you go...

8.Żakiet Jour.y

Całosezonowy Know-How . Szlachetny . Swobodny . Dwu-warstwowy . Lekki . Żakiet z jedwabnego weluru . Idealne rozwiązanie typu "narzutka" na wszystko co potrzebujesz!', '{"36","38","40"}', false, false, 'silk velvet, 100% silk', 'welur jedwabny, jedwab 100%', 'White', 'Biały') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('set-la-maturite', '24.Spódnica Japan', 170000, 'skirt', 'monte-carlo', '/img/products/set-la-maturite/0.webp', '{"/img/products/set-la-maturite/0.webp","/img/products/set-la-maturite/1.webp","/img/products/set-la-maturite/2.webp","/img/products/set-la-maturite/3.webp"}', 'Unique . SM.ART . Nobility

take me wherever you go...

Japan Skirt

in lightness. freedom... you nobly penetrate into your world

filled with light

freed

own . unique ...

*

A refined and balanced combination of form and line, exclusivity and utility...

Event, concert, going out to dinner... travel... walk on the beach, vacation... this set will be perfect everywhere! At the same time, when worn separately, it fulfills our main design idea: it inspires you to create unlimited styling possibilities!

Skirt with Japanese pleat, skirt tails overlapping one another, fastened with snaps

It is very light, and its aesthetically refined form can create countless stylings - changing shoes, changing a belt, cardigan, jacket or scarf... creates new faces!

Made from silk, hand finished

Personalization - custom design:Contact us by e-mail: info@absolutdimension.com or by phone: +48 732 808 804', 'Unique . SM.ART . Nobility

take me wherever you go...

Spódnica Japan

w lekkości . swobodzie ... szlachetnie przenikasz do swojego świata

przepełniona światłem

uwolniona

własna . niepowtarzalna ...

*

Wyrafinowane i wyważone w formie i linii połączenie ekskluzywności z użytkowością...

Event, koncert, wyjście na kolację... podróże... spacer po plaży, urlop... wszędzie tam odnajdzie się ten zestaw wyśmienicie! Jednocześnie nosząc go rozdzielnie, wypełnia on naszą główną ideę projektową: inspiruje Cię do tworzenia nieograniczonych możliwości stylizacyjnych!

Spódnica z japońskim zakładem, poły spódnicy zachodzą jeden na drugi na siebie, zapinana na zatrzaski

Jest bardzo lekka, a jej wyrafinowana estetycznie forma może tworzyć niezliczoną liczbę stylizacji - zmiana butów, zmiana paska, kardigana, żakietu czy szala.. tworzy nowe jej oblicza!

Wykonana z jedwabiu, wykończona ręcznie

Personalizacja - wykonanie projektu na miarę:

Skontaktuj się z nami przez e-mail: info@absolutdimension.com lub telefonicznie: +48 732 808 804', '{"34","36","38","40","42"}', false, false, null, null, 'White', 'Czarny') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('sukienka-megami-dolce', '7.Sukienka Megami', 260000, 'dress', 'say-shell', '/img/products/sukienka-megami-dolce/0.webp', '{"/img/products/sukienka-megami-dolce/0.webp","/img/products/sukienka-megami-dolce/1.webp","/img/products/sukienka-megami-dolce/2.webp","/img/products/sukienka-megami-dolce/3.webp"}', 'Dress Megami . Like light upon the surface of water .

Elusive . Natural . Unforgettable .

Crafted from silk satin, Megami celebrates the beauty of movement. Its form has been refined of everything unnecessary, leaving only proportion, light, and the nobility of the fabric.

It is a design inspired by a woman who has nothing to prove. Her strength lies in serenity, and her elegance in authenticity.

Megami is a harmony of nature combined with the Japanese meaning of the word “Megami” — goddess. A perfection that flows from authenticity, inner calm, and the conscious value of oneself.', 'Sukienka Megami . Jak światło na powierzchni wody .

Nieuchwytna. Naturalna. Niezapomniana.

Wykonana z jedwabnej satyny Megami celebruje piękno ruchu. Jej forma została oczyszczona ze wszystkiego, co zbędne, pozostawiając jedynie proporcje, światło i szlachetność materiału.

To projekt inspirowany kobietą, która nie potrzebuje niczego udowadniać. Jej siła tkwi w spokoju, a elegancja w autentyczności.

Megami to harmonia natury połączona z japońskim znaczeniem słowa „Megami” — bogini. Doskonałość płynącą z autentyczności, spokoju i świadomej wartości siebie.', '{"34","36","38","40"}', false, false, null, null, 'Butter', 'Masłowy') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('sukienka-nice', '38.Sukienka Nice', 280000, 'dress', 'bali', '/img/products/sukienka-nice/0.webp', '{"/img/products/sukienka-nice/0.webp","/img/products/sukienka-nice/1.webp"}', 'Nice Dress

Nothing is more luxurious than confidence expressed through conviction .

Nice was created for women who understand that truth is elegance . When you are your authentic self . nothing is required of you . You need no defense . Your presence speaks for itself .

Noble silk softly flows over the body, creating a silhouette filled with movement and light. The open back brings subtle sensuality to the design, while the minimalist form leaves space for what matters most — the presence of the woman who wears it.', 'Sukienka Nice

Nic nie jest bardziej luksusowe niż pewność siebie wyrażona przekonaniem .

Nice powstała dla kobiet, które rozumieją, że prawda jest elegancją . Kiedy jesteś prawdziwą sobą . Nic nie musisz . Bronisz się sama . Twoja forma mówi za Ciebie .

Szlachetny jedwab miękko opływa ciało, tworząc sylwetkę pełną ruchu i światła. Odkryte plecy nadają kreacji subtelną zmysłowość, podczas gdy minimalistyczna forma pozostawia przestrzeń dla tego, co najważniejsze — obecności kobiety, która ją nosi.', '{"36","38","40"}', false, false, null, null, 'White', 'Biała') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('top-nobility-1', '30.Bluzka AIX''A', 92000, 'top', 'cannes', '/img/products/top-nobility-1/0.webp', '{"/img/products/top-nobility-1/0.webp","/img/products/top-nobility-1/1.webp","/img/products/top-nobility-1/2.webp","/img/products/top-nobility-1/3.webp"}', 'Unique . SM.ART . Nobility

AIX''A BlouseWhen lightness reaches the maximum possible extent, fulfilling the main need: to cover the body and at the same time maintain the feeling of free nudity... when nothing pinches, touches or rubs - this is AIX''A! Made of the lightest silk with sensually revealing shoulders and jewelry in its structure! Pearls that are like dots at the end of your sentence...Total Look:(composition of the entire composition in photos)1. Absolut Dress2. AIX''A Blouse3. Shawl-Beads Unique4. Unique HandbagPersonalization - tailor-made design:Contact us by e-mail: info@absolutdimension.com or by phone: +48 530 88 66 99', 'Unique . SM.ART . Nobility

Bluzka AIX''A

Kiedy lekkość osiąga maksymalny możliwy zakres realizując główną potrzebę: okryć ciało i jednocześnie utrzymać uczucie swobodnej nagości.. kiedy nic nie uwiera, dotyka, czy ociera - to jest to właśnie AIX''A! Wykonana z najlżejszego jedwabiu ze zmysłowo odsłaniającymi ramionami i posiadającą w swej konstrukcji biżuterię! Perły które są jak kropki na końcu Twojego zdania...

Total Look:

(skład całej kompozycji na zdjęciach)

1. Sukienka Absolut

2. Bluzka AIX''A

3. Szal-Korale Unique

4. Torebka Unique

Personalizacja - wykonanie projektu na miarę:

Skontaktuj się z nami przez e-mail: info@absolutdimension.com lub telefonicznie: +48 732 808 804', '{"36","38","40","42"}', false, false, null, null, 'Black', 'Czarny') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('kardigan-absolut-2', '4.Kardigan *44*', 150000, 'cardigan', 'cannes', '/img/products/kardigan-absolut-2/0.webp', '{"/img/products/kardigan-absolut-2/0.webp","/img/products/kardigan-absolut-2/1.webp"}', 'Unique . SM.ART . Nobility

Cardigan *44*

An artistic, handmade cardigan that sensually and lightly covers your body. The perfect solution to make you feel feminine and at ease!

Total Look:

(composition of the entire composition in photos)

1. Bilionaire Absolut dress

2. Cardigan 44

3. Handbag Unique

4. Belt', 'Unique . SM.ART . Nobility

Kardigan *44*

Artystyczny, ręcznie tworzony kardigan który zmysłowo i lekko okrywa Twoje ciało. Idealne rozwiazanie byś czuła się kobieco i swobodnie!

Total Look:

(skład całej kompozycji na zdjęciach)

•

Sukienka Bilionaire Absolut

• Kardigan 44

• Torebka Unique

• Pasek', '{"36","38","40"}', false, false, '100% PE', '100% PE', 'White', 'Biały') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('setturkscacios', '18.Set Turks & Cacios', 280000, 'set', 'say-shell', '/img/products/setturkscacios/0.webp', '{"/img/products/setturkscacios/0.webp","/img/products/setturkscacios/1.webp","/img/products/setturkscacios/2.webp"}', 'Turks & Caicos Set . Love . that needs no declaration

The Turks & Caicos Set is a composition created from the softness of light . movement

Two independent pieces form one story:

. silk skirt. silk top

Each layer can exist on its own

Together, they create a form . that embraces the body with lightness . subtle presence

Turks & Caicos does not seek attention through noise

It draws attention through serenity

It is a form for women . who do not need to emphasize their strength . because they already know it

Soft lines . delicate transitions of fabric . create a silhouette that remains in motion . changing with the light . a gesture . the way it is worn

This is not a set defined by rules

It is a space for personal interpretation

It can be subtle and effortless

It can become an evening statement

It can be a memory of summer

It can be a personal ritual of beauty

At ABSOLUT DIMENSION clothing does not dominate the woman

It allows her to exist

Turks & Caicos Set was created with precisely this intention', 'Set Turks & Cacios . Miłość . która nie potrzebuje deklaracji

Set Turks & Cacios to kompozycja zbudowana z miękkości światła . ruchu

Dwa niezależne elementy tworzą jedną opowieść:

. jedwabna spódnica. jedwabny top

Każda warstwa może istnieć samodzielnie Razem tworzą formę . która otula ciało lekkością . subtelną obecnością

Turks & Cacios nie przyciąga uwagi krzykiem

Przyciąga spokojem

To forma dla kobiet . które nie potrzebują podkreślać swojej siły . ponieważ ją znają

Miękkie linie . delikatne przejścia materiałów . tworzą sylwetkę pozostającą w ruchu . zmieniając się wraz ze światłem . gestem . sposobem noszenia

To nie jest zestaw oparty na zasadach

To przestrzeń do własnej interpretacji

Może być subtelny i codzienny

Może stać się formą wieczorową

Może być wspomnieniem lata

Może być osobistym rytuałem piękna

W ABSOLUT DIMENSION ubranie nie dominuje kobiety

Pozwola jej istnieć

Set Turks & Cacios został stworzony właśnie z tej intencji', '{"34","36","38","40"}', false, false, null, null, 'Różowy', 'Różowy') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('suknia-henriqua-amour', '15.Suknia Henriqua', 800000, 'dress', 'say-shell', '/img/products/suknia-henriqua-amour/0.webp', '{"/img/products/suknia-henriqua-amour/0.webp","/img/products/suknia-henriqua-amour/1.webp","/img/products/suknia-henriqua-amour/2.webp","/img/products/suknia-henriqua-amour/3.webp"}', 'HENRIQUA GOWN . A sculpture woven from air . light . nature .

The Henriqua Gown is a unique creation that unites fashion, art, and craftsmanship. Its organic, hand-crafted structure of silk and mohair brings lightness and individuality to the silhouette, while the open back highlights feminine subtlety.

A distinctive element of the design is the use of natural minerals — rose quartz, from which the gown’s structure is suspended.

Symbolizing harmony, inner strength, and delicacy, they are not merely a detail, but an integral part of the story behind this creation.

Its dusty rose hue, artistic texture, and freely moving form create a design for women who find beauty in authenticity and consciously choose the exceptional.

The Henriqua Gown is not simply a dress . it is the experience of wearing art .', 'SUKNIA HENRIQUA . Rzeźba utkana z powietrza . światła . natury .

Suknia Henriqua to wyjątkowa kreacja łącząca modę, sztukę i rzemiosło. Jej organiczna, ręcznie tworzona struktura z jedwabiu i moheru nadaje sylwetce lekkość i niepowtarzalny charakter, podczas gdy odkryte plecy podkreślają kobiecą subtelność.

Szczególnym elementem projektu są naturalne minerały — różowy kwarc, na których zawieszona została konstrukcja sukienki.

Symbolizujące harmonię, wewnętrzną siłę i delikatność, stanowią nie tylko detal, lecz integralną część historii tej kreacji.

Pudrowy odcień różu, artystyczna faktura oraz swobodnie poruszająca się forma tworzą projekt dla kobiet, które odnajdują piękno w autentyczności i świadomie wybierają rzeczy wyjątkowe.

Suknia Henriqua to nie tylko sukienka to doświadczenie noszenia sztuki .', '{"38"}', false, false, '100% jedwab, 100% moher, różowy kwarc', '100% jedwab, 100% moher, różowy kwarc', null, null) on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('bluzka-work-premiere', '40_Bluzka Work Premiere', 105500, 'blouse', 'melbourne', '/img/products/bluzka-work-premiere/0.webp', '{"/img/products/bluzka-work-premiere/0.webp","/img/products/bluzka-work-premiere/1.webp","/img/products/bluzka-work-premiere/2.webp","/img/products/bluzka-work-premiere/3.webp"}', 'Work Premiere Blouse - thanks to hand-weaving from 100% cotton threads, it is soft, light and casual.

Delicate and pleasant to the touch, does not bite or pinch, fits perfectly to the body.

Your dream Work blouse - for special tasks when you need to concentrate on the goal and nothing can distract you! But also when you just want to be with yourself...

Handmade from cotton.', 'Bluzka Work Premiere - dzięki ręcznemu tkaniu z nici 100% bawełny jest miękka . lekka i swobodna.

Delikatna i przyjemna w dotyku, nie gryzie, nie uwiera, idealnie układa się do ciała.

Wymarzona bluzka Work - do zadań specjalnych kiedy potrzebujesz koncentracji na celu i nic nie może Cię rozpraszać! Ale też wtedy kiedy pragniesz po prostu być ze sobą…

Wykonana ręcznie z bawełny.', '{"36","38","40"}', false, false, 'Bawełna', 'Bawełna', 'Biały', 'Biały') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('top-unique-kogo', '23.Top Unique Kogo', 110000, 'top', 'paris', '/img/products/top-unique-kogo/0.webp', '{"/img/products/top-unique-kogo/0.webp","/img/products/top-unique-kogo/1.webp","/img/products/top-unique-kogo/2.webp","/img/products/top-unique-kogo/3.webp"}', 'Unique . SM.ART . Nobility

Top Unique Kogo

Unique in its form... noble silk satin with an innovative and artistic expression! Its wonderful values are sensuality. refined nonchalance that allows you to feel absolutely at ease!Total Look:(composition of the entire composition in photos)1. Monaco Dress2. Top Unique Kogo3. NU ShawlComposition: 100% silk satinPersonalization - tailor-made design:Contact us by e-mail: info@absolutdimension.com or by phone: +48 732 808 804', 'Unique . SM.ART . Nobility

Top Unique Kogo

Unikalny w swojej formie.. szlachetna jedwabna satyna w nowatorskim i artystycznym wyrazie! Jego cudowne wartości to zmysłowość . wyrafinowana nonszalancja pozwalająca czuć się absolutnie swobodnie!

Total Look:

(skład całej kompozycji na zdjęciach)

• Sukienka Monako

• Top Unique Kogo

• Szal NU', '{"36","38","40"}', false, false, '100% satyna jedwabna', '100% satyna jedwabna', 'Burgundy', 'Burgund') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('spodnica-da-nuta', '24_Spódnica Da.Nuta', 170000, 'skirt', 'cannes', '/img/products/spodnica-da-nuta/0.webp', '{"/img/products/spodnica-da-nuta/0.webp","/img/products/spodnica-da-nuta/1.webp","/img/products/spodnica-da-nuta/2.webp","/img/products/spodnica-da-nuta/3.webp"}', 'Unique . SM.ART . Nobility

Skirt Da.Nuta Modern . Noble . Royalmade of two layers of silk harmonizing together in lightness - a slit at the front... the ribbed texture of silk shantung... they become airy in their duet...Total Look:(composition of the entire composition in photos)1. Top Nobility2. Jour.y Jacket3. Handbag Unique4. Blouse Cote d''Azur Composition: 100% silk', 'Unique . SM.ART . Nobility

Spódnica Da.Nuta

Nowoczesna . Szlachetna . Królewska

z dwóch warstw jedwabiu współgrających ze sobą w lekkości - rozporek z przodu... prążkowana faktura jedwabnego szantungu... nabierają w swym duecie powiewnego uniesienia..

Total Look:

(skład całej kompozycji na zdjęciach)

1. Top Nobility

2. Żakiet Jour.y

3. Torebka Unique

4. Bluzka Cote d''Azur', '{"36","38","40"}', false, false, '100% jedwab', '100% jedwab', null, null) on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('spodnica-ballets-maturite', '24_Spódnica Ballet''s', 180000, 'skirt', 'cannes', '/img/products/spodnica-ballets-maturite/0.webp', '{"/img/products/spodnica-ballets-maturite/0.webp","/img/products/spodnica-ballets-maturite/1.webp","/img/products/spodnica-ballets-maturite/2.webp","/img/products/spodnica-ballets-maturite/3.webp"}', 'Unique . SM.ART . Nobility

Skirt Ballet''s

It''s the lightest skirt in the world!

The skirt moves beautifully to the rhythm of your body... giving lightness and great freedom to your silhouette! Perfect for any occasion, just change your shoes and accessories - and you will be fulfilled from an event to a walk!

Made of two layers of silk.

Total Look:

(composition of the entire composition in the photos)

1. - Pulli Arte Maturite

2. Skirt Ballet''s

3. Handbag Unique

4. Top G22', 'Unique . SM.ART . Nobility

Spódnica Ballets

To najlżejsza spódnica świata!

Przepięknie poruszająca się w rytm Twojego ciała.. nadając Tobie lekkości i ogromnej swobody! Idealna na wszelkie okazje, wystarczy ze zmienisz buty i dodatki - a spełniać się będziesz od eventu po spacer!

Wykonana z podwójnej warstwy jedwabiu.

Total Look:

(skład całej kompozycji na zdjęciach)

1. Pulli Arte Maturite

2. Spódnica Ballet''s

3. Torebka Unique

4. Żakiet Seiko

5. Bluzka Premiere

6. Top G22', '{"36","38","40","42"}', false, false, '100% Silk', '100% Jedwab', 'Black', 'Czerń') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('pulli-arte-maturite', '2_Pulli Arte Maturite', 130000, 'cardigan', 'paris', '/img/products/pulli-arte-maturite/0.webp', '{"/img/products/pulli-arte-maturite/0.webp","/img/products/pulli-arte-maturite/1.webp","/img/products/pulli-arte-maturite/2.webp"}', 'Unique . SM.ART . Nobility

Pulli Arte

An artistic, hand-made pullover that covers your body sensually and lightly. The perfect solution to make you feel feminine and at ease!

Total Look:

(composition of the entire composition in photos)

1. Pulli Arte

2. Skirt Ballet''s', 'Unique . SM.ART . Nobility

Pulli Arte

Artystyczny, ręcznie tworzony pullower który zmysłowo i lekko okrywa Twoje ciało. Idealne rozwiazanie byś czuła się kobieco i swobodnie!

Total Look:

(skład całej kompozycji na zdjęciach)

1. Pulli Arte

2. Spódnica Ballet''s', '{"36","38","40"}', false, false, 'Cotton 100%', 'Bawełna 100%', 'Black', 'Czarny') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('sukienka', '38.Sukienka Slawa.X', 350000, 'dress', 'sukienki-cocktail', '/img/products/sukienka/0.webp', '{"/img/products/sukienka/0.webp","/img/products/sukienka/1.webp","/img/products/sukienka/2.webp","/img/products/sukienka/3.webp"}', 'Unique . SM.ART . Nobility

take me wherever you go...

Dress Sława.X

Lightness . Sensuality . Freedom .

Perfect for hot days, you can endure any summer temperature in it! This is due to the properties of silk, which allows the skin to breathe freely, and the composition of the cut, which waves in the wind and cools you down.

Total Look:

(composition of the entire composition in photos)

1. Dress Sława.X

2. Ana Amour

3. Handbag Unique', 'Unique . SM.ART . Nobility

take me wherever you go...

Sukienka Sława.X

Lekkość . Zmysłowość . Swoboda .

Idealna na upalne dni, zniesiesz w niej każdą letnią temperaturę! To zasługa właściwości jedwabiu, który pozwala skórze swobodnie oddychać i kompozycji kroju, który falując na wietrze - chłodzi Cię.

Total Look:

(skład całej kompozycji na zdjęciach)

• Sukienka Sława.X

• Ana Amour

• Torebka Unique', '{"36","38","40"}', false, false, '100% silk', '100% jedwab', 'Pink-Blue', 'Różowo-Niebieski') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('suknia-dor-52', '28.Suknia D''OR 52', 370000, 'dress', 'sukienki-event', '/img/products/suknia-dor-52/0.webp', '{"/img/products/suknia-dor-52/0.webp","/img/products/suknia-dor-52/1.webp","/img/products/suknia-dor-52/2.webp","/img/products/suknia-dor-52/3.webp"}', 'Unique . SM.ART . Nobility

D''OR 52 Dress

Noble . Artistic . Luxurious

Dress-Jewelry. The quintessence of composition - coherence, harmony and balance, combining utility and beauty.Made of noble silk satin, very light, harmonizes freely with the movement of the body, the cut slightly emphasizes the figure, showing the essence of the beauty of femininity... sensuality and grace. Suspended on straps made of Swarovski beads.', 'Unique . SM.ART . Nobility

Suknia D''OR 52

Szlachetna . Artystyczna . Luksusowa

Suknia-Biżuteria . Kwintesencja kompozycji - spójność, harmonia i równowaga połączenia użytkowości i piękna.

Wykonana ze szlachetnej satyny jedwabnej, bardzo lekka, swobodnie współgra z ruchem ciała, krój podkreśla lekko sylwetkę ukazując istotę piękna kobiecości... zmysłowość i wdzięku. Zawieszona na ramiączkach z korali Swarovskiego.', '{"34","36","38","40","42"}', false, false, '100% silk satinPersonalization - tailor-made design:Contact us by e-mail: info@absolutdimension.com or by phone: +48 732 808 804', '100% satyna jedwabna', 'Gold', 'Złoty') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('36_plaszcz-shinrein', '36.Płaszcz Shinrein', 440000, 'coat', 'lou-vre', '/img/products/36_plaszcz-shinrein/0.webp', '{"/img/products/36_plaszcz-shinrein/0.webp","/img/products/36_plaszcz-shinrein/1.webp","/img/products/36_plaszcz-shinrein/2.webp","/img/products/36_plaszcz-shinrein/3.webp"}', 'Unique . SM.ART . Nobility

36.Coat Shinrein

A beautiful and very unique coat, giving you a wonderful feeling of uniqueness and sophistication that you can enjoy all day long... perfect for great evening outings, everyday urban activities.

The refined quintessence of modern casual dignity. It gently harmonizes with the body, emphasizing sensuality, charm and luxury.Composition: 100% PE fur fabricAdditional option: bag and gloves', 'Unique . SM.ART . Nobility

36.Płaszcz Shinrein

To całosezonowy Know-How . Piękny i wyjątkowy płaszcz ze szlachetnej włoskiej tkaniny futrzanej o fakturze karakułu z subtelnym połyskiem . idealny na wielkie wieczorowe wyjścia i miejskie codzienne aktywności... Podszyty żakardową tłoczoną w ornamentne wzory podszewką z połyskiem .

Wyrafinowana kwintesencja nowoczesnej swobodnej dostojności . Lekko współgra z ciałem, podkreślając zmysłowość, wdzięk i luksus.', '{"36","38","40","42"}', false, false, 'Tkanina futrzana PE 100%', 'Tkanina futrzana PE 100%', 'Burgundy', 'Bordo') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('bluzka-montecarlo', '39.Bluzka Monte Carlo', 150000, 'blouse', 'monte-carlo', '/img/products/bluzka-montecarlo/0.webp', '{"/img/products/bluzka-montecarlo/0.webp","/img/products/bluzka-montecarlo/1.webp","/img/products/bluzka-montecarlo/2.webp","/img/products/bluzka-montecarlo/3.webp"}', 'Unique . SM.ART . Nobility

Monte Carlo BlouseDinner . Meeting . Event . Office . Party... The Monte Carlo blouse will always and everywhere bring you to the right level!

Feminine . Light . Nobly

Made of silk satin, sensually placed around the neck, beautifully covering the bosom. It looks great tucked into skirts or trousers as well as worn on top; tied with a belt, it creates a kind of peplum covering the belly.Total Look:(composition of the entire composition in photos)1. Monte Carlo Blouse2. Furansu Skirt3. Handbag Unique

4. Pants Doru

5. Coat Shinrein', 'Unique . SM.ART . Nobility

Bluzka Monte Carlo

Kolacja . Spotkanie . Event . Office . Party... Bluzka Monte Carlo zawsze i wszędzie wniesie Cię na właściwy poziom!

Kobieco . Lekko . Szlachetnie

Wykonana z jedwabnej satyny zmysłowo ułożona wokół szyi, pięknie osłania piersi. Świetne wygląda wpuszczona w spódnice czy spodnie jak również na wierzch, przewiązana paskiem tworzy rodzaj baskinki osłaniającej brzuch.

Pełna kompozycja Total Look składa się z:

• Bluzka z satyny jedwabnej

• Pasek z satyny jedwabnej', '{"36","38","40","42"}', false, false, 'Satyna Jedwabna', '100% jedwab', 'Chocolate', 'Czekolada') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('spodnica-furansu-maturite', '26.Spódnica Furansu', 60000, 'skirt', 'cannes', '/img/products/spodnica-furansu-maturite/0.webp', '{"/img/products/spodnica-furansu-maturite/0.webp","/img/products/spodnica-furansu-maturite/1.webp","/img/products/spodnica-furansu-maturite/2.webp","/img/products/spodnica-furansu-maturite/3.webp"}', 'Unique . SM.ART . Nobility

26.Furansu Skirt

Perfectly feminine and comfortable skirt made of perfectly pleasant to the touch fleshy velvet. Beautifully fitting to the body, casual and brilliant! Creates perfect compositions with all the elements in your wardrobe. Wonderful Comfort and Unlimited Creativity!

*', 'Unique . SM.ART . Nobility

26.Spódnica Furansu

Idealnie kobieca i wygodna spódnica z doskonale przyjemnego w dotyku mięsistego weluru . Pięknie układająca się do ciała, swobodna i genialna! Tworzy perfekcyjne kompozycje ze wszystkimi elementami w garderobie . Cudowny Komfort i nieograniczona Kreatywność!', '{"36","38","40","42"}', false, false, 'Italian velvet, 100% PE', 'włoski welur, 100% PE', 'Burgundy', 'Bordowy') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('43-spodnie-doru', '43.Spodnie Doru', 150000, 'pants', 'monaco', '/img/products/43-spodnie-doru/0.webp', '{"/img/products/43-spodnie-doru/0.webp","/img/products/43-spodnie-doru/1.webp","/img/products/43-spodnie-doru/2.webp","/img/products/43-spodnie-doru/3.webp"}', 'Unique . SM.ART . Nobility

Pants Doru

The main assumption of the project is its compatibility and universality while maintaining a maximum sense of comfort.

Made of silk velvet, they beautifully emphasize the female figure. The body feels wonderful in them and harmonizes freely with movement, revealing the essence of femininity... sensuality, grace and class.

Finished by hand, maintaining the elasticity of the fabric that works beautifully with the body.

Designed in accordance with our concept SM.ART Wardrobe :

- Compatibility - they perfectly match all wardrobe items, create an unlimited number of styles, just change the accessories

- Composition - balances the proportions of the figure, you can order specially designed clothing and accessories

- Comfort - very comfortable, light, you feel comfortable in them

•

Work . Event . Street

1 pair of pants = many occasions

*', 'Unique . SM.ART . Nobility

Spodnie Doru

Główne założenie projektu to jego kompatybilność i uniwersalność z zachowaniem maksymalnego poczucia komfortu.

Wykonane z jedwabnego weluru, pięknie podkreślają kobiecą sylwetkę. Ciało czuje się w nich cudownie i swobodnie współgra z ruchem ukazując istotę kobiecości... zmysłowość, wdzięk i klasę.

Wykończone ręcznie z zachowaniem pięknie pracującej z ciałem sprężystości tkaniny.

Zaprojektowane zgodnie z naszą koncepcją SM.ART Garderoby:

- Kompatybilność - idealnie pasują do wszystkich elementów garderoby, tworzą nieograniczoną ilość stylizacji, wystarczy że zmieniasz dodatki

- Kompozycja - równoważy proporcje sylwetki, możesz zamówić specjalnie do nich zaprojektowane elementy garderoby i dodatków

- Komfort - bardzo wygodne, lekkie, swobodnie się w nich czujesz

•

Work . Event . Street

1 spodnie = wiele okazji

*', '{"34","36","38","40","42"}', false, false, 'silk velvet 100%', 'welur jedwabny 100%', 'Chocolate', 'Czekoladowy') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('suknia-event-mantoine', '28.Set M''Antoine', 420000, 'dress', 'st-tropez', '/img/products/suknia-event-mantoine/0.webp', '{"/img/products/suknia-event-mantoine/0.webp","/img/products/suknia-event-mantoine/1.webp","/img/products/suknia-event-mantoine/2.webp","/img/products/suknia-event-mantoine/3.webp"}', 'Unique . SM.ART . Nobility

28_Set M''Antoine

Noble . Artistic . Luxurious

Dress-Jewelry. The quintessence of composition - coherence, harmony and balance, combining utility and beauty.Made of noble silk satin, very light, harmonizes freely with the movement of the body, the cut slightly emphasizes the silhouette, showing the essence of the beauty of femininity... sensuality and grace

Crafted from one of the most luxurious materials in the world 100% pure satin silk a fabric that breathes and provides exquisite comfort to the body. Each piece is individually made with full respect for the creative process, resulting in a truly unique and unrepeatable gown. Jewelry is integrated as part of the gown’s construction.

The set includes: Gown + Bracelet + Earrings (made with Swarovski crystals)

The gown is available in a wide range of colors (contact us for individual options)

Accessories that complete the entire composition are also available for purchase:

Event Total Look:

1. 28_Gown M’Antoine 2. 8_Jacket M’Antoine3. 6_Bag M’Antoine 4. 31_Shawl NU 5. 12_Nobility Jewellery Set', 'Unique . SM.ART . Nobility

28.Set M''Antoine

Kreatywnie . Unikalnie . Szlachetnie .

Suknia-Biżuteria . Kwintesencja kompozycji - spójność, harmonia i równowaga połączenia użytkowości i piękna.

Bardzo lekka, swobodnie współgra z ruchem ciała, krój lekko podkreśla sylwetkę ukazując istotę piękna kobiecości... zmysłowość i wdzięku.

Wykonana z jednego z najbardziej luksusowych materiałów świata - 100% czystego satynowego jedwabiu – tkaniny, która oddycha i daje cudowny komfort dla ciała. Każdy egzemplarz szyty jest indywidualnie z zachowaniem kreatywnego twórczego procesu którego efektem jest wyjątkowy i niepowtarzalny egzemplarz sukni. Częścią konstrukcji Sukni jest biżuteria.

W skład zestawu wchodzi: Suknia + Bransoletka + Kolczyki (wykonane z kryształków Swarovski)

Suknia dostępna jest w szerokiej gamie kolorów (zapytaj nas indywidualnie)

Dodatki dopełniające całą kompozycje dostępne również w sprzedaży:

Event Total Look:

• 28_Suknia M''Antoine

• 8_Żakiet M''Antoine

• 6_Torebka M''Antoine

• 31_Szal NU

• 12_Biżuteria Set Nobility', '{"34","36","38","40"}', false, false, '100% silk satin', '100% satyna jedwabna', 'Golden Beige', 'Złoty beż') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('sukienka-coctail-absolut', '38.Suknia Paris Absolut', 880000, 'dress', 'cannes', '/img/products/sukienka-coctail-absolut/0.webp', '{"/img/products/sukienka-coctail-absolut/0.webp","/img/products/sukienka-coctail-absolut/1.webp","/img/products/sukienka-coctail-absolut/2.webp","/img/products/sukienka-coctail-absolut/3.webp"}', 'Unique . SM.ART . Nobility

Gown Paris

Noble . Artistic . Luxurious

Dress-Jewelry. The quintessence of composition - coherence, harmony and balance, combining utility and beauty.Made of noble silk, very light, harmonizes freely with the movement of the body, the cut slightly emphasizes the figure, showing the essence of the beauty of femininity... sensuality and grace.The supporting part of the dress is a necklace and a belt made of pearls, with a bag made of fur, finished with silk satin inside, hung on pearls and a bracelet.

Additionally, the set can be made with:•⁠ ⁠bracelet•⁠ ⁠⁠bag made of fur …•⁠ ⁠⁠stole or shawlNatural pearls can be exchanged for other gemstones or minerals

Total Look:

(composition of the entire composition in photos)

1. Gown Paris

2. Handbag Unique

3. Bracelet Nobility

4. Earrings Nobility

5. Stole', 'Unique . SM.ART . Nobility

Suknia Paris

Szlachetna . Artystyczna . Luksusowa

Suknia-Biżuteria . Kwintesencja kompozycji - spójność . harmonia .

Wykonana ze szlachetnego jedwabiu, bardzo lekka, swobodnie współgra z ruchem ciała, krój podkreśla lekko sylwetkę ukazując istotę piękna kobiecości . zmysłowość . wdzięku .

Forma Czystego Piękna

Harmonia jedwabiu i naturalnych pereł

*

Pełna kompozycja Total Look składa się z:

• Suknia zawieszona na naszyjniku z naturalnych pereł

• Pasek z naturalnych pereł

• Kolczyki z naturalnych pereł i srebra

• Bransoletka z naturalnych pereł

• Torebka z jedwabiu i futra zawieszona na sznurze naturalnych pereł * w opcji dodatkowego zamówienia:

•

Etola lub futro na warstwie naturalnego jedwabiu*', '{"36","38","40"}', false, false, '100% silk', '100% jedwab . naturalne perły hodowlane', 'White', 'Biały') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('paradajsu-absolut', '15.Sukienka Paradajsu', 260000, 'dress', 'monte-carlo', '/img/products/paradajsu-absolut/0.webp', '{"/img/products/paradajsu-absolut/0.webp","/img/products/paradajsu-absolut/1.webp","/img/products/paradajsu-absolut/2.webp","/img/products/paradajsu-absolut/3.webp"}', 'PARADAJSU . This is where you begin .

Paradajsu was born from the need to create a form . that does not impose itself on the body . that moves together with it

It is a dress with a soft . fluid silhouette . built from layers of light . movement . breath

It embraces the figure while leaving space for naturalness . lightness . your own rhythm

Its form changes with movement . revealing new planes of silk like a landscape . that never looks the same twice

PARADAJSU . was not designed to shape the body

It was created to reveal presence

For women . who do not need to prove anything

For women . who want to feel themselves

For women . who choose softness without giving up strength

Each PARADAJSU . Dress

is created individually in the ABSOLUT DIMENSION atelier . with attention to fabric proportions and movement

This is not a seasonal product

It is a form of experience

It is a moment of returning to your TRUE self .', 'PARADAJSU . Tu się zaczynasz .

Paradajsu powstała z potrzeby stworzenia formy . która nie narzuca się ciału . która porusza się razem z nim

To sukienka o miękkiej . płynnej linii . zbudowana z warstw światła . ruchu . oddechu

Otula sylwetkę pozostawiając przestrzeń dla naturalności . lekkości . własnego rytmu

Jej forma zmienia się podczas ruchu . odsłaniając kolejne płaszczyzny jedwabiu niczym krajobraz . który nigdy nie wygląda tak samo dwa razy

PARADAJSU . nie została zaprojektowana po to by modelować ciało

Została stworzona po to by wydobywać obecność

Dla kobiet . które nie potrzebują niczego udowadniać

Dla kobiet . które chcą czuć siebie

Dla kobiet . które wybierają miękkość bez rezygnacji z siły

Każda Sukienka PARADAJSU .

powstaje indywidualnie w pracowni ABSOLUT DIMENSION . z uważnością na materiał proporcje i ruch

To nie jest produkt sezonowy

To forma doświadczenia

To moment powrotu do siebie . PRAWDZIWEJ .', '{"34","36","38","40"}', false, false, 'Jedwab', 'Jedwab', 'Black', 'Czerń') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('sukienka-milano-maturite', '37_Sukienka Milano', 110000, 'dress', 'paris', '/img/products/sukienka-milano-maturite/0.webp', '{"/img/products/sukienka-milano-maturite/0.webp","/img/products/sukienka-milano-maturite/1.webp","/img/products/sukienka-milano-maturite/2.webp","/img/products/sukienka-milano-maturite/3.webp"}', 'Unique . SM.ART . Nobility

37_Dress Milano

Warm. Comfortable. Enveloping... it''s like your second skin! Made of thick, delicate to the touch noble Italian velvet, it beautifully emphasizes every female silhouette. The body feels wonderful and free in it. Ideal for traveling.Perfect base for jackets, cardigans, scarves. Finished with hand-stitching while maintaining the elasticity of the fabric that works beautifully with the body.For every occasion, all you have to do is change the accessories!

Work . Event . Street

1 dress = many occasions

*', 'be Unique . be SM.ART . be Nobility

37_Sukienka Milano

Ciepła . Wygodna . Otulająca... jest jak Twoja druga skóra! Wykonana z mięsistego, delikatnego w dotyku szlachetnego włoskiego weluru, pięknie podkreśla każdą kobiecą sylwetkę. Ciało czuje się w niej cudownie i swobodnie . Idealna do podróży .

Doskonała baza pod żakiety, kardigany, szale. Wykończona ręcznym obszyciem z zachowaniem pięknie pracującej z ciałem sprężystości tkaniny.

Na każdą Twoją okazję, wystarczy że zmienisz dodatki!

•

Work . Event . Street

1 sukienka = wiele okazji

*', '{"34","36","38","40","42"}', false, false, 'Italian velvet 100% PE', 'włoski welur 100% PE', 'White', 'Biały') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;
insert into public.products (id, name, price, category, collection, image, images, description_en, description_pl, sizes, featured, new_arrival, materials_en, materials_pl, color_en, color_pl) values ('sukienka-monaco', '7.Sukienka Monaco', 250000, 'dress', 'cannes', '/img/products/sukienka-monaco/0.webp', '{"/img/products/sukienka-monaco/0.webp","/img/products/sukienka-monaco/1.webp","/img/products/sukienka-monaco/2.webp","/img/products/sukienka-monaco/3.webp"}', 'Unique . SM.ART . Nobility

Monaco Dress

Feminine . Light . Noble

Beautiful, airy, noble silk satin in a cut that ensures absolute freedom and endless possibilities of combining it with all other elements of your wardrobe! You wear it for all occasions - only by changing accessories!

Total Look:

(composition of the entire composition in photos)

1. Top Unique

2. Shawl NU

3. Handbag Unique', 'Unique . SM.ART . Nobility

Sukienka Monaco

Kobieca . Lekka . Szlachetna

Piękna zwiewna szlachetna satyna jedwabna w kroju zapewniającym absolutną swobodę i niekończące się możliwości komponowania jej ze wszystkimi pozostałymi elementami garderoby! Nosisz ją na wszelkie okazje - zmieniając jedynie dodatki!

Total Look:

(skład całej kompozycji na zdjęciach)

• Top Unique

• Szal NU

• Torebka Unique', '{"34","36","38","40","42"}', false, false, '100% silk satin', '100% satyna jedwabna', 'White', 'Biały') on conflict (id) do update set name=excluded.name, price=excluded.price, category=excluded.category, collection=excluded.collection, image=excluded.image, images=excluded.images, description_en=excluded.description_en, description_pl=excluded.description_pl, sizes=excluded.sizes, featured=excluded.featured, new_arrival=excluded.new_arrival, materials_en=excluded.materials_en, materials_pl=excluded.materials_pl, color_en=excluded.color_en, color_pl=excluded.color_pl;

-- Product variants (per-size stock). The trigger keeps
-- products.stock_quantity in sync as these rows land.
insert into public.product_variants (product_id, size, stock_quantity) values ('38-sukienka-paris', '34', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38-sukienka-paris', '36', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38-sukienka-paris', '38', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38-sukienka-paris', '40', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-angel', '34', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-angel', '36', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-angel', '38', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-angel', '40', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-amey-1', '34', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-amey-1', '36', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-amey-1', '38', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-amey-1', '40', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('15-sukienka-paradajsu-1', '34', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('15-sukienka-paradajsu-1', '36', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('15-sukienka-paradajsu-1', '38', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('15-sukienka-paradajsu-1', '40', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-aixa', '34', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-aixa', '36', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-aixa', '38', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-aixa', '40', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-ana-monaco', '34', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-ana-monaco', '36', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-ana-monaco', '38', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-ana-monaco', '40', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-maturite', '34', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-maturite', '36', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-maturite', '38', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-maturite', '40', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-da-nuta', '34', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-da-nuta', '36', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-da-nuta', '38', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-da-nuta', '40', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38-sukienka-me-8', '34', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38-sukienka-me-8', '36', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38-sukienka-me-8', '38', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38-sukienka-me-8', '40', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38-sukienka-cote-dazur', '34', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38-sukienka-cote-dazur', '36', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38-sukienka-cote-dazur', '38', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38-sukienka-cote-dazur', '40', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-cote-dazur-1', '34', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-cote-dazur-1', '36', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-cote-dazur-1', '38', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-cote-dazur-1', '40', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-golden-age', '34', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-golden-age', '36', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-golden-age', '38', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-golden-age', '40', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-chania', '34', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-chania', '36', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-chania', '38', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-chania', '40', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-monaco', '34', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-monaco', '36', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-monaco', '38', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-monaco', '40', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-megami', '34', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-megami', '36', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-megami', '38', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-megami', '40', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-kioto', '34', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-kioto', '36', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-kioto', '38', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-kioto', '40', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('7-sukienka-megami', '34', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('7-sukienka-megami', '36', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('7-sukienka-megami', '38', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('7-sukienka-megami', '40', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38-sukienka-nice', '36', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38-sukienka-nice', '38', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38-sukienka-nice', '40', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('15-sukienka-desse-pele', '34', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('15-sukienka-desse-pele', '36', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('15-sukienka-desse-pele', '38', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('15-sukienka-desse-pele', '40', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('suknia-event-desse-pele', '34', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('suknia-event-desse-pele', '36', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('suknia-event-desse-pele', '38', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('suknia-event-desse-pele', '40', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('amey-53', '36', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('amey-53', '38', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('amey-53', '40', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('amey-53', '42', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-blue-ocean', '34', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-blue-ocean', '36', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-blue-ocean', '38', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-blue-ocean', '40', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-ballets', '34', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-ballets', '36', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-ballets', '38', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-ballets', '40', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-amour', '34', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-amour', '36', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-amour', '38', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-amour', '40', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('15-sukienka-paradajsu', '34', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('15-sukienka-paradajsu', '36', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('15-sukienka-paradajsu', '38', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('15-sukienka-paradajsu', '40', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('monaco-pulli-ocean', '36', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('monaco-pulli-ocean', '38', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('monaco-pulli-ocean', '40', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('monaco-pulli-ocean', '42', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('28-suknia-mantoine-2', '36', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('28-suknia-mantoine-2', '38', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('28-suknia-mantoine-2', '40', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('28-suknia-mantoine-1', '34', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('28-suknia-mantoine-1', '36', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('28-suknia-mantoine-1', '38', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('28-suknia-mantoine-1', '40', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('28-suknia-mantoine', '34', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('28-suknia-mantoine', '36', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('28-suknia-mantoine', '38', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('28-suknia-mantoine', '40', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('poncho-absolut', '34', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('poncho-absolut', '36', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('poncho-absolut', '38', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('poncho-absolut', '40', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('8-zakiet-jour-y-1', '34', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('8-zakiet-jour-y-1', '36', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('8-zakiet-jour-y-1', '38', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('8-zakiet-jour-y-1', '40', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('20-top-monaco', '34', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('20-top-monaco', '36', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('20-top-monaco', '38', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('20-top-monaco', '40', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('25-bluzka-versailles', '34', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('25-bluzka-versailles', '36', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('25-bluzka-versailles', '38', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('25-bluzka-versailles', '40', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('26-spodnica-josepha', '34', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('26-spodnica-josepha', '36', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('26-spodnica-josepha', '38', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('26-spodnica-josepha', '40', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('26-spodnica-josepha', '42', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('30-bluzka-aixa', '34/36', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('30-bluzka-aixa', '38/40', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-adama', '34', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-adama', '36', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-adama', '38', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-adama', '40', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-adama', '42', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('25_bluzka-black-white', '34', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('25_bluzka-black-white', '36', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('25_bluzka-black-white', '38', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('25_bluzka-black-white', '40', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('8_zakiet-mantoine-1', '36', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('8_zakiet-mantoine-1', '38', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('8_zakiet-mantoine-1', '40', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('8_zakiet-mantoine-1', '42', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('30-kimono-dan-y', '34', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('30-kimono-dan-y', '36', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('30-kimono-dan-y', '38', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('30-kimono-dan-y', '40', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-amey-54', '34', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-amey-54', '36', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-amey-54', '38', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-amey-54', '40', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-amey-54', '42', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-amey-53', '34', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-amey-53', '36', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-amey-53', '38', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-amey-53', '40', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-amey-53', '42', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('10_torba-bali', 'One size', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('15_sukienka-qatar', '34', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('15_sukienka-qatar', '36', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('15_sukienka-qatar', '38', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('15_sukienka-qatar', '40', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('15_sukienka-qatar', '42', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('top-japan-absolut', '34', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('top-japan-absolut', '36', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('top-japan-absolut', '38', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('top-japan-absolut', '40', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('top-japan-absolut', '42', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('31-szal-nu', 'One size', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('23_top-larte', '34', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('23_top-larte', '36', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('23_top-larte', '38', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('zestaw-dr-kogo', '34', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('zestaw-dr-kogo', '36', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('zestaw-dr-kogo', '38', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('zestaw-dr-kogo', '40', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('zestaw-dr-kogo', '42', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('zestaw-dr-kogo', '44', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('koszulka-absolut', '34', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('koszulka-absolut', '36', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('koszulka-absolut', '38', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('koszulka-absolut', '40', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('koszulka-absolut', '42', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('koszulka-absolut', '44', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('dress-je-absolut', '34', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('dress-je-absolut', '36', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('dress-je-absolut', '38', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('dress-je-absolut', '40', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-maturite-1', '36', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-maturite-1', '38', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-maturite-1', '40', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-maturite-1', '42', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('body-maturite', '36', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('body-maturite', '38', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('body-maturite', '40', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('body-maturite', '42', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-amey', '34', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-amey', '36', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-amey', '38', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18-set-amey', '40', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-cote-dazur', '34', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-cote-dazur', '36', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-cote-dazur', '38', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-cote-dazur', '40', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('31-szal-nu-1', 'One size', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38_set-gorudo-ny', '34', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38_set-gorudo-ny', '36', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38_set-gorudo-ny', '38', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38_set-gorudo-ny', '40', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('top-absolut', '34', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('top-absolut', '36', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('top-absolut', '38', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('top-absolut', '40', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-coeur-maturite', '34', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-coeur-maturite', '36', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-coeur-maturite', '38', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-coeur-maturite', '40', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-coeur-maturite', '42', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-coeur-maturite', '44', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38_sukienka-naiss-ance', '34', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38_sukienka-naiss-ance', '36', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38_sukienka-naiss-ance', '38', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38_sukienka-naiss-ance', '40', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38_-suknia-imperatriece', '36', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38_-suknia-imperatriece', '38', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38_-suknia-imperatriece', '40', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('suknia-valentine-opera', '34', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('suknia-valentine-opera', '36', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('suknia-valentine-opera', '38', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('suknia-valentine-opera', '40', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('1-ana-absolut', '36', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('1-ana-absolut', '38', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('1-ana-absolut', '40', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-amei', '34', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-amei', '36', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-amei', '38', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-amei', '40', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-amei', '42', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-belle-de-jour', '34', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-belle-de-jour', '36', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-belle-de-jour', '38', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-belle-de-jour', '40', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('23-top-sydney', '36', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('23-top-sydney', '38', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('23-top-sydney', '40', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('24-spodnica-japan-monaco', '36', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('24-spodnica-japan-monaco', '38', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('24-spodnica-japan-monaco', '40', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('2-pulli-cloudy', '34/36', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('2-pulli-cloudy', '38/40', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('23-top-unique-chocco', '36', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('23-top-unique-chocco', '38', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('23-top-unique-chocco', '40', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('26-spodnica-furansu', '36', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('26-spodnica-furansu', '38', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('26-spodnica-furansu', '40', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('26-spodnica-furansu', '42', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('30-bluzka-jour-y', '36', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('30-bluzka-jour-y', '38', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('30-bluzka-jour-y', '40', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('28_suknia-absolut', '36', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('28_suknia-absolut', '38', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('28_suknia-absolut', '40', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('8-zakiet-jour-y', '36', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('8-zakiet-jour-y', '38', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('8-zakiet-jour-y', '40', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('24_spodnica-ver-sale', '36', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('24_spodnica-ver-sale', '38', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('24_spodnica-ver-sale', '40', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('8-zakiet-seiko', '36', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('8-zakiet-seiko', '38', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('8-zakiet-seiko', '40', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('8-zakiet-seiko', '42', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('36-plaszcz-shinrein', '36', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('36-plaszcz-shinrein', '38', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('36-plaszcz-shinrein', '40', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('36-plaszcz-shinrein', '42', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('37-sukienka-icon', 'I (34-36)', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('37-sukienka-icon', 'II (38-40)', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('37-sukienka-icon', 'III (42-44)', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18_set-soul-light', '34', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18_set-soul-light', '36', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18_set-soul-light', '38', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18_set-soul-light', '40', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18_set-kioto', '34', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18_set-kioto', '36', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18_set-kioto', '38', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18_set-kioto', '40', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('dress-say-shell', '34', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('dress-say-shell', '36', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('dress-say-shell', '38', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('dress-say-shell', '40', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-work-kioto-1', 'I (34-36)', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-work-kioto-1', 'II (38-40)', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-work-kioto-1', 'III (42-44)', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18_set-oasis', '34', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18_set-oasis', '36', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18_set-oasis', '38', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('18_set-oasis', '40', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38_sukienka-lux-ury', '34', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38_sukienka-lux-ury', '36', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38_sukienka-lux-ury', '38', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38_sukienka-lux-ury', '40', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38_sukienka-lux-ury', '42', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38_sukienka-lux-ury', '44', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('top-monaco', '34', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('top-monaco', '36', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('top-monaco', '38', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('top-monaco', '40', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('top-monaco', '42', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('top-monaco', '44', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-bali', '34', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-bali', '36', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-bali', '38', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-bali', '40', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-bali', '42', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-bali', '44', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('8_zakiet-melbourne', '34', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('8_zakiet-melbourne', '36', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('8_zakiet-melbourne', '38', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('8_zakiet-melbourne', '40', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('8_zakiet-melbourne', '42', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38_upper-east-side', '34', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38_upper-east-side', '36', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38_upper-east-side', '38', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38_upper-east-side', '40', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38_sukienka-melbourne', '34', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38_sukienka-melbourne', '36', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38_sukienka-melbourne', '38', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38_sukienka-melbourne', '40', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38_set-manhattan', '34', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38_set-manhattan', '36', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38_set-manhattan', '38', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('38_set-manhattan', '40', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('31_szal-nu-1', 'One size', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('17_sukienka-free-dom', '34', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('17_sukienka-free-dom', '36', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('17_sukienka-free-dom', '38', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('17_sukienka-free-dom', '40', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('8_zakiet-mantoine', '34', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('8_zakiet-mantoine', '36', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('8_zakiet-mantoine', '38', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('8_zakiet-mantoine', '40', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('4_kardigan-ocean', '34', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('4_kardigan-ocean', '36', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('4_kardigan-ocean', '38', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('4_kardigan-ocean', '40', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('31_szal-nu', 'One size', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('26_top-golden-age', '34', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('26_top-golden-age', '36', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('26_top-golden-age', '38', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('26_top-golden-age', '40', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('23_top-my-way-2', '34', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('23_top-my-way-2', '36', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('23_top-my-way-2', '38', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('23_top-my-way-2', '40', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('15_sukienka-kanga-roo', '34', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('15_sukienka-kanga-roo', '36', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('15_sukienka-kanga-roo', '38', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('15_sukienka-kanga-roo', '40', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-hawaii', '34', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-hawaii', '36', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-hawaii', '38', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-hawaii', '40', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('spodnica-ver-sale', '34', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('spodnica-ver-sale', '36', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('spodnica-ver-sale', '38', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('spodnica-ver-sale', '40', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('top-angel', '34', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('top-angel', '36', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('top-angel', '38', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('top-angel', '40', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('23_top-g22', '34', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('23_top-g22', '36', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('23_top-g22', '38', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('23_top-g22', '40', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('23_top-g22', '42', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-icann-sss', '34', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-icann-sss', '36', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-icann-sss', '38', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-icann-sss', '40', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-nuee-monaco', '34', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-nuee-monaco', '36', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-nuee-monaco', '38', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('kimono-dany', '34', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('kimono-dany', '36', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('kimono-dany', '38', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('kimono-dany', '40', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('kimono-dany', '42', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('kimono-dany', '44', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('torebka-shinrein', 'One size', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('plaszcz-pluid', '34', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('plaszcz-pluid', '36', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('plaszcz-pluid', '38', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('plaszcz-pluid', '40', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('zakiet-jour-y-absolut', '36', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('zakiet-jour-y-absolut', '38', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('zakiet-jour-y-absolut', '40', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-la-maturite', '34', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-la-maturite', '36', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-la-maturite', '38', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-la-maturite', '40', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('set-la-maturite', '42', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-megami-dolce', '34', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-megami-dolce', '36', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-megami-dolce', '38', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-megami-dolce', '40', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-nice', '36', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-nice', '38', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-nice', '40', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('top-nobility-1', '36', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('top-nobility-1', '38', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('top-nobility-1', '40', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('top-nobility-1', '42', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('kardigan-absolut-2', '36', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('kardigan-absolut-2', '38', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('kardigan-absolut-2', '40', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('setturkscacios', '34', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('setturkscacios', '36', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('setturkscacios', '38', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('setturkscacios', '40', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('suknia-henriqua-amour', '38', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('bluzka-work-premiere', '36', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('bluzka-work-premiere', '38', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('bluzka-work-premiere', '40', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('top-unique-kogo', '36', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('top-unique-kogo', '38', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('top-unique-kogo', '40', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('spodnica-da-nuta', '36', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('spodnica-da-nuta', '38', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('spodnica-da-nuta', '40', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('spodnica-ballets-maturite', '36', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('spodnica-ballets-maturite', '38', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('spodnica-ballets-maturite', '40', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('spodnica-ballets-maturite', '42', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('pulli-arte-maturite', '36', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('pulli-arte-maturite', '38', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('pulli-arte-maturite', '40', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka', '36', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka', '38', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka', '40', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('suknia-dor-52', '34', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('suknia-dor-52', '36', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('suknia-dor-52', '38', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('suknia-dor-52', '40', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('suknia-dor-52', '42', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('36_plaszcz-shinrein', '36', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('36_plaszcz-shinrein', '38', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('36_plaszcz-shinrein', '40', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('36_plaszcz-shinrein', '42', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('bluzka-montecarlo', '36', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('bluzka-montecarlo', '38', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('bluzka-montecarlo', '40', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('bluzka-montecarlo', '42', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('spodnica-furansu-maturite', '36', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('spodnica-furansu-maturite', '38', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('spodnica-furansu-maturite', '40', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('spodnica-furansu-maturite', '42', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('43-spodnie-doru', '34', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('43-spodnie-doru', '36', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('43-spodnie-doru', '38', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('43-spodnie-doru', '40', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('43-spodnie-doru', '42', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('suknia-event-mantoine', '34', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('suknia-event-mantoine', '36', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('suknia-event-mantoine', '38', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('suknia-event-mantoine', '40', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-coctail-absolut', '36', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-coctail-absolut', '38', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-coctail-absolut', '40', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('paradajsu-absolut', '34', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('paradajsu-absolut', '36', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('paradajsu-absolut', '38', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('paradajsu-absolut', '40', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-milano-maturite', '34', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-milano-maturite', '36', 7) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-milano-maturite', '38', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-milano-maturite', '40', 2) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-milano-maturite', '42', 4) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-monaco', '34', 6) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-monaco', '36', 8) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-monaco', '38', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-monaco', '40', 3) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;
insert into public.product_variants (product_id, size, stock_quantity) values ('sukienka-monaco', '42', 5) on conflict (product_id, size) do update set stock_quantity=excluded.stock_quantity;

-- Blog posts
insert into public.blog_posts (id, slug, title_en, title_pl, excerpt_en, excerpt_pl, image, date, author, body) values ('b1', 's-i-l-e-n-t', '. S i l e n t .', '. C i s z a .', 'Silence is where you are born — the right one. You don’t have to scream; what is yours simply flows out.', 'Cisza to miejsce, w którym się rodzisz — ta właściwa. Nie musisz krzyczeć; to, co Twoje, po prostu wypływa.', '/img/blog/blog-1.jpg', '2026-03-15', 'Absolut Dimension', '[{"type":"lead","text":{"en":"Silence. This is where you are born. The right one. You don’t scream. You don’t have to. What is yours simply flows out.","pl":"Cisza. To tutaj się rodzisz. Ta właściwa. Nie krzyczysz. Nie musisz. To, co Twoje, po prostu wypływa."}},{"type":"p","text":{"en":"Before the day asks anything of you, there is a quiet hour that belongs only to you. No noise, no audience — just the body waking and the slow decision of who you will be today.","pl":"Zanim dzień czegokolwiek od Ciebie zażąda, istnieje cicha godzina, która należy tylko do Ciebie. Bez hałasu, bez widowni — tylko budzące się ciało i powolna decyzja, kim dziś będziesz."}},{"type":"p","text":{"en":"We dress from that silence, not against it. A form that does not perform. A fabric that lets you breathe. Presence rather than display — the truth of a feeling instead of a trend.","pl":"Ubieramy się z tej ciszy, a nie wbrew niej. Forma, która nie odgrywa roli. Tkanina, która pozwala oddychać. Obecność zamiast pokazu — prawda uczucia zamiast trendu."}},{"type":"quote","text":{"en":"Paradise exists within you.","pl":"Raj istnieje w Tobie."}},{"type":"signoff","text":{"en":"— Absolut Dimension","pl":"— Absolut Dimension"}}]'::jsonb) on conflict (id) do update set slug=excluded.slug, title_en=excluded.title_en, title_pl=excluded.title_pl, excerpt_en=excluded.excerpt_en, excerpt_pl=excluded.excerpt_pl, image=excluded.image, date=excluded.date, author=excluded.author, body=excluded.body;
insert into public.blog_posts (id, slug, title_en, title_pl, excerpt_en, excerpt_pl, image, date, author, body) values ('b2', 'life-is-about-style', '. LIFE is about STYLE .', '. ŻYCIE jest o STYLU .', 'Our dreams are worthy. Our value is meaningful. Style begins the moment you stop asking for approval.', 'Nasze marzenia są wartościowe. Nasza wartość ma znaczenie. Styl zaczyna się w chwili, gdy przestajesz pytać o akceptację.', '/img/blog/blog-2.png', '2026-02-20', 'Absolut Dimension', '[{"type":"lead","text":{"en":"Our dreams are worthy. Our value is meaningful. Life is about your style.","pl":"Nasze marzenia są wartościowe. Nasza wartość ma znaczenie. Życie jest o Twoim stylu."}},{"type":"p","text":{"en":"Style is not what others approve of. It is what happens when you stop asking. When you connect with your own self, you synchronise with the living, creative element of life.","pl":"Styl to nie to, co inni akceptują. To, co dzieje się, gdy przestajesz pytać. Kiedy łączysz się z własnym „ja”, synchronizujesz się z żywym, twórczym pierwiastkiem życia."}},{"type":"p","text":{"en":"So we invite ourselves back to ourselves. We choose forms that hold this invitation open — light, free, unmistakably our own.","pl":"Więc zapraszamy siebie z powrotem do siebie. Wybieramy formy, które utrzymują to zaproszenie otwartym — lekkie, wolne, niewątpliwie własne."}},{"type":"quote","text":{"en":"I invite my Self to me.","pl":"Zapraszam moje „Ja” do siebie."}},{"type":"signoff","text":{"en":"— Absolut Dimension","pl":"— Absolut Dimension"}}]'::jsonb) on conflict (id) do update set slug=excluded.slug, title_en=excluded.title_en, title_pl=excluded.title_pl, excerpt_en=excluded.excerpt_en, excerpt_pl=excluded.excerpt_pl, image=excluded.image, date=excluded.date, author=excluded.author, body=excluded.body;
insert into public.blog_posts (id, slug, title_en, title_pl, excerpt_en, excerpt_pl, image, date, author, body) values ('b3', 'journey-droga-do-siebie', 'Journey . The Way to Yourself', 'Journey . Droga do siebie', 'SM.ART Wardrobe — Winter in Paris. The same wardrobe, eight lives: walking, the library, Café de Flore, the Hemingway Bar.', 'Garderoba SM.ART — Zima w Paryżu. Ta sama garderoba, osiem żyć: spacer, biblioteka, Café de Flore, Hemingway Bar.', '/img/blog/blog-3.jpg', '2026-01-18', 'Absolut Dimension', '[{"type":"lead","text":{"en":"SM.ART Wardrobe — Winter in Paris. A journey is not only a place; it is a way back to yourself.","pl":"Garderoba SM.ART — Zima w Paryżu. Podróż to nie tylko miejsce; to droga powrotna do siebie."}},{"type":"p","text":{"en":"This season turns to dark chocolate brown — a colour that grounds and envelops, opulent and understated at once. It is the palette of a long winter afternoon spent unhurried.","pl":"Ten sezon zwraca się ku ciemnemu czekoladowemu brązowi — kolorowi, który uziemia i otula, jednocześnie wystawnemu i powściągliwemu. To paleta długiego, zimowego popołudnia spędzonego bez pośpiechu."}},{"type":"h2","text":{"en":"A journal of eight moments","pl":"Dziennik ośmiu chwil"}},{"type":"p","text":{"en":"Walking. The library. Café de Flore. The Hotel Bvlgari. The Hemingway Bar. Each moment asks for the same wardrobe worn differently — layered, re-proportioned, never repeated.","pl":"Spacer. Biblioteka. Café de Flore. Hotel Bvlgari. Hemingway Bar. Każda z tych chwil prosi o tę samą garderobę noszoną inaczej — warstwowo, w zmienionych proporcjach, nigdy tak samo."}},{"type":"quote","text":{"en":"The same wardrobe, eight lives. That is the whole idea.","pl":"Ta sama garderoba, osiem żyć. Na tym polega cała idea."}},{"type":"signoff","text":{"en":"— Absolut Dimension","pl":"— Absolut Dimension"}}]'::jsonb) on conflict (id) do update set slug=excluded.slug, title_en=excluded.title_en, title_pl=excluded.title_pl, excerpt_en=excluded.excerpt_en, excerpt_pl=excluded.excerpt_pl, image=excluded.image, date=excluded.date, author=excluded.author, body=excluded.body;
insert into public.blog_posts (id, slug, title_en, title_pl, excerpt_en, excerpt_pl, image, date, author, body) values ('b4', 'womenworld', '. WomenWorld .', '. WomenWorld .', 'A woman creates, produces, begets — she stands in true power. A personal letter that begins with dresses knitted by hand in Africa.', 'Kobieta tworzy, wytwarza, rodzi — stoi w prawdziwej sile. Osobisty list, który zaczyna się od sukienek dzierganych ręcznie w Afryce.', '/img/blog/blog-4.png', '2025-12-12', 'Absolut Dimension', '[{"type":"lead","text":{"en":"A woman creates. Produces. Begets. She stands in true power.","pl":"Kobieta tworzy. Wytwarza. Rodzi. Stoi w prawdziwej sile."}},{"type":"p","text":{"en":"This letter is personal. It carries a mother’s dream once set aside, and the long, quiet survival that women so often hold without being seen.","pl":"Ten list jest osobisty. Niesie marzenie matki kiedyś odłożone na bok oraz długie, ciche przetrwanie, które kobiety tak często dźwigają niezauważone."}},{"type":"p","text":{"en":"It was in Africa that the first dresses were knitted by hand — creations turned into garments. “I put on these dresses, and I felt myself.” The brand was born from that sentence.","pl":"To w Afryce pierwsze sukienki powstały, dziergane ręcznie — twórczość zamieniona w ubranie. „Założyłam te sukienki i poczułam siebie.” Z tego zdania narodziła się marka."}},{"type":"quote","text":{"en":"I put on these dresses, and I felt myself.","pl":"Założyłam te sukienki i poczułam siebie."}},{"type":"signoff","text":{"en":"— Absolut Dimension","pl":"— Absolut Dimension"}}]'::jsonb) on conflict (id) do update set slug=excluded.slug, title_en=excluded.title_en, title_pl=excluded.title_pl, excerpt_en=excluded.excerpt_en, excerpt_pl=excluded.excerpt_pl, image=excluded.image, date=excluded.date, author=excluded.author, body=excluded.body;
insert into public.blog_posts (id, slug, title_en, title_pl, excerpt_en, excerpt_pl, image, date, author, body) values ('b5', 'sztuka-spojnosci-total-look', 'The Art of Coherence = TOTAL LOOK', 'Sztuka spójności = TOTAL LOOK', 'In luxury, consistency isn’t a limitation — it’s a strength. Dress, accessories, jacket and jewellery answering to one idea.', 'W luksusie spójność nie jest ograniczeniem — jest siłą. Sukienka, dodatki, żakiet i biżuteria odpowiadające jednej idei.', '/img/products/38-sukienka-paris/0.webp', '2025-11-28', 'Absolut Dimension', '[{"type":"lead","text":{"en":"In the world of luxury fashion, consistency isn’t a limitation — it’s a strength. A total look is a statement.","pl":"W świecie luksusowej mody spójność nie jest ograniczeniem — jest siłą. Total look to manifest."}},{"type":"p","text":{"en":"Dress, accessories, jacket, jewellery — when each element answers to the same idea, the whole becomes quieter and more powerful than any single piece. Nothing competes. Everything agrees.","pl":"Sukienka, dodatki, żakiet, biżuteria — gdy każdy element odpowiada tej samej idei, całość staje się cichsza i mocniejsza niż jakikolwiek pojedynczy element. Nic nie rywalizuje. Wszystko się zgadza."}},{"type":"p","text":{"en":"This is the principle behind the SM.ART Wardrobe: pieces designed to coexist, so that building a complete look is a matter of composition, not compromise.","pl":"To zasada stojąca za Garderobą SM.ART: elementy zaprojektowane, by współistnieć, tak by zbudowanie pełnej stylizacji było kwestią kompozycji, a nie kompromisu."}},{"type":"quote","text":{"en":"A total look is not more. It is coherent.","pl":"Total look to nie więcej. To spójność."}},{"type":"signoff","text":{"en":"— Absolut Dimension","pl":"— Absolut Dimension"}}]'::jsonb) on conflict (id) do update set slug=excluded.slug, title_en=excluded.title_en, title_pl=excluded.title_pl, excerpt_en=excluded.excerpt_en, excerpt_pl=excluded.excerpt_pl, image=excluded.image, date=excluded.date, author=excluded.author, body=excluded.body;
insert into public.blog_posts (id, slug, title_en, title_pl, excerpt_en, excerpt_pl, image, date, author, body) values ('b6', 'doha', 'Packing — the Nightmare of Travel', 'Pakowanie — koszmar podróży', 'There is no emergency closet on the road. The anxiety of the suitcase is exactly what led to the SM.ART Wardrobe.', 'W podróży nie ma awaryjnej szafy. To właśnie lęk przed walizką doprowadził do Garderoby SM.ART.', '/img/products/15-sukienka-paradajsu-1/0.webp', '2025-11-10', 'Absolut Dimension', '[{"type":"lead","text":{"en":"There is no emergency closet on the road. You only have a suitcase — and beside it, you can feel naked.","pl":"W podróży nie ma awaryjnej szafy. Masz tylko walizkę — a obok niej można poczuć się nago."}},{"type":"p","text":{"en":"Packing anxiety is real. It was, in fact, the problem that led to the SM.ART Wardrobe: a small set of forms that combine endlessly, so a single case can hold a whole life of occasions.","pl":"Lęk przed pakowaniem jest prawdziwy. To właśnie ten problem doprowadził do Garderoby SM.ART: niewielkiego zestawu form, które łączą się bez końca, tak by jedna walizka pomieściła całe życie okazji."}},{"type":"h2","text":{"en":"Six questions before you pack","pl":"Sześć pytań przed pakowaniem"}},{"type":"p","text":{"en":"Intention. Destination. Temperature. Duration. Where you’ll stay. What you’ll do. Answer these, and the suitcase almost packs itself — Walk-On-My.Self, Break-Coffee, Diary Time.","pl":"Intencja. Cel. Temperatura. Czas trwania. Gdzie zamieszkasz. Co będziesz robić. Odpowiedz na nie, a walizka spakuje się niemal sama — Walk-On-My.Self, Break-Coffee, Diary Time."}},{"type":"quote","text":{"en":"Travel light, arrive yourself.","pl":"Podróżuj lekko, przybądź sobą."}},{"type":"signoff","text":{"en":"— Absolut Dimension","pl":"— Absolut Dimension"}}]'::jsonb) on conflict (id) do update set slug=excluded.slug, title_en=excluded.title_en, title_pl=excluded.title_pl, excerpt_en=excluded.excerpt_en, excerpt_pl=excluded.excerpt_pl, image=excluded.image, date=excluded.date, author=excluded.author, body=excluded.body;

commit;
