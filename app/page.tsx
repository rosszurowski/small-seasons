import React, { Suspense } from "react";
import tinytime from "tinytime";
import clsx from "clsx";
import content from "../data/content.json";

export default function HomePage() {
  const sekkis = content.sekki;
  const seasons = sekkis.map((sekki) => sekki.season);

  return (
    <div>
      <Suspense>
        <main>
          <section className="py-16 text-xl leading-normal">
            <div className="w-[90%] mx-auto max-w-[40rem]">
              <div className="my-6 h-[50vh] flex flex-col justify-center">
                A guide to understanding
                <br />
                <span className="text-hakuro">Small Seasons</span>
              </div>
              <p>
                In agricultural days, staying in-tune with the seasons was
                important.{" "}
                <em>
                  When should we plant seeds? When should we harvest? When will
                  the rains come? Are they late this year?
                </em>{" "}
                Knowing what was happening with nature was the difference
                between a plentiful harvest and a barren crop.
              </p>
              <p className="mt-5">
                Prior to the Gregorian calendar, farmers in China and Japan
                broke each year down into 24 <em>sekki</em> or “small seasons.”
                These seasons didn't use dates to mark seasons, but instead,
                they divided up the year by natural phenomena:
              </p>
            </div>
            <div className="w-[90%] mx-auto max-w-7xl">
              <div className="sm:hidden my-16">
                {sekkis.map((sekki) => (
                  <div key={sekki.id} className="py-4 border-b border-black/10">
                    <div className="flex items-center mb-1">
                      {isActiveSekki(sekki.title) && (
                        <div className="mr-6">
                          {/* @ts-expect-error */}
                          <Badge color={sekki.id}>Now</Badge>
                        </div>
                      )}
                      <span className="opacity-50">
                        {formatDate(parseDayOfMonth(sekki.startDate))}
                      </span>
                    </div>
                    <div>
                      <span className="font-bold">{sekki.title}</span>.{" "}
                      {sekki.notes}
                    </div>
                  </div>
                ))}
              </div>
              <div className="hidden sm:block align-middle py-32 text-base xl:text-lg">
                <table className="w-full border-collapse">
                  <thead className="text-left">
                    <tr>
                      <th className={clsx(cellClass, "hidden md:table-cell")}>
                        Season
                      </th>
                      <th
                        className={clsx(cellClass, "hidden md:table-cell")}
                        colSpan={2}
                      >
                        Name
                      </th>
                      <th className={cellClass}>Meaning</th>
                      <th className={cellClass}>Associations</th>
                      <th className={cellClass} />
                      <th className={cellClass}>Approx. Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sekkis.map((sekki, i) => {
                      const isActive = isActiveSekki(sekki.title);

                      return (
                        <tr key={sekki.id}>
                          <td className="hidden md:table-cell">
                            <div className={cellClass}>
                              {seasons.indexOf(sekki.season) === i
                                ? titleize(sekki.season)
                                : ""}
                            </div>
                          </td>
                          <td className="hidden md:table-cell">
                            <div className={cellClass}>
                              {titleize(sekki.romanji)}
                            </div>
                          </td>
                          <td className="hidden md:table-cell">
                            <div className={cellClass}>
                              <span className="text-base tracking-wide whitespace-nowrap">
                                {sekki.kanji}
                              </span>
                            </div>
                          </td>
                          <td>
                            <div className={cellClass}>{sekki.title}</div>
                          </td>
                          <td>
                            <div className={cellClass}>{sekki.notes}</div>
                          </td>
                          <td>
                            {isActive && (
                              <div className={cellClass}>
                                <div className="mr-4">
                                  {/* @ts-expect-error */}
                                  <Badge color={sekki.id}>Now</Badge>
                                </div>
                              </div>
                            )}
                          </td>
                          <td>
                            <div className={cellClass}>
                              {formatDate(parseDayOfMonth(sekki.startDate))}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-[90%] mx-auto max-w-[40rem]">
              <p>
                Living in cities, most of us don’t need to know if the rains are
                late this year, or when the bushwarblers will start warbling.
              </p>
              <p className="mt-5">
                But it's nice to have a more fine-grained way of thinking about
                the year; dividing such a big span of time into four big seasons
                feels really clumsy. Thinking in two week <em>sekki</em> seems
                to match how my life and environment changes a lot better.
              </p>
              <p className="mt-5">
                Follow along with the changing of the seasons on this site, with{" "}
                <a href="https://twitter.com/smallseasonsbot" target="_blank">
                  the @smallseasonsbot twitterbot
                </a>
                , or on your own calendar (
                <a href="https://is.gd/ZtK8JL">Google</a>,{" "}
                <a href="https://gist.github.com/rosszurowski/c7132bf37f7344a775e262619f97ff18">
                  iCal
                </a>
                ). These are a few ways for{" "}
                <a href="https://rosszurowski.com/">me</a> to enshrine this
                idea.
              </p>
              <p className="text-base opacity-50 mt-16">
                I'd love to push this idea further, make it more useful for
                people. If you have ideas of how you'd like to see this stuff,
                throw a note on{" "}
                <a href="https://github.com/rosszurowski/small-seasons">
                  this Github repo
                </a>
                .
              </p>
            </div>
          </section>
        </main>
      </Suspense>
    </div>
  );
}

const formatDate = tinytime("{MM} {DD}").render;
const titleize = (text: string) =>
  text
    .toLowerCase()
    .split(" ")
    .map((i, j) => i.charAt(0).toUpperCase() + i.slice(1))
    .join(" ");

const parseDayOfMonth = (dayOfMonth: string) => {
  const year = new Date().getFullYear();
  const [month, day] = dayOfMonth.split("-").map((n) => Number.parseInt(n, 10));

  return new Date(year, month - 1, day);
};

const isActiveSekki = (title: string) => {
  const i = content.sekki.findIndex((sekki) => sekki.title === title);
  const current = content.sekki[i];
  const next = content.sekki[(i + 1) % content.sekki.length];

  const now = new Date();
  const startDate = parseDayOfMonth(current.startDate);
  const endDate = parseDayOfMonth(next.startDate);

  return startDate <= now && now <= endDate;
};

type Sekki =
  | "shokan"
  | "daikan"
  | "risshun"
  | "usui"
  | "keichitsu"
  | "shunbun"
  | "seimei"
  | "koku"
  | "rikka"
  | "shoman"
  | "boshu"
  | "geshi"
  | "shousho"
  | "taisho"
  | "risshu"
  | "shosho"
  | "hakuro"
  | "shubun"
  | "kanro"
  | "soko"
  | "ritto"
  | "shosetsu"
  | "taisetsu"
  | "toji";

const Badge = ({
  color,
  children,
}: {
  color: Sekki;
  children: React.ReactNode;
}) => (
  <div
    className={clsx(
      `inline-block rounded text-center font-sans px-1.5 py-1.5 tracking-widest text-[11px] leading-none text-white/50 uppercase ls-loose align-middle`,
      {
        "bg-shokan": color === "shokan",
        "bg-daikan": color === "daikan",
        "bg-risshun": color === "risshun",
        "bg-usui": color === "usui",
        "bg-keichitsu": color === "keichitsu",
        "bg-shunbun": color === "shunbun",
        "bg-seimei": color === "seimei",
        "bg-koku": color === "koku",
        "bg-rikka": color === "rikka",
        "bg-shoman": color === "shoman",
        "bg-boshu": color === "boshu",
        "bg-geshi": color === "geshi",
        "bg-shousho": color === "shousho",
        "bg-taisho": color === "taisho",
        "bg-risshu": color === "risshu",
        "bg-shosho": color === "shosho",
        "bg-hakuro": color === "hakuro",
        "bg-shubun": color === "shubun",
        "bg-kanro": color === "kanro",
        "bg-soko": color === "soko",
        "bg-ritto": color === "ritto",
        "bg-shosetsu": color === "shosetsu",
        "bg-taisetsu": color === "taisetsu",
        "bg-toji": color === "toji",
      }
    )}
  >
    {children}
  </div>
);

const cellClass = "p-2";
