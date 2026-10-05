/* SIF Watch — app.js
 *
 * HOW TO ADD AN UPDATE:
 *   1. Copy one of the objects in the UPDATES array below.
 *   2. Paste it at the TOP of the array (newest first).
 *   3. Fill in date, tag, title, text, and link. Push — the page renders it.
 */

/* The 120-day report deadline: announced Oct 4, 2026 → due Feb 1, 2027 */
const DEADLINE = new Date('2027-02-01T00:00:00Z');

function tick() {
  const now = new Date();
  let diff = DEADLINE - now;
  if (diff < 0) diff = 0;
  const d = Math.floor(diff / 864e5);
  const h = Math.floor(diff / 36e5) % 24;
  const m = Math.floor(diff / 6e4) % 60;
  const s = Math.floor(diff / 1e3) % 60;
  const pad = (n) => String(n).padStart(2, '0');
  document.getElementById('cd-days').textContent = d;
  document.getElementById('cd-hours').textContent = pad(h);
  document.getElementById('cd-mins').textContent = pad(m);
  document.getElementById('cd-secs').textContent = pad(s);
  document.getElementById('navCount').textContent =
    d + 'd ' + pad(h) + 'h ' + pad(m) + 'm left';
}
tick();
setInterval(tick, 1000);

/* ---------------- Timeline (oldest → newest) ---------------- */
const TIMELINE = [
  {
    date: 'Sep 20, 2026',
    title: 'Trump floats an "AI Force"',
    text: 'Reports emerge that Trump plans to create an AI Force modeled on the Space Force he established in his first term — and appoint an AI czar to coordinate federal efforts.'
  },
  {
    date: 'Sep 29, 2026',
    title: 'Executive order: "Inaugurating the Era of Super Intelligence"',
    text: 'Trump signs the order directing every executive-branch agency to replace "Artificial Intelligence" and "AI" with "Super Intelligence" and "SI" in official communications. White House officials get 60 days to draft statutory language defining the term for Congress.'
  },
  {
    date: 'Oct 3, 2026',
    title: 'WSJ: Clayton tapped as AI czar',
    text: 'The Wall Street Journal reports that Director of National Intelligence Jay Clayton will lead the new task force, which gets 120 days to report on AI risks and opportunities. "The risk of not being first is high," Clayton tells the Journal.'
  },
  {
    date: 'Oct 4, 2026',
    title: 'Trump announces the Super Intelligence Force',
    text: 'In a Truth Social post, Trump formally creates the SIF and names its four leaders: Clayton (chair), FTC Chairman Andrew Ferguson, Pentagon CTO Emil Michael, and OPM Director Scott Kupor as vice chairs. The Force reports to Trump and Chief of Staff Susie Wiles.'
  },
  {
    date: 'Oct 4, 2026',
    title: 'Musk: SpaceXAI becomes SpaceXSI',
    text: 'Elon Musk confirms on X that SpaceX\'s AI arm will be renamed SpaceXSI after a user suggests it. "Yes, we will make that change," he writes, adding: "No more AI. SI, it\'s better."'
  },
  {
    date: '~Nov 28, 2026',
    title: '60-day mark: statutory language due',
    text: 'Deadline for White House officials to propose formal legislative language defining "Super Intelligence" — which could put the rebrand before Congress.',
    future: true
  },
  {
    date: 'Feb 1, 2027',
    title: '120-day report due',
    text: 'The Super Intelligence Force\'s report on AI risks, opportunities, and the federal government\'s role is due. This is what the countdown above is tracking.',
    future: true
  }
];

const tlEl = document.getElementById('timelineList');
TIMELINE.forEach((t) => {
  const div = document.createElement('div');
  div.className = 'tl-item' + (t.future ? ' future' : '');
  div.innerHTML =
    '<p class="tl-date">' + t.date + '</p><h4>' + t.title + '</h4><p>' + t.text + '</p>';
  tlEl.appendChild(div);
});

