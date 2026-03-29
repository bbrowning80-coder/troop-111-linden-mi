export default function TroopWebsiteStarter() {
  const upcomingEvents = [
    { date: "Year-Round", title: "Weekly Troop Meetings", location: "Linden Sportsmans Club" },
    { date: "Monthly", title: "Outdoor Activities & Service", location: "Shared with members directly" },
    { date: "Seasonal", title: "Courts of Honor & Special Events", location: "Shared with families as needed" },
  ];

  const programs = [
    {
      title: "Outdoor Adventure",
      text: "Campouts, hiking, skills weekends, summer camp, and high-adventure opportunities that help Scouts grow through experience.",
    },
    {
      title: "Leadership",
      text: "Youth-led planning and patrol-based teamwork build confidence, communication, and real responsibility.",
    },
    {
      title: "Advancement",
      text: "From Scout rank through Eagle, Scouts set goals, learn skills, and celebrate progress along the way.",
    },
    {
      title: "Service",
      text: "Scouts give back through community service, conservation projects, and helping others at all times.",
    },
  ];

  const faq = [
    {
      q: "Who can join?",
      a: "Troops 111B and 111G are open to boys and girls ages 11–17 who want adventure, leadership, service, and the chance to grow through Scouting.",
    },
    {
      q: "Do I need experience?",
      a: "No. New Scouts are welcome, and older youth help teach skills in a supportive environment.",
    },
    {
      q: "Where do meetings happen?",
      a: "We meet at the Linden Sportsmans Club on Monday nights from 6:30 PM to 8:00 PM.",
    },
    {
      q: "How do families get started?",
      a: "Families can visit a meeting, talk with troop leadership, and use the join section below to take the next step.",
    },
  ];

  const boysTroopQr = "/boys-qr.png";
  const girlsTroopQr = "/girls-qr.png";

  const galleryImages = [
  {
    src: "/photos/campout1.jpg",
    alt: "Troop campout",
    title: "Summer Camp",
  },
  {
    src: "/photos/campout2.jpg",
    alt: "Troop campout activities", 
    title: "Hiking",
  },
  {
    src: "/photos/campout3.jpg",
    alt: "Scouts outdoors",
    title: "Outdoor Skills",
  },
  {
    src: "/photos/high-adventure.jpg",
    alt: "High adventure activity",
    title: "High Adventure",
  },
  {
    src: "/photos/conservation.jpg",
    alt: "Conservation project",
    title: "Conservation",
  },
];

  const photoTips = [
    "Troop meetings and patrol activities",
    "Campouts, hikes, and outdoor skills",
    "Service projects and flag ceremonies",
    "Courts of Honor and special events",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white/90 backdrop-blur sticky top-0 z-20">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Scouting America Logo" className="w-10 h-10 object-contain" />
              <div className="text-2xl font-bold tracking-tight">Troops 111B & 111G</div>
            </div>
            <div className="text-sm text-slate-600">Adventure • Leadership • Service</div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-slate-600">About</a>
            <a href="#program" className="hover:text-slate-600">Program</a>
            <a href="#events" className="hover:text-slate-600">Events</a>
            <a href="#photos" className="hover:text-slate-600">Photos</a>
            <a href="#packing" className="hover:text-slate-600">Packing List</a>
            <a href="#documents" className="hover:text-slate-600">Documents</a>
            <a href="#join" className="hover:text-slate-600">Join</a>
            <a href="#contact" className="hover:text-slate-600">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm mb-5">
              Building character through Scouting
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Troops 111B & 111G in Linden, Michigan
            </h1>
            <p className="mt-6 text-lg text-white/85 max-w-xl leading-relaxed">
              A welcoming Scouting home for boys and girls with outdoor adventure, leadership, service, and a strong troop community.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#join"
                className="rounded-2xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-lg hover:translate-y-[-1px] transition"
              >
                Join the Troops
              </a>
              <a
                href="#events"
                className="rounded-2xl border border-white/25 bg-white/10 px-5 py-3 font-semibold hover:bg-white/15 transition"
              >
                View Highlights
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl bg-white/10 p-6 shadow-2xl backdrop-blur border border-white/10">
              <div className="text-sm uppercase tracking-[0.2em] text-white/70">Meeting Information</div>
              <div className="mt-3 text-2xl font-semibold">Mondays • 6:30 PM to 8:00 PM</div>
              <p className="mt-3 text-white/80 leading-relaxed">
                We meet at the Linden Sportsmans Club and welcome families who want to learn more about Troops 111B and 111G.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-xl">
                <div className="text-3xl font-bold">Youth-Led</div>
                <p className="mt-2 text-sm text-slate-600">Scouts lead, plan, and learn by doing.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-xl">
                <div className="text-3xl font-bold">Active</div>
                <p className="mt-2 text-sm text-slate-600">Meetings, campouts, service, and advancement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          <div className="rounded-3xl bg-white p-8 shadow-sm border">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">About the Troops</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Welcome to Troops 111B & 111G</h2>
            <p className="mt-5 text-slate-700 leading-8">
              Troops 111B and 111G are youth-centered Scouting programs focused on outdoor adventure, leadership development, service, and personal growth. Together, they give families in the Linden community a place for both boys and girls to experience Scouting in an active, welcoming environment.
            </p>
            <p className="mt-4 text-slate-700 leading-8">
              We meet on Monday nights from 6:30 PM to 8:00 PM at the Linden Sportsmans Club. This website is designed to stay simple, useful, and easy to maintain while helping new families learn what our troops are all about.
            </p>
          </div>

          <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-8">
            <h3 className="text-xl font-bold">Quick Info</h3>
            <div className="mt-5 space-y-4 text-sm">
              <div>
                <div className="font-semibold text-slate-900">Meeting Location</div>
                <div className="text-slate-700">Linden Sportsmans Club</div>
              </div>
              <div>
                <div className="font-semibold text-slate-900">Meeting Night</div>
                <div className="text-slate-700">Monday nights, 6:30 PM to 8:00 PM</div>
              </div>
              <div>
                <div className="font-semibold text-slate-900">Troops</div>
                <div className="text-slate-700">Troop 111B for boys and Troop 111G for girls</div>
              </div>
              <div>
                <div className="font-semibold text-slate-900">New Families</div>
                <div className="text-slate-700">Visit a meeting and learn how to join</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Program</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">What Scouts experience</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {programs.map((item) => (
            <div key={item.title} className="rounded-3xl bg-white border p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-slate-700 leading-7">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="events" className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl bg-slate-900 text-white p-8 md:p-10 shadow-xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Overview</div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Year-Round Troop Highlights</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="rounded-3xl bg-white/10 border border-white/10 p-6 backdrop-blur">
                <div className="text-emerald-300 font-semibold">{event.date}</div>
                <div className="mt-2 text-xl font-bold">{event.title}</div>
                <div className="mt-2 text-white/75">{event.location}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-white/70 text-sm">
            For safety and privacy, we do not publish future event details. This section is designed to stay useful without weekly updates by highlighting the kind of program our troops offer year-round.
          </p>
        </div>
      </section>

      <section id="photos" className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between gap-4 mb-8 flex-wrap">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Photos</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">What our troop experience looks like</h2>
            <p className="mt-3 text-slate-700 max-w-3xl leading-8">             
                         </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div key={image.title} className="group overflow-hidden rounded-3xl bg-white border shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="font-semibold text-slate-900">{image.title}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
          <div className="rounded-3xl bg-white border p-6 shadow-sm">
            <h3 className="text-xl font-bold"></h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              {photoTips.map((tip) => (
                <div key={tip} className="rounded-2xl bg-slate-50 border px-4 py-3 text-slate-700">
                  {tip}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-6">
            <h3 className="text-xl font-bold">How we will replace these</h3>
            <p className="mt-3 text-slate-700 leading-8">
              Only approved and appropriate photos should be used. Avoid posting identifiable or sensitive information for youth members.
            </p>
          </div>
        </div>
      </section>

      <section id="packing" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Packing List</div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">What to bring for a typical campout</h2>
          <p className="mt-3 text-slate-700 max-w-3xl leading-8">
            This is a general guide used by Troops 111B & 111G. Specific details for each trip are shared directly with families.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-3xl bg-white border p-6">
            <h3 className="text-xl font-bold">Sleeping Gear</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>Sleeping bag (season appropriate)</li>
              <li>Pillow</li>
              <li>Sleeping pad or air mattress</li>
              <li>Extra blanket (cold weather)</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white border p-6">
            <h3 className="text-xl font-bold">Clothing</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>Class A uniform</li>
              <li>Weather-appropriate clothing</li>
              <li>Extra socks</li>
              <li>Jacket / coat</li>
              <li>Hat and gloves (if needed)</li>
              <li>Sleepwear</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white border p-6">
            <h3 className="text-xl font-bold">Personal Items</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>Toothbrush & toothpaste</li>
              <li>Deodorant</li>
              <li>Medications (if needed)</li>
              <li>Water bottle</li>
              <li>Flashlight or headlamp</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white border p-6">
            <h3 className="text-xl font-bold">Gear</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>Backpack or duffel bag</li>
              <li>Mess kit (if required)</li>
              <li>Pocketknife (if Totin&apos; Chip)</li>
              <li>Rain gear</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white border p-6">
            <h3 className="text-xl font-bold">Do NOT Bring</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>Electronics / gaming devices</li>
              <li>Food in tents</li>
              <li>Valuables</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-6">
            <h3 className="text-xl font-bold">Notes</h3>
            <p className="mt-3 text-slate-700 leading-7">
              Packing lists may vary based on weather and activity. Always check communication from troop leadership before each outing.
            </p>
          </div>
        </div>
      </section>

      <section id="documents" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Documents</div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Parent Resources & Forms</h2>
          <p className="mt-3 text-slate-700 max-w-3xl leading-8">
            Important documents for Troops 111B & 111G families. These are general-use forms and resources that do not change frequently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-3xl bg-white border p-6">
            <h3 className="text-xl font-bold">Medical Forms</h3>
            <p className="mt-3 text-slate-700">Annual BSA medical forms required for participation.</p>
            <a href="/documents/medical-form.pdf" className="mt-4 inline-block text-emerald-700 font-semibold hover:underline">
              Download
            </a>
          </div>

          <div className="rounded-3xl bg-white border p-6">
            <h3 className="text-xl font-bold">Permission Slip</h3>
            <p className="mt-3 text-slate-700">General troop permission form for outings.</p>
            <a href="/documents/permission-slip.pdf" className="mt-4 inline-block text-emerald-700 font-semibold hover:underline">
              Download
            </a>
          </div>

          <div className="rounded-3xl bg-white border p-6">
            <h3 className="text-xl font-bold">Troop Handbook</h3>
            <p className="mt-3 text-slate-700">Overview of troop expectations, structure, and guidelines.</p>
            <a href="/documents/troop-handbook.pdf" className="mt-4 inline-block text-emerald-700 font-semibold hover:underline">
              Download
            </a>
          </div>

          <div className="rounded-3xl bg-white border p-6">
            <h3 className="text-xl font-bold">Packing Lists</h3>
            <p className="mt-3 text-slate-700">Download packing lists for different types of trips.</p>

            <div className="mt-4 space-y-2">
              <a href="/documents/packing-general.pdf" className="block text-emerald-700 font-semibold hover:underline">
                General Campout
              </a>
              <a href="/documents/packing-cold-weather.pdf" className="block text-emerald-700 font-semibold hover:underline">
                Cold Weather
              </a>
              <a href="/documents/packing-summer-camp.pdf" className="block text-emerald-700 font-semibold hover:underline">
                Summer Camp
              </a>
              <a href="/documents/packing-backpacking.pdf" className="block text-emerald-700 font-semibold hover:underline">
                Backpacking
              </a>
              <a href="/documents/packing-first-campout.pdf" className="block text-emerald-700 font-semibold hover:underline">
                First Campout
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white border p-6">
            <h3 className="text-xl font-bold">Code of Conduct</h3>
            <p className="mt-3 text-slate-700">Expectations for behavior and troop standards.</p>
            <a href="/documents/code-of-conduct.pdf" className="mt-4 inline-block text-emerald-700 font-semibold hover:underline">
              Download
            </a>
          </div>

          <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-6">
            <h3 className="text-xl font-bold">Notes</h3>
            <p className="mt-3 text-slate-700 leading-7">
              Documents are updated as needed but generally remain consistent throughout the year. Families will be notified directly if updates are required.
            </p>
          </div>
        </div>
      </section>

      <section id="join" className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl bg-white p-8 border shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Join</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Interested in joining?</h2>
            <p className="mt-4 text-slate-700 leading-8">
              Families are welcome to visit a troop meeting, meet the leadership team, and learn how our program works. The site is intentionally built around evergreen information so it only needs occasional updates instead of constant weekly maintenance.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-5">
              <div className="rounded-3xl border bg-slate-50 p-5">
                <div className="text-lg font-bold">Troop 111B</div>
                <div className="mt-2 text-slate-700">Boys troop</div>
                <div className="mt-4 rounded-2xl bg-white p-4 border inline-block">
                  <img src={boysTroopQr} alt="QR code to join Troop 111B" className="w-40 h-40 object-contain" />
                </div>
                <p className="mt-3 text-sm text-slate-600">Scan to join the boys troop.</p>
              </div>
              <div className="rounded-3xl border bg-slate-50 p-5">
                <div className="text-lg font-bold">Troop 111G</div>
                <div className="mt-2 text-slate-700">Girls troop</div>
                <div className="mt-4 rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-500">
                  <img src={girlsTroopQr} alt="QR code to join Troop 111G" className="w-40 h-40 object-contain" />
                </div>
                <p className="mt-3 text-sm text-slate-600">Scan to join the girls troop.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-100 p-8 border">
            <h3 className="text-2xl font-bold">Common questions</h3>
            <div className="mt-6 space-y-5">
              {faq.map((item) => (
                <div key={item.q} className="rounded-2xl bg-white p-5 border">
                  <div className="font-semibold">{item.q}</div>
                  <div className="mt-2 text-slate-700 leading-7">{item.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl bg-white p-8 md:p-10 border shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Contact</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Contact Us</h2>
            <p className="mt-3 text-slate-700 max-w-2xl leading-8">
              Email us at lindenbsatroop111@gmail.com or visit a meeting at the Linden Sportsmans Club to learn more about Troops 111B and 111G.
            </p>
          </div>
          <div className="rounded-3xl bg-emerald-700 text-white px-6 py-5 min-w-[250px]">
            <div className="text-sm text-white/80">Meeting Info</div>
            <div className="mt-1 text-lg font-semibold">Mondays, 6:30-8:00 PM</div>
            <div className="mt-4 text-sm text-white/80">Meeting Location</div>
            <div className="mt-1 font-medium">Linden Sportsmans Club</div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-sm text-slate-600">
          <div>© 2026 Troops 111B & 111G. All rights reserved.</div>
          <div>Built for families, Scouts, and future members.</div>
        </div>
      </footer>
    </div>
  );
}