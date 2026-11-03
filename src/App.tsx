import { useEffect, useState, type ReactNode } from "react"
import storefront from "./assets/shop/storefront.png"
import fabricsWhite from "./assets/shop/fabrics-white.png"
import thobeDisplay from "./assets/shop/thobe-display.png"
import cuttingRoom from "./assets/shop/cutting-room.png"
import finishedThobes from "./assets/shop/finished-thobes.png"
import workshop from "./assets/shop/workshop.png"
import finishedThobe from "./assets/shop/finished-thobe.png"
import measuring from "./assets/shop/measuring.png"
import fabricsColor from "./assets/shop/fabrics-color.png"
import tailoring from "./assets/shop/tailoring.png"

type Lang = "ar" | "en"
const WA = "https://wa.me/97471875670"
const MAP =
  "https://www.google.com/maps/place/25%C2%B033%2702.1%22N+51%C2%B025%2733.0%22E/@25.5505833,51.4258333,786m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d25.5505833!4d51.4258333?hl=en&entry=ttu"
const text = {
  ar: {
    nav: ["الرئيسية", "خدماتنا", "معرض الأعمال", "تواصل معنا"],
    ids: ["home", "services", "gallery", "contact"],
    cr: "س.ت ٢٠٧٧٨٠",
    lang: "English",
    eyebrow: "خياطة رجالية متقنة في قطر",
    title: "أناقة تُفصّل",
    accent: "على مقاسك",
    hero: "نصنع الثوب القطري بعناية، من اختيار القماش إلى أدق اللمسات النهائية. خبرة وحرفية تمنحك مظهراً يليق بك.",
    chat: "راسلنا عبر واتساب",
    call: "اتصل الآن",
    explore: "اكتشف خدماتنا",
    stats: ["تفصيل دقيق", "أقمشة مختارة", "لمسة احترافية"],
    introK: "حرفية أصيلة",
    introT: "الثوب المثالي يبدأ من هنا",
    introP:
      "في نيو بارادايز، نجمع بين خبرة الخياط ودقة القياس وجودة القماش لنقدم ثوباً مريحاً، أنيقاً، ومصنوعاً خصيصاً لك.",
    serviceK: "خدماتنا",
    serviceT: "كل ما تحتاجه لإطلالة متقنة",
    serviceP: "نهتم بكل مرحلة، لأن الفرق الحقيقي يكمن في التفاصيل.",
    services: [
      [
        "٠١",
        "تفصيل الثوب",
        "تفصيل ثياب رجالية حسب الطلب، بقصّات مدروسة ومقاسات دقيقة تناسب أسلوبك.",
      ],
      [
        "٠٢",
        "اختيار الأقمشة",
        "تشكيلة واسعة من الأقمشة البيضاء والملونة المختارة بعناية للراحة والأناقة.",
      ],
      [
        "٠٣",
        "القياس والتعديل",
        "قياسات دقيقة وتعديلات احترافية للحصول على الراحة والثبات والمظهر المثالي.",
      ],
    ],
    craftK: "من القياس إلى التسليم",
    craftT: "صنعة نعتز بها",
    craftP:
      "كل ثوب يمر بين أيدي خياطين مهرة، بخطوات مدروسة تبدأ بالقياس والقص، وتكتمل بالخياطة والتشطيب والمراجعة الدقيقة.",
    steps: ["قياس دقيق", "قص باحتراف", "خياطة متقنة", "مراجعة نهائية"],
    galleryK: "من داخل مشغلنا",
    galleryT: "تفاصيل تحكي عن الجودة",
    galleryP: "جولة في خاماتنا، أعمالنا، ومراحل صناعة الثوب.",
    visitK: "زورونا",
    visitT: "نحن في خدمتك",
    visitP:
      "تفضل بزيارتنا لاختيار القماش وأخذ القياسات، أو تواصل معنا مباشرة عبر واتساب.",
    location: "الدوحة، قطر",
    directions: "الاتجاهات عبر خرائط Google",
    name: "نيو بارادايز للخياطة الرجالية",
    sub: "تفصيل يليق بك.",
    rights: "جميع الحقوق محفوظة",
    made: "تم تصميم الموقع بواسطة",
    menu: "القائمة",
    close: "إغلاق",
  },
  en: {
    nav: ["Home", "Services", "Gallery", "Contact"],
    ids: ["home", "services", "gallery", "contact"],
    cr: "CR 207780",
    lang: "العربية",
    eyebrow: "Qatar's specialist men's tailor",
    title: "Elegance, tailored",
    accent: "to you",
    hero: "We craft the Qatari thobe with care—from fabric selection to the finest finishing touches. Expertise and precision for a look that is distinctly yours.",
    chat: "Chat on WhatsApp",
    call: "Call now",
    explore: "Explore our services",
    stats: ["Precise tailoring", "Selected fabrics", "Professional finish"],
    introK: "Authentic craft",
    introT: "Your perfect thobe starts here",
    introP:
      "At New Paradise, expert tailoring, precise measurements and quality fabrics come together in a comfortable, elegant thobe made especially for you.",
    serviceK: "Our services",
    serviceT: "Everything for a refined fit",
    serviceP:
      "We care for every stage, because the true difference is in the details.",
    services: [
      [
        "01",
        "Bespoke thobes",
        "Made-to-measure men’s thobes, with considered cuts and precise sizing for your personal style.",
      ],
      [
        "02",
        "Fabric selection",
        "A broad collection of carefully selected white and coloured fabrics for comfort and elegance.",
      ],
      [
        "03",
        "Fitting & alterations",
        "Precise measurements and professional alterations for comfort, structure and an ideal fit.",
      ],
    ],
    craftK: "From fitting to finish",
    craftT: "A craft we take pride in",
    craftP:
      "Every thobe passes through skilled hands—from measuring and cutting to expert stitching, finishing and a final quality check.",
    steps: [
      "Precise measure",
      "Expert cut",
      "Fine stitching",
      "Final inspection",
    ],
    galleryK: "Inside our atelier",
    galleryT: "Details that speak of quality",
    galleryP:
      "A look at our fabrics, finished pieces and the craft behind every thobe.",
    visitK: "Visit us",
    visitT: "At your service",
    visitP:
      "Visit us to choose your fabric and take your measurements, or contact us directly on WhatsApp.",
    location: "Doha, Qatar",
    directions: "Directions on Google Maps",
    name: "New Paradise Men's Tailor",
    sub: "Tailored for you.",
    rights: "All rights reserved",
    made: "Website by",
    menu: "Menu",
    close: "Close",
  },
}
const photos = [
  [measuring, "Pattern drafting"],
  [fabricsColor, "Selected fabrics"],
  [finishedThobes, "Finished thobes"],
  [workshop, "Tailors at work"],
  [cuttingRoom, "Fabric cutting"],
  [finishedThobe, "Finished white thobe"],
]
function Icon({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      width="20"
      height="20"
    >
      {children}
    </svg>
  )
}
const Arrow = ({ flip = false }: { flip?: boolean }) => (
  <Icon className={flip ? "rotate-180" : ""}>
    <path
      d="M5 12h14m-6-6 6 6-6 6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    />
  </Icon>
)
const WhatsApp = () => (
  <Icon>
    <path
      d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4.1A8 8 0 1 1 20 11.6Z"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M8 7.5c.8 4.4 4.1 7.7 8.5 8.5l.4-2.5-2.6-1-.9 1.1a8.3 8.3 0 0 1-3-3L11.5 9l-1-2.3L8 7.5Z"
      fill="currentColor"
    />
  </Icon>
)
const Phone = () => (
  <Icon>
    <path
      d="M8.2 4H5.5A1.5 1.5 0 0 0 4 5.5C4 13.5 10.5 20 18.5 20a1.5 1.5 0 0 0 1.5-1.5v-2.7l-4-1.3-1.1 2.1a12.3 12.3 0 0 1-7.5-7.5L9.5 8 8.2 4Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.6"
    />
  </Icon>
)