/* ---------------- Latest updates (newest first) ---------------- */
const UPDATES = [
  {
    date: 'Oct 5, 2026',
    tag: 'Industry',
    title: 'Musk confirms SpaceXAI → SpaceXSI rebrand',
    text: 'Elon Musk confirmed on X that SpaceX\'s artificial intelligence arm, created in July after the xAI acquisition, will be renamed SpaceXSI — voluntarily adopting Trump\'s "SI" terminology. No rollout date announced; the unit\'s site still showed the old name on Sunday.',
    link: 'https://foxbusiness.com/technology/elon-musk-rebrands-spacexai-following-trump-directive',
    linkLabel: 'Fox Business'
  },
  {
    date: 'Oct 4, 2026',
    tag: 'Announcement',
    title: 'Trump creates the Super Intelligence Force on Truth Social',
    text: 'The Sunday-morning post names the four leaders — DNI Jay Clayton as chair, with FTC Chairman Andrew Ferguson, Pentagon CTO Emil Michael, and OPM Director Scott Kupor as vice chairs — and says the Force will coordinate federal engagement with "Super Intelligence Companies," religious groups, and public-interest organizations.',
    link: 'https://www.usatoday.com/story/news/politics/2026/10/04/jay-clayton-super-intelligence-force-ai/92089693007/',
    linkLabel: 'USA Today'
  },
  {
    date: 'Oct 4, 2026',
    tag: 'Details',
    title: 'WSJ: 120-day clock, charter, and the wider roster',
    text: 'The Journal reports the task force\'s charter: design defenses against threats from advanced AI systems while blocking heavy-handed rules and industry capture. Also named as members: VP JD Vance, Defense Secretary Pete Hegseth, Treasury Secretary Scott Bessent, and deputy chief of staff Richard Walters — with David Sacks and Condoleezza Rice as outside advisers.',
    link: 'https://www.techcrunch.com/2026/10/04/trump-unveils-his-new-super-intelligence-force/',
    linkLabel: 'TechCrunch'
  },
  {
    date: 'Oct 3, 2026',
    tag: 'Report',
    title: 'WSJ first reports Clayton will lead the AI push',
    text: 'A day before the announcement, the Journal\'s interview with Clayton revealed the plan: a new White House panel with 120 days to assess AI risks and opportunities and recommend the federal role. Clayton: "The risk of not being first is high."',
    link: 'https://wncy.com/2026/10/03/jay-clayton-to-lead-trumps-ai-task-force-deliver-report-in-120-days-wsj-reports/',
    linkLabel: 'Reuters'
  },
  {
    date: 'Sep 29, 2026',
    tag: 'Executive order',
    title: '"Inaugurating the Era of Super Intelligence" signed',
    text: 'The order rebrands AI as "Super Intelligence" across the executive branch and tasks the Assistant to the President for Science and Technology with proposing a federal definition of the term. Congressional statutes are exempt until Congress acts.',
    link: 'https://www.bbntimes.com/technology/trump-launches-super-intelligence-force-sif-who-leads-it-what-it-does-and-why-it-matters',
    linkLabel: 'BBN Times'
  }
];

const upEl = document.getElementById('updatesList');
UPDATES.forEach((u) => {
  const div = document.createElement('div');
  div.className = 'update';
  div.innerHTML =
    '<span class="tag">' + u.tag + '</span>' +
    '<p class="update-date">' + u.date + '</p>' +
    '<h4><a href="' + u.link + '" target="_blank" rel="noopener">' + u.title + '</a></h4>' +
    '<p>' + u.text + ' <a href="' + u.link + '" target="_blank" rel="noopener">[' + u.linkLabel + ']</a></p>';
  upEl.appendChild(div);
});

/* ---------------- FAQ accordion ---------------- */
const FAQS = [
  {
    q: 'What exactly is the Super Intelligence Force?',
    a: 'A White House task force announced October 4, 2026, to coordinate the federal government\'s approach to artificial intelligence — which the administration now calls "Super Intelligence." It\'s led by Director of National Intelligence Jay Clayton and reports directly to President Trump and Chief of Staff Susie Wiles.'
  },
  {
    q: 'Why "Super Intelligence" instead of "AI"?',
    a: 'On September 29, 2026, Trump signed an executive order, "Inaugurating the Era of Super Intelligence," arguing the new term better reflects the technology\'s capabilities. He even polled followers on X and Truth Social first — alternatives included "superior intelligence" and "supreme intelligence." The order applies to the executive branch; it doesn\'t change laws passed by Congress.'
  },
  {
    q: 'Who\'s in charge?',
    a: 'Jay Clayton chairs the Force, effectively the administration\'s "SI czar." Three vice chairs serve under him: FTC Chairman Andrew Ferguson, Pentagon research chief and CTO Emil Michael, and OPM Director Scott Kupor. VP JD Vance, Defense Secretary Pete Hegseth, and Treasury Secretary Scott Bessent are also members, per the Wall Street Journal.'
  },
  {
    q: 'What must the 120-day report cover?',
    a: 'The risks and opportunities of advanced AI, what role the federal government should play, a review of existing reporting mechanisms for AI-related breaches and hacks, and ways to strengthen the federal response. The charter also tells the Force to design defenses against advanced-system threats while avoiding heavy-handed regulation and industry capture.'
  },
  {
    q: 'What happens on February 1, 2027?',
    a: 'That\'s the deadline for the report — 120 days from the October 4 announcement. What the White House and Congress do with its recommendations is the real story, and this page will track it.'
  },
  {
    q: 'Does the rename order force private companies to say "SI"?',
    a: 'No. The executive order covers the executive branch only. Elon Musk\'s decision to rename SpaceXAI to SpaceXSI was voluntary — he agreed on X after a user suggested it.'
  },
  {
    q: 'Is Clayton still running U.S. intelligence too?',
    a: 'Yes — he\'s expected to remain Director of National Intelligence while chairing the Force, a dual role that underscores how the White House views AI: primarily as a national-security race.'
  },
  {
    q: 'Why does any of this matter?',
    a: 'Because the U.S.–China AI race is now being run out of the intelligence chief\'s office, and the resulting report could shape American AI policy for years. Public concern is high: a recent Quinnipiac poll found 73% of Americans worried AI could threaten human survival.'
  }
];

const faqEl = document.getElementById('faqList');
FAQS.forEach((f) => {
  const div = document.createElement('div');
  div.className = 'faq-item';
  div.innerHTML =
    '<button class="faq-q">' + f.q + '<span class="plus">+</span></button>' +
    '<div class="faq-a"><p>' + f.a + '</p></div>';
  const btn = div.querySelector('.faq-q');
  const ans = div.querySelector('.faq-a');
  btn.addEventListener('click', () => {
    const open = div.classList.toggle('open');
    ans.style.maxHeight = open ? ans.scrollHeight + 'px' : '0';
  });
  faqEl.appendChild(div);
});
