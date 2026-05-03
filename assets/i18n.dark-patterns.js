/* i18n bag for blog/dark-patterns.html (20 patterns, 5 categories).
   Extends shell keys (loaded earlier from i18n.shell.js). */
(function(){
  window.I18N = window.I18N || { en: {}, uk: {} };

  Object.assign(window.I18N.en, {
    "dp.kicker.tag": "DESIGN · ETHICS · PATTERNS",
    "dp.title":      "Dark patterns. 20 ways interfaces steal your time, money, and data.",
    "dp.author":     "DMYTRO SHAIN",
    "dp.read":       "12 MIN READ",

    "dp.intro.1":    "Good UX is honest UX.",
    "dp.intro.2":    "Not really.",
    "dp.intro.3":    "Half the products you use every day are designed so you do what the business wants, not what you want. This isn't a bug. It's a feature. Designers have a name for it: dark patterns. Harry Brignull mapped them out in 2010 and runs the catalog at deceptive.design. Modern taxonomy groups them into five families.",
    "dp.intro.4":    "Twenty patterns you bump into every week. By family.",

    /* === SNEAKING === */
    "dp.cat.sneak":     "Sneaking",
    "dp.cat.sneak.sub": "Hiding information that would change your decision.",

    "dp.p.01.h":   "01 / Hidden costs",
    "dp.p.01.sub": "The checkout surprise.",
    "dp.p.01.body":"Price on the page: $89. At checkout: $112. Service fee, processing fee, bullshit fee. Resort fee, urban destination fee. EU regulates this through the Digital Services Act. From January 2024 the displayed price must include all mandatory fees. Fines are still symbolic, so companies keep doing it.",
    "dp.cap.01":   "FIG · CART VS CHECKOUT TOTAL",

    "dp.p.02.h":   "02 / Sneak into basket",
    "dp.p.02.sub": "Things you didn't ask for, in your cart.",
    "dp.p.02.body":"You added a $40 jacket. At checkout an \"extended return protection\" is pre-checked at $7. EU consumer surveys in 2023 found this in roughly 30% of fashion checkouts. Default greed, monetized.",
    "dp.cap.02":   "FIG · AN ITEM YOU NEVER ADDED",

    "dp.p.03.h":   "03 / Bait and switch",
    "dp.p.03.sub": "The promise wasn't the product.",
    "dp.p.03.body":"\"Get free trial\" → enter card → fine print: \"$49 charged after 7 days unless cancelled.\" The promise was free, the action triggered a paid path. Microsoft was sued in 2016 over Windows 10 upgrade prompts where clicking the X to close counted as consent.",

    "dp.p.04.h":   "04 / Forced continuity",
    "dp.p.04.sub": "Auto-renewal you'll forget.",
    "dp.p.04.body":"Free trial. No reminder before the charge. Day 8 - $99 gone. The FTC sued Adobe in 2024 over hidden cancellation fees on annual subscriptions disguised as monthly billing.",
    "dp.cap.04":   "FIG · NO REMINDER BETWEEN SIGNUP AND CHARGE",

    /* === URGENCY === */
    "dp.cat.urgency":     "Urgency",
    "dp.cat.urgency.sub": "Pushing a decision before you're ready.",

    "dp.p.05.h":   "05 / Confirmshaming",
    "dp.p.05.sub": "They shame you for saying no.",
    "dp.p.05.body":"Popup: \"Subscribe for deals!\" Two buttons. <em>Yes, save me money</em> - bright, green, in your face. <em>No, I don't want to save money</em> - tiny, gray, bottom of the modal. Most people just click yes to make the tone go away.",
    "dp.cap.05":   "FIG · DECLINE OPTION DEMOTED",

    "dp.p.06.h":   "06 / Manufactured urgency",
    "dp.p.06.sub": "Fake countdowns.",
    "dp.p.06.body":"<em>5 people are looking at this room right now.</em> <em>Only 1 ticket left at this price.</em> Booking got a warning from the EU Commission in 2019 - part of those counters weren't from real data. Pure RNG. Works through FOMO. Works even on people who know how it works.",
    "dp.cap.06":   "FIG · A COUNTER WITHOUT A REAL SOURCE",

    "dp.p.07.h":   "07 / Fake social proof",
    "dp.p.07.sub": "Invented testimonials.",
    "dp.p.07.body":"\"Sarah from Berlin just bought this!\" Notification slides in every 30 seconds. The data is fake. Most \"social proof\" plugins on Shopify generate from a name list and a city list. No real purchases happening, just RNG.",
    "dp.cap.07":   "FIG · NAMES + CITIES, GENERATED ON LOAD",

    "dp.p.08.h":   "08 / Nagging",
    "dp.p.08.sub": "They wear you down.",
    "dp.p.08.body":"You said no to the email signup. Three pages later, same popup. After cookies set, the \"no\" expires in 24 hours. Some sites refresh the prompt every session. Persistent enough that you eventually cave.",

    /* === OBSTRUCTION === */
    "dp.cat.obstruct":     "Obstruction",
    "dp.cat.obstruct.sub": "Making it artificially hard to do what you want.",

    "dp.p.09.h":   "09 / Roach motel",
    "dp.p.09.sub": "Easy to enter, impossible to leave.",
    "dp.p.09.body":"Subscribe: three clicks. Cancel: seven screens, a support chat, a call to your bank. The FTC sued Amazon in 2023 - court docs revealed an internal project called <em>Iliad</em> (the long Greek epic). Designers were asked to deliberately complicate the cancellation flow. Not an accident.",
    "dp.cap.09":   "FIG · ASYMMETRIC ENTRY VS EXIT",

    "dp.p.10.h":   "10 / Disguised unsubscribe",
    "dp.p.10.sub": "The link you can't find.",
    "dp.p.10.body":"Unsubscribe is gray-on-gray, 9px, at the bottom of an 800px-tall email. Or \"Manage preferences\" → seventeen toggles → \"Save changes\" → confirmation popup. CAN-SPAM and GDPR both require easy unsubscribe. Still everywhere.",

    "dp.p.11.h":   "11 / Privacy maze",
    "dp.p.11.sub": "Settings scattered across six menus.",
    "dp.p.11.body":"\"Adjust privacy\" → Account, Ads, Apps, Notifications, Personalization, Activity. Six tabs, each with their own opt-out. By design - discouraging users from completing the full opt-out journey.",
    "dp.cap.11":   "FIG · DROP-OFF BY DESIGN",

    "dp.p.12.h":   "12 / Cookie consent maze",
    "dp.p.12.sub": "One-click yes, twenty-click no.",
    "dp.p.12.body":"\"Accept all\" - one big button, top right. \"Reject all\" - hidden behind \"Manage preferences\" → 47 vendor toggles → \"Save changes\". GDPR enforcement letters in 2023-2024 specifically called out this asymmetry as a violation.",

    /* === FORCED ACTION === */
    "dp.cat.force":     "Forced action",
    "dp.cat.force.sub": "Demanding more than the task requires.",

    "dp.p.13.h":   "13 / Forced enrollment",
    "dp.p.13.sub": "Account before content.",
    "dp.p.13.body":"You wanted one article. The site demands email signup before the page loads. Or \"Continue with Google\" is the only visible option - email signup hidden behind a tiny gray link.",

    "dp.p.14.h":   "14 / Friend spam",
    "dp.p.14.sub": "Your address book gets weaponized.",
    "dp.p.14.body":"LinkedIn settled a $13M class action in 2015 over \"Add Connections\" - the feature pulled users' entire address books and sent invites to all contacts as if from the user. Legally framed as opt-in. Almost nobody understood what they consented to.",

    "dp.p.15.h":   "15 / Privacy zuckering",
    "dp.p.15.sub": "Defaults that leak more than you expect.",
    "dp.p.15.body":"Defaults set to maximum data collection. Settings can be tightened, but you have to know they exist. Facebook ran this playbook for years - posts default to \"everyone\" instead of \"friends,\" ad personalization on by default, location tracking quietly enabled.",

    "dp.p.16.h":   "16 / Forced disclosure",
    "dp.p.16.sub": "Required fields with no relation to the service.",
    "dp.p.16.body":"Signup asks for phone, address, birthday, gender, household size, occupation. None of it required to deliver the service. All of it sold to data brokers or fed to ad targeting. The required-field asterisk doesn't ask why.",

    /* === MISDIRECTION === */
    "dp.cat.misdir":     "Misdirection",
    "dp.cat.misdir.sub": "Visual and verbal sleight of hand.",

    "dp.p.17.h":   "17 / Misdirection",
    "dp.p.17.sub": "The design already decided.",
    "dp.p.17.body":"<em>Cancel</em> - tiny, gray, on the left. <em>Confirm subscription at $99/mo</em> - big, colored, on the right. You haven't decided anything yet - the design already decided for you. This isn't called manipulation in the industry. It's \"good visual hierarchy.\"",
    "dp.cap.17":   "FIG · WEIGHT IS THE OPINION OF THE DESIGN",

    "dp.p.18.h":   "18 / Preselection",
    "dp.p.18.sub": "Default opt-ins.",
    "dp.p.18.body":"Five checkboxes on signup. Three pre-checked: marketing emails, partner offers, data sharing with third parties. You miss them, sign up, leak. GDPR explicitly bans pre-ticked boxes for consent. Enforcement is patchy outside major regulators.",
    "dp.cap.18":   "FIG · CONSENT BY DEFAULT",

    "dp.p.19.h":   "19 / Visual interference",
    "dp.p.19.sub": "Important info, deliberately hard to read.",
    "dp.p.19.body":"Fee disclosure rendered at 8px gray-on-gray. The decline button styled as if disabled. Critical terms behind \"Learn more\" that doesn't render on mobile. Anti-readability is a design choice, not an accident.",

    "dp.p.20.h":   "20 / Trick questions",
    "dp.p.20.sub": "Double negatives in checkboxes.",
    "dp.p.20.body":"Checkbox: <em>I do not want to not receive emails.</em> Yes or no? Written that way on purpose so you fumble and tick \"in favor of\" the service. Classic case: free software installers. Toolbar, browser hijacker, antivirus trial - all bundled under one big \"Next\" and three confusing boxes.",
    "dp.cap.20":   "FIG · A CHECKBOX YOU CANNOT PARSE",

    /* === OUTRO === */
    "dp.outro.1": "The worst part - none of this is a mistake. Not \"bad UX.\" It's deliberate design. Metric first, interface second. Conversion ↑, NPS ↓ three months later. But nobody checks NPS in a sprint review.",
    "dp.outro.2": "What do you do as a designer? Say no, with conviction, when a brief tries to turn you into a mechanic for stealing time and money. In 2024 the EU sues for this. In 2025 - the US. The debt comes due eventually.",
    "dp.outro.3": "For now, just notice. Next time you see a button labeled <em>No thanks, I love overpaying</em> - remember it's not an accident. It's the work."
  });

  Object.assign(window.I18N.uk, {
    "dp.kicker.tag": "ДИЗАЙН · ЕТИКА · ПАТЕРНИ",
    "dp.title":      "Dark patterns. 20 способів, як інтерфейси крадуть твій час, гроші і дані.",
    "dp.author":     "ДМИТРО ШЕЙН",
    "dp.read":       "12 ХВ ЧИТАННЯ",

    "dp.intro.1":    "Гарний UX - чесний UX.",
    "dp.intro.2":    "Не зовсім.",
    "dp.intro.3":    "Половина продуктів, якими ти користуєшся щодня, спроєктована так, щоб ти зробив не те, що хочеш ти, а те, що хоче бізнес. Це не баг. Це фіча. У дизайнерів є для цього термін - dark patterns. Систематизував їх Harry Brignull у 2010, веде каталог на deceptive.design. Сучасна таксономія розкладає їх на п'ять родин.",
    "dp.intro.4":    "Двадцять патернів, з якими ти стикаєшся щотижня. По родинах.",

    /* === SNEAKING === */
    "dp.cat.sneak":     "Прокрадання",
    "dp.cat.sneak.sub": "Ховають інформацію, яка змінила б твоє рішення.",

    "dp.p.01.h":   "01 / Hidden costs",
    "dp.p.01.sub": "Сюрприз на чекауті.",
    "dp.p.01.body":"Ціна на сторінці $89. На чекауті - $112. Service fee, processing fee, bullshit fee. Resort fee, urban destination fee. EU регулює це через Digital Services Act, з січня 2024 ціна має містити всі обов'язкові збори. Штрафи поки символічні, тому компанії продовжують.",
    "dp.cap.01":   "ІЛ · КОШИК VS ФІНАЛЬНА СУМА",

    "dp.p.02.h":   "02 / Sneak into basket",
    "dp.p.02.sub": "Те, що ти не додавав, у твоєму кошику.",
    "dp.p.02.body":"Ти додав куртку за $40. На чекауті там же лежить «розширена гарантія повернення» за $7, з пре-чекнутою галочкою. Споживчі дослідження EU у 2023 знайшли цей патерн в ~30% fashion-чекаутів. Жадібність по дефолту, монетизована.",
    "dp.cap.02":   "ІЛ · ТОВАР, ЯКИЙ ТИ НЕ ДОДАВАВ",

    "dp.p.03.h":   "03 / Bait and switch",
    "dp.p.03.sub": "Обіцянка - не продукт.",
    "dp.p.03.body":"«Get free trial» → ввів картку → дрібний шрифт: «$49 спишеться через 7 днів, якщо не скасуєш». Обіцянка була безкоштовно, а дія запустила платний шлях. Microsoft судили у 2016 за патерн з Windows 10 - клік на хрестик «закрити» зараховувався як згода на оновлення.",

    "dp.p.04.h":   "04 / Forced continuity",
    "dp.p.04.sub": "Авто-продовження, яке ти забудеш.",
    "dp.p.04.body":"Free trial. Жодного нагадування перед списанням. День 8 - $99 з картки. FTC судилися з Adobe у 2024 за приховані штрафи за скасування на річних підписках, замаскованих під щомісячну оплату.",
    "dp.cap.04":   "ІЛ · НІ ОДНОГО НАГАДУВАННЯ ДО СПИСАННЯ",

    /* === URGENCY === */
    "dp.cat.urgency":     "Терміновість",
    "dp.cat.urgency.sub": "Тиснуть на рішення раніше, ніж ти готовий.",

    "dp.p.05.h":   "05 / Confirmshaming",
    "dp.p.05.sub": "Тебе соромлять за відмову.",
    "dp.p.05.body":"Поп-ап: «Підпишись на знижки!» Кнопок дві. <em>Так, хочу економити</em> - яскрава, зелена, одразу впадає в очі. <em>Ні, я не хочу економити</em> - дрібна, сіра, у самому низу. Більшість людей тиснуть «так», просто щоб не бачити цей tone.",
    "dp.cap.05":   "ІЛ · КНОПКА ВІДМОВИ ВТИСНУТА У КУТ",

    "dp.p.06.h":   "06 / Manufactured urgency",
    "dp.p.06.sub": "Вигадана терміновість.",
    "dp.p.06.body":"<em>5 людей зараз дивляться на цей номер.</em> <em>Залишився 1 квиток за цією ціною.</em> Booking отримав попередження від EU Commission у 2019 - частина цих лічильників не базувалася на реальних даних. Просто рандом. Працює через FOMO. Спрацьовує навіть на людях, які знають, як це працює.",
    "dp.cap.06":   "ІЛ · ЛІЧИЛЬНИК БЕЗ РЕАЛЬНОГО ДЖЕРЕЛА",

    "dp.p.07.h":   "07 / Fake social proof",
    "dp.p.07.sub": "Вигадані відгуки.",
    "dp.p.07.body":"«Sarah з Берліну щойно купила це!» Нотифікація з'являється кожні 30 секунд. Дані - вигадка. Більшість «social proof» плагінів на Shopify генерують з name list і city list. Жодних реальних покупок. Просто RNG.",
    "dp.cap.07":   "ІЛ · ІМЕНА + МІСТА, ЗГЕНЕРОВАНІ НА ЛЬОТУ",

    "dp.p.08.h":   "08 / Nagging",
    "dp.p.08.sub": "Тебе перетирають.",
    "dp.p.08.body":"Ти сказав «ні» на email-форму. Через три сторінки - той самий поп-ап. Після того як cookies згоріли, твоє «ні» діє 24 години. Деякі сайти оновлюють prompt кожну сесію. Достатньо настирливо, щоб ти зрештою здався.",

    /* === OBSTRUCTION === */
    "dp.cat.obstruct":     "Перешкоди",
    "dp.cat.obstruct.sub": "Штучно ускладнюють те, що ти хочеш зробити.",

    "dp.p.09.h":   "09 / Roach motel",
    "dp.p.09.sub": "Легко увійти, неможливо вийти.",
    "dp.p.09.body":"Підписатися - три кліки. Скасувати - сім екранів, чат з підтримкою, дзвінок у банк. FTC судилися з Amazon у 2023 - у судових документах був окремий внутрішній проєкт під назвою <em>Iliad</em> (грецька епопея, яку складно завершити). Дизайнерів просили навмисно ускладнити cancellation flow. Не випадковість.",
    "dp.cap.09":   "ІЛ · АСИМЕТРІЯ ВХОДУ І ВИХОДУ",

    "dp.p.10.h":   "10 / Disguised unsubscribe",
    "dp.p.10.sub": "Лінк, який не знайдеш.",
    "dp.p.10.body":"Unsubscribe сірим по сірому, 9px, у самому низу email-листа на 800px заввишки. Або «Manage preferences» → сімнадцять тогглів → «Save changes» → підтверджуючий поп-ап. CAN-SPAM і GDPR обидва вимагають легкого unsubscribe. Все одно скрізь.",

    "dp.p.11.h":   "11 / Privacy maze",
    "dp.p.11.sub": "Налаштування розкидані по шести меню.",
    "dp.p.11.body":"«Adjust privacy» → Account, Ads, Apps, Notifications, Personalization, Activity. Шість табів, у кожній свій opt-out. За дизайном - щоб користувач не дійшов до кінця opt-out шляху.",
    "dp.cap.11":   "ІЛ · ВТРАТА КОРИСТУВАЧА ЗА ДИЗАЙНОМ",

    "dp.p.12.h":   "12 / Cookie consent maze",
    "dp.p.12.sub": "В один клік «так», у двадцять «ні».",
    "dp.p.12.body":"«Accept all» - одна велика кнопка зверху-справа. «Reject all» - захована за «Manage preferences» → 47 vendor-тогглів → «Save changes». Лист GDPR-правозастосування у 2023-2024 окремо вказував на цю асиметрію як на порушення.",

    /* === FORCED ACTION === */
    "dp.cat.force":     "Примусова дія",
    "dp.cat.force.sub": "Вимагають більше, ніж потрібно для задачі.",

    "dp.p.13.h":   "13 / Forced enrollment",
    "dp.p.13.sub": "Акаунт - перш ніж контент.",
    "dp.p.13.body":"Ти хотів прочитати одну статтю. Сайт вимагає реєстрації по email до завантаження сторінки. Або «Continue with Google» - єдина видима опція, а email-реєстрація захована за дрібним сірим лінком.",

    "dp.p.14.h":   "14 / Friend spam",
    "dp.p.14.sub": "Твою адресну книгу перетворюють на зброю.",
    "dp.p.14.body":"LinkedIn у 2015 заплатили $13M по класовому позову за «Add Connections» - функція тягнула всю адресну книгу користувача і слала запрошення всім контактам, ніби від його імені. Юридично оформлено як opt-in. На практиці майже ніхто не розумів, на що погоджується.",

    "dp.p.15.h":   "15 / Privacy zuckering",
    "dp.p.15.sub": "Дефолти, що ллють даних більше, ніж очікуєш.",
    "dp.p.15.body":"Дефолти налаштовано на максимальний збір даних. Налаштування можна затиснути, але треба знати, що вони існують. Facebook роками крутив цю плейбуку - пости за замовчуванням «everyone» замість «friends», ad personalization on, location tracking тихо ввімкнений.",

    "dp.p.16.h":   "16 / Forced disclosure",
    "dp.p.16.sub": "Обов'язкові поля, які не стосуються сервісу.",
    "dp.p.16.body":"Signup просить телефон, адресу, дату народження, стать, кількість людей у родині, рід занять. Нічого з цього не потрібно для роботи сервісу. Все це продається data-брокерам або йде в ad-таргетинг. Зірочка біля required-поля не питає навіщо.",

    /* === MISDIRECTION === */
    "dp.cat.misdir":     "Спрямування",
    "dp.cat.misdir.sub": "Візуальна і вербальна підміна.",

    "dp.p.17.h":   "17 / Misdirection",
    "dp.p.17.sub": "Дизайн уже все вирішив.",
    "dp.p.17.body":"Кнопка <em>Скасувати</em> - маленька, сіра, ліворуч. Кнопка <em>Підтвердити підписку $99/міс</em> - велика, кольорова, праворуч. Ти ще нічого не вирішив - дизайн уже все вирішив за тебе. Це навіть не маніпуляція в індустрії. Це «гарна візуальна ієрархія».",
    "dp.cap.17":   "ІЛ · ВАГА КНОПКИ - ЦЕ ДУМКА ДИЗАЙНУ",

    "dp.p.18.h":   "18 / Preselection",
    "dp.p.18.sub": "Opt-in за замовчуванням.",
    "dp.p.18.body":"П'ять чекбоксів на signup. Три - пре-чекнуті: marketing emails, partner offers, data sharing з третіми сторонами. Ти проґавив, реєструвався, потік. GDPR явно забороняє пре-чекнуті чекбокси як форму згоди. Правозастосування поки точкове, поза великими регуляторами.",
    "dp.cap.18":   "ІЛ · ЗГОДА ЗА ЗАМОВЧУВАННЯМ",

    "dp.p.19.h":   "19 / Visual interference",
    "dp.p.19.sub": "Важлива інформація, навмисно складно прочитати.",
    "dp.p.19.body":"Розкриття плати за послугу 8px сірим по сірому. Кнопка «Decline» стилізована, ніби вона disabled. Критичні умови за «Learn more», який не рендериться на мобільному. Анти-читабельність - це дизайн-вибір, не випадковість.",

    "dp.p.20.h":   "20 / Trick questions",
    "dp.p.20.sub": "Подвійні заперечення в чекбоксах.",
    "dp.p.20.body":"Галочка: <em>Я не хочу не отримувати email-розсилку.</em> Це згода чи відмова? Спеціально пишуть так, щоб ти заплутався і поставив галочку «на користь» сервісу. Класика - в інсталяторах безкоштовного софту. Toolbar, browser hijacker, antivirus trial - все підписують через одне велике «Next» і три заплутані чекбокси.",
    "dp.cap.20":   "ІЛ · ЧЕКБОКС, ЯКИЙ НЕ ПАРСИТЬСЯ",

    /* === OUTRO === */
    "dp.outro.1": "Найгірше у всьому цьому - це не помилки. Не «поганий UX». Це осмислене проєктування. Спочатку метрика - потім інтерфейс. Conversion ↑, NPS ↓ через 3 місяці. Але NPS ніхто не дивиться на спринті.",
    "dp.outro.2": "Що з цим робити як дизайнеру. Гордо казати «ні» на брифі, який намагається зробити з тебе механіка для крадіжки часу і грошей. У 2024 в EU за це вже судять. У 2025 - в США. Цей борг рано чи пізно прийде.",
    "dp.outro.3": "А поки - просто помічай. Коли наступного разу побачиш кнопку <em>Не дякую, я люблю переплачувати</em> - згадай, що це не випадковість. Це робота."
  });
})();