export default function App() {
  const [lang, setLang] = useState<Lang>("ar"),
    [menu, setMenu] = useState(false),
    [lightbox, setLightbox] = useState<number | null>(null)
  const t = text[lang],
    ar = lang === "ar"
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = ar ? "rtl" : "ltr"
    document.title = t.name
  }, [lang, ar, t.name])
  useEffect(() => {
    document.body.style.overflow = menu || lightbox !== null ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menu, lightbox])
  return (
    <div
      className="overflow-hidden bg-[#f6f4ee] text-[#15221d]"
      dir={ar ? "rtl" : "ltr"}
    >
      <div className="bg-[#14231d] px-5 py-2 text-[11px] tracking-[.16em] text-white/70 md:px-10">
        <div className="mx-auto flex max-w-[1440px] justify-between">
          <span>{t.cr}</span>
          <a
            href="mailto:newparadisemenstailor2@gmail.com"
            className="hidden hover:text-[#8ee38c] sm:block"
          >
            newparadisemenstailor2@gmail.com
          </a>
          <a className="sm:hidden" href={WA}>
            +974 7187 5670
          </a>
        </div>
      </div>
      <header className="absolute inset-x-0 top-[32px] z-40 border-b border-white/15 text-white">
        <div className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-5 md:px-10">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-white/35 font-serif text-lg">
              ن
            </span>
            <span>
              <strong className="block leading-none">
                {ar ? "نيو بارادايز" : "NEW PARADISE"}
              </strong>
              <small className="mt-1.5 block text-[9px] font-bold tracking-[.2em] text-[#70dd73]">
                {ar ? "للخياطة الرجالية" : "MEN'S TAILOR"}
              </small>
            </span>
          </a>
          <nav className="hidden gap-8 lg:flex" aria-label={t.menu}>
            {t.nav.map((n, i) => (
              <a
                className="text-sm text-white/75 hover:text-white"
                href={"#" + t.ids[i]}
                key={n}
              >
                {n}
              </a>
            ))}
          </nav>
          <div className="flex gap-2">
            <button
              className="rounded-full border border-white/25 px-4 py-2 text-xs font-bold hover:bg-white/10"
              onClick={() => setLang(ar ? "en" : "ar")}
            >
              {t.lang}
            </button>
            <button
              aria-label={t.menu}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/25 lg:hidden"
              onClick={() => setMenu(!menu)}
            >
              <span className="text-xl">{menu ? "×" : "≡"}</span>
            </button>
          </div>
        </div>
      </header>
      <div
        className={`fixed inset-0 z-30 grid place-items-center bg-[#14231d] text-white transition-all lg:hidden ${
          menu ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-7 text-center">
          {t.nav.map((n, i) => (
            <a
              className="text-3xl"
              href={"#" + t.ids[i]}
              key={n}
              onClick={() => setMenu(false)}
            >
              {n}
            </a>
          ))}
        </nav>
      </div>

      <main>
        <section
          id="home"
          className="relative flex min-h-[800px] items-end bg-[#14231d] pb-20 pt-48 text-white md:min-h-[850px] md:pb-24"
        >
          <img
            src={storefront}
            alt="New Paradise storefront"
            className="absolute inset-0 h-full w-full object-cover object-[58%_center]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,19,14,.94),rgba(8,19,14,.65)_53%,rgba(8,19,14,.24))] rtl:bg-[linear-gradient(270deg,rgba(8,19,14,.94),rgba(8,19,14,.65)_53%,rgba(8,19,14,.24))]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1712]/80 via-transparent to-[#0b1712]/20" />
          <div className="relative mx-auto w-full max-w-[1440px] px-5 md:px-10">
            <div className="max-w-[770px]">
              <p className="label text-[#8ee38c]">{t.eyebrow}</p>
              <h1 className="mt-5 text-[clamp(3.7rem,8.2vw,7.7rem)] font-medium leading-[.92] tracking-[-.055em]">
                {t.title}
                <span className="mt-2 block font-serif font-normal italic text-[#8ee38c]">
                  {t.accent}
                </span>
              </h1>
              <p className="mt-7 max-w-[590px] text-base leading-8 text-white/70 md:text-lg">
                {t.hero}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  className="btn btn-green"
                  href={WA}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsApp />
                  {t.chat}
                </a>
                <a className="btn btn-outline" href="tel:+97471875670">
                  <Phone />
                  {t.call}
                </a>
                <a className="btn btn-outline" href="#services">
                  {t.explore}
                  <Arrow flip={ar} />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="border-b border-black/10 bg-white">
          <div className="mx-auto grid max-w-[1440px] divide-y divide-black/10 px-5 py-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-10 rtl:sm:divide-x-reverse">
            {t.stats.map((s, i) => (
              <div
                className="flex items-center justify-center gap-3 py-4 text-sm font-semibold"
                key={s}
              >
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[#dff3dc] text-[10px] text-[#267342]">
                  0{i + 1}
                </span>
                {s}
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="mx-auto grid max-w-[1280px] items-center gap-16 px-5 md:px-10 lg:grid-cols-2 lg:gap-24">
            <div className="relative">
              <img
                src={thobeDisplay}
                alt="Displayed thobe"
                className="aspect-[4/5] h-full w-full object-cover shadow-2xl"
              />
              <div className="absolute -bottom-7 -end-4 w-[43%] border-[7px] border-[#f6f4ee] bg-white p-2 shadow-xl md:-end-9">
                <img
                  src={fabricsWhite}
                  alt="White fabrics"
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>
            <div className="pt-7 lg:pt-0">
              <p className="label text-[#267342]">{t.introK}</p>
              <h2 className="heading mt-5">{t.introT}</h2>
              <p className="copy mt-6">{t.introP}</p>
              <div className="mt-9 flex items-center gap-5">
                <span className="h-px w-14 bg-[#267342]" />
                <i className="font-serif text-xl text-[#267342]">
                  New Paradise
                </i>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section bg-[#13231c] text-white">
          <div className="mx-auto max-w-[1280px] px-5 md:px-10">
            <div className="grid items-end gap-6 lg:grid-cols-[1fr_.65fr]">
              <div>
                <p className="label text-[#8ee38c]">{t.serviceK}</p>
                <h2 className="heading mt-5 text-white">{t.serviceT}</h2>
              </div>
              <p className="copy text-white/55">{t.serviceP}</p>
            </div>
            <div className="mt-14 grid border-t border-white/15 lg:grid-cols-3">
              {t.services.map((s, i) => (
                <article
                  className="group border-b border-white/15 py-10 lg:border-b-0 lg:px-9 lg:not-first:border-s lg:first:ps-0"
                  key={s[1]}
                >
                  <div className="mb-10 flex justify-between">
                    <i className="font-serif text-sm text-[#8ee38c]">{s[0]}</i>
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/50 group-hover:bg-[#8ee38c] group-hover:text-[#13231c]">
                      {i === 0 ? "✂" : i === 1 ? "▧" : "↗"}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold">{s[1]}</h3>
                  <p className="mt-4 leading-7 text-white/55">{s[2]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid lg:min-h-[720px] lg:grid-cols-2">
          <div className="relative min-h-[520px]">
            <img
              src={tailoring}
              alt="Tailor cutting fabric"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute bottom-7 start-7 rounded-full border border-white/30 bg-black/20 px-4 py-2 text-xs text-white backdrop-blur">
              {ar ? "حرفية • دقة • جودة" : "Craft • Precision • Quality"}
            </span>
          </div>
          <div className="flex items-center bg-[#dfeeda] px-5 py-20 md:px-14 lg:px-[8vw]">
            <div>
              <p className="label text-[#267342]">{t.craftK}</p>
              <h2 className="heading mt-5">{t.craftT}</h2>
              <p className="copy mt-6">{t.craftP}</p>
              <ol className="mt-10 border-t border-black/15">
                {t.steps.map((s, i) => (
                  <li
                    className="flex gap-5 border-b border-black/15 py-4"
                    key={s}
                  >
                    <i className="font-serif text-xs text-[#267342]">
                      0{i + 1}
                    </i>
                    <b>{s}</b>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section id="gallery" className="section bg-white">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="label text-[#267342]">{t.galleryK}</p>
                <h2 className="heading mt-5">{t.galleryT}</h2>
              </div>
              <p className="copy max-w-[430px]">{t.galleryP}</p>
            </div>
            <div className="mt-12 grid auto-rows-[230px] grid-cols-2 gap-3 md:auto-rows-[310px] md:grid-cols-4">
              {photos.map((p, i) => (
                <button
                  className={`group relative overflow-hidden ${
                    i === 0 ? "col-span-2 md:row-span-2" : ""
                  } ${i === 3 ? "col-span-2" : ""}`}
                  key={p[1]}
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={p[0]}
                    alt={p[1]}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-black/0 group-hover:bg-black/15" />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section bg-[#efece3]">
          <div className="mx-auto grid max-w-[1280px] overflow-hidden bg-[#13231c] text-white shadow-2xl lg:grid-cols-[.9fr_1.1fr]">
            <div className="px-6 py-16 md:px-14 lg:py-20">
              <p className="label text-[#8ee38c]">{t.visitK}</p>
              <h2 className="heading mt-5 text-white">{t.visitT}</h2>
              <p className="copy mt-5 text-white/60">{t.visitP}</p>
              <div className="mt-9 grid gap-5 sm:grid-cols-2">
                <div>
                  <small className="label text-[#8ee38c]">
                    {ar ? "الموقع" : "LOCATION"}
                  </small>
                  <p className="mt-2 text-sm text-white/80">{t.location}</p>
                </div>
                <div>
                  <small className="label text-[#8ee38c]">
                    {ar ? "للتواصل" : "CONTACT"}
                  </small>
                  <p className="mt-2 text-sm text-white/80">+974 7187 5670</p>
                </div>
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  className="btn btn-green"
                  href={WA}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsApp />
                  {t.chat}
                </a>
                <a className="btn btn-outline" href="tel:+97471875670">
                  <Phone />
                  {t.call}
                </a>
                <a
                  className="btn btn-outline"
                  href={MAP}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.directions}
                </a>
              </div>
            </div>
            <a
              className="map relative min-h-[440px]"
              href={MAP}
              target="_blank"
              rel="noreferrer"
            >
              <span className="absolute inset-0 grid place-items-center">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-[#72df77] text-3xl text-[#13231c] shadow-xl">
                  ⌖
                </span>
              </span>
              <span className="absolute inset-x-5 bottom-5 flex items-center justify-between bg-white p-4 text-[#15221d] shadow-xl">
                <span>
                  <b className="block text-sm">{t.name}</b>
                  <small className="text-[#69736e]">{t.location}</small>
                </span>
                <Arrow flip={ar} />
              </span>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#0d1914] px-5 pb-8 pt-16 text-white md:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-12 md:flex-row md:items-end">
            <div>
              <p className="text-2xl font-semibold">{t.name}</p>
              <i className="mt-2 block font-serif text-lg text-[#8ee38c]">
                {t.sub}
              </i>
            </div>
            <div className="flex flex-col gap-2 text-sm text-white/55">
              <a href="mailto:newparadisemenstailor2@gmail.com">
                newparadisemenstailor2@gmail.com
              </a>
              <a href="tel:+97471875670">+974 7187 5670</a>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 pt-7 text-[11px] text-white/35 sm:flex-row">
            <span>
              © {new Date().getFullYear()} {t.rights} · {t.cr}
            </span>
            <span>
              {t.made}{" "}
              <a
                className="text-white/65 hover:text-[#8ee38c]"
                href="https://www.xenosysweb.com/"
                target="_blank"
                rel="noreferrer"
              >
                @Xenosys Qatar
              </a>{" "}
              · <a href="tel:+97470643918">+974 70643918</a>
            </span>
          </div>
        </div>
      </footer>
      <a
        className="fixed bottom-5 end-5 z-20 grid h-14 w-14 place-items-center rounded-full bg-[#2cbe63] text-white shadow-xl hover:-translate-y-1"
        href={WA}
        target="_blank"
        rel="noreferrer"
        aria-label={t.chat}
      >
        <WhatsApp />
      </a>
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-[#07100c]/95 p-4"
          role="dialog"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute end-5 top-5 h-11 w-11 rounded-full border border-white/25 text-2xl text-white"
            aria-label={t.close}
          >
            ×
          </button>
          <img
            src={photos[lightbox][0]}
            alt={photos[lightbox][1]}
            className="max-h-[88vh] max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
