const commonScenes = [
  {
    id: "scene_road_1",
    background: "/assets/backgrounds/scene1/scene1-returningHome.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Дорога здавалася довшою, ніж я пам’ятала.",
    next: "scene_road_2",
    music: "/assets/audio/maintheme.mp3"
  },

  {
    id: "scene_road_2",
    background: "/assets/backgrounds/scene1/scene1-returningHome.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "У столиці час минав інакше. Там усе рухалося швидко — люди, голоси, магія, чужі обличчя.",
    next: "scene_road_3"
  },

  {
    id: "scene_road_3",
     background: "/assets/backgrounds/scene1/scene1-magic.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Поступивши у магічну академію в столиці, я навчилася читати старі символи, розпізнавати сліди заклять і не боятися тиші.",
    next: "scene_road_4"
  },

  {
    id: "scene_road_4",
     background: "/assets/backgrounds/scene1/scene1-returningHome.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Але зараз, коли настав час повернутися додому, тиша чомусь здавалася іншою.",
    next: "scene_road_5"
  },

  {
    id: "scene_road_5",
    background: "/assets/backgrounds/scene1/scene1-happyElaria.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Еларія мала бути вже близько. Я чекала побачити прикрашені вулиці, почути голоси людей, знайомий шум міста.",
    next: "scene_village_1"
  },

  {
    id: "scene_village_1",
    background: "/assets/backgrounds/scene1/scene1-darkElaria.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Та коли віз зупинився в'їхавши в місто, мене зустріла не радість. Лише тиша і темрява.",
    next: "scene_village_description1"
  },
   {
    id: "scene_village_description1",
    background: "/assets/backgrounds/scene1/scene1-darkElaria.png",
    character: "",
    name: "",
    text: "Вулички, які раніше були яскравими, шумними й наповненими життям, тепер потонули в темряві. Стіни будинків почорніли, вікна мовчали, а навколо не було жодної живої істоти. Ні голосів. Ні кроків. Ні звичного міського гомону.",
    next: "scene_village_description2"
  },
   {
    id: "scene_village_description2",
    background: "/assets/backgrounds/scene1/scene1-darkElaria.png",
    character: "",
    name: "",
    text: "Над вежею в самому центрі Еларії згустився морок. Він повільно ворушився в небі, наче темрява не просто нависла над містом, а пустила в нього коріння",
    next: "scene_village_2"
  },
    {
    id: "scene_village_2",
    background: "/assets/backgrounds/scene1/scene1-darkElaria-Liana.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Що сталось із містом? Чому мені так тихо і моторошно...",
    next: "scene_village_3"
  },
  
  {
    id: "scene_village_3",
    background: "/assets/backgrounds/scene1/scene1-darkElaria-Liana.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "І де всі люди? Куди поділись усі ті кого я так хотіла побачити?",
    next: "scene_village_4"
  },
  {
    id: "scene_village_4",
    background: "/assets/backgrounds/scene1/scene1-darkElaria-Liana.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "На головній площі, я першим ділом очікувала зустріти копіткий гомін місіс Агнії за прилавком.",
    next: "scene_village_5"
  },
  {
    id: "scene_village_5",
    background: "/assets/backgrounds/scene1/scene1-darkElaria-Liana.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Біля неї, вибираючи м'ясо, активно б спорили містер Август із містером Бертольтом, про поточні справи містечка.",
    next: "scene_village_6"
  },
  {
    id: "scene_village_6",
    background: "/assets/backgrounds/scene1/scene1-ElariaMarket.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "А місіс Агнія, звісно, бурчала б на них, мовляв, вони не м’ясо вибирають, а тільки язиками плещуть і покупців від прилавка відганяють.",
    next: "scene_village_7"
  },
   {
    id: "scene_village_7",
    background: "/assets/backgrounds/scene1/scene1-flowerShop.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Ще були дві сестри-квіткарки, які тримали батьківську крамницю квітів на головній площі.",
    next: "scene_village_8"
  },
   {
    id: "scene_village_8",
    background: "/assets/backgrounds/scene1/scene1-flowerShop.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "У моїх спогадах вони залишилися справжніми красунями. Завжди усміхнені, у легких сукнях, серед запаху свіжих троянд, польових трав і стрічок для букетів. До їхньої крамниці хлопці з усього міста заходили нібито по квіти, хоча насправді кожен сподівався перекинутися з ними хоча б кількома словами.",
    next: "scene_village_9"
  },
  {
    id: "scene_village_9",
    background: "/assets/backgrounds/scene1/scene1-children.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Поруч із крамницею, на головній площі, майже завжди бігали місцеві діти. Вони грали у квача, сміялися так голосно, що їх було чути навіть між торговими рядами.",
    next: "scene_village_10"
  },
  {
    id: "scene_village_10",
    background: "/assets/backgrounds/scene1/scene1-orven&liana.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Тоді я часто бігала до старого Орвена — місцевого знахаря, який знав, здавалось, усе: легенди Еларії, властивості трав, дивні хвороби й події, про які інші воліли мовчати. Я приходила до нього по ліки для моєї покійної матері, а він завжди зустрічав мене радісним голосом і запахом сушених трав у своїй старій оселі.",
    next: "scene_village_11"
  },
  {
    id: "scene_village_11",
    background: "/assets/backgrounds/scene1/scene1-darkElaria-Liana.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Точно! Орвен. Як я могла не згадати про нього раніше?",
    next: "scene_village_12"
  },
    {
    id: "scene_village_12",
    background: "/assets/backgrounds/scene1/scene1-darkElaria-Liana.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Старий знахар знав про Еларію більше, ніж будь-хто інший. Про її трави, хвороби, давні легенди й ті дивні події, про які містяни говорили лише пошепки. Якщо в цьому місті справді прокинулася темрява, він міг бодай щось знати?",
    next: "scene_village_13"
  },
    {
    id: "scene_village_13",
    background: "/assets/backgrounds/scene1/scene1-darkElaria-Liana.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Я озирнулась на поржню площу та подивилась на багаж, який лежав на землі.",
    next: "scene_village_14"
  },
    {
    id: "scene_village_14",
    background: "/assets/backgrounds/scene1/scene1-darkElaria-Liana.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Але спочатку потрібно забігти додому.",
    next: "scene_lianas-house_description_1"
  },
    {
    id: "scene_lianas-house_description_1",
   background: "/assets/backgrounds/scene2/liana-home.png",
   character: "",
    name: "",
    text: "Ліана ненадовго зупинилася біля старого особняка.",
    next: "scene_lianas-house_description_2"
  },
    {
    id: "scene_lianas-house_description_2",
    background: "/assets/backgrounds/scene2/liana-home.png",
    character: "",
    name: "",
    text: "Колись він здавався їй величезним, таким теплим і живим. У дитинстві вона думала, що навіть стіни тут уміли слухати, бо кожен раз як пробігала коридорами, дім скрипів так, ніби упізнавав її.",
    next: "scene_lianas-house_description_3"
  },
    {
    id: "scene_lianas-house_description_3",
    background: "/assets/backgrounds/scene2/liana-home.png",
    character: "",
    name: "",
    text: "Тепер будинок мовчав. Вікна були тьмяні, завіси давно втратили колір, а на дверній ручці лежав тонкий шар пилу. Ліана провела по ньому пальцями й на мить завмерла.",
    next: "scene_lianas-house_description_4"
  },
    {
    id: "scene_lianas-house_description_4",
    background: "/assets/backgrounds/scene2/liana-home.png",
    character: "",
    name: "",
    text: "Вона не планувала залишатися надовго. Тільки занести сумки й перепочити кілька хвилин, а потім - одразу до Орвена.",
    next: "scene_lianas-house_description_5"
  },
    {
    id: "scene_lianas-house_description_5",
    background: "/assets/backgrounds/scene2/liana-home.png",
    character: "",
    name: "",
    text: "Але варто було їй переступити поріг, як минуле зустріло її раніше.",
    next: "scene_lianas-house_1"
  },
    {
    id: "scene_lianas-house_1",
    background: "/assets/backgrounds/scene2/liana-home.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Я вдома...",
    next: "scene_lianas-house_description_6"
  },
    {
    id: "scene_lianas-house_description_6",
    background: "/assets/backgrounds/scene2/liana-home.png",
    character: "",
    name: "",
    text: "Її голос прозвучав занадто тихо. Наче вона сама не була певна, чи має право так казати.",
    next: "scene_lianas-house_description_7"
  },
   {
    id: "scene_lianas-house_description_7",
    background: "/assets/backgrounds/scene2/liana-home-memory.png",
    character: "",
    name: "",
    text: "У передпокої досі стояла стара дерев’яна шафа. На стіні - трохи перекошене дзеркало, в якому колись мати поправляла Ліані стрічки у волоссі перед святами. Біля сходів лежав килим із вицвілим візерунком. Ліана пам’ятала, як у дитинстві перестрибувала через його темні лінії, вигадуючи, що це річки на карті.",
    next: "scene_lianas-house_description_8"
  },
  {
    id: "scene_lianas-house_description_8",
    background: "/assets/backgrounds/scene2/liana-home-memory.png",
    character: "",
    name: "",
    text: "Тепер усе було нерухоме. Ні запаху трав'яних ліків, ні маминого голосу, ні теплого світла із вітальні.",
    next: "scene_lianas-house_description_9"
  },
  {
    id: "scene_lianas-house_description_9",
    background: "/assets/backgrounds/scene2/liana-home-memory.png",
    character: "",
    name: "",
    text: "Тільки пил. І тиша, яка була настліьки важкою, що її тяжко було виносити.",
    next: "scene_lianas-house_2"
  },
    {
    id: "scene_lianas-house_2",
    background: "/assets/backgrounds/scene2/liana-home-memory.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Я думала, що перебувати тут буде легше.",
    next: "scene_lianas-house_description_10"
  },
    {
    id: "scene_lianas-house_description_10",
    background: "/assets/backgrounds/scene2/liana-home-memory.png",
    character: "",
    name: "",
    text: "Вона поставила сумки біля дверей і повільно пройшла до вітальні.",
    next: "scene_lianas-house_description_11"
  },
  {
    id: "scene_lianas-house_description_11",
    background: "/assets/backgrounds/scene2/liana-home-memory.png",
    character: "",
    name: "",
    text: "Колись тут було серце дому. Мати сиділа біля вікна, читала старі книги, розкладала на столі трави, листи, прикраси й дрібниці, які Ліана любила розглядати без дозволу. Усе навколо неї завжди мало порядок, навіть хаос у маминих речах здавався продуманим.",
    next: "scene_lianas-house_description_12"
  },
   {
    id: "scene_lianas-house_description_12",
    background: "/assets/backgrounds/scene2/liana-home-memory2.png",
    character: "",
    name: "",
    text: "Ліана торкнулась краю комину.",
    next: "scene_lianas-house_3"
  },
    {
    id: "scene_lianas-house_3",
    background: "/assets/backgrounds/scene2/liana-home-memory2.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Ти б знала що робити...",
    next: "scene_lianas-house_description_13"
  },
   {
    id: "scene_lianas-house_description_13",
    background: "/assets/backgrounds/scene2/liana-home-memory2.png",
    character: "",
    name: "",
    text: "Вона усміхнулась від спогаду який промайнув у її голові.",
    next: "scene_lianas-house_4"
  },
    {
    id: "scene_lianas-house_4",
    background: "/assets/backgrounds/scene2/liana-home-memory2.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Ти завжди знала...",
    next: "scene_lianas-house_description_14"
  },
  {
    id: "scene_lianas-house_description_14",
    background: "/assets/backgrounds/scene2/liana-home-memory2.png",
    character: "",
    name: "",
    text: "На полиці біля каміна ще стояла стара скринька. Маленька, з темного дерева та із металевою застібкою. Ліана пам’ятала її дуже добре. У дитинстві мати ніколи не дозволяла відкривати її самій.",
    next: "scene_lianas-house_description_15"
  },
  {
    id: "scene_lianas-house_description_15",
    background: "/assets/backgrounds/scene2/liana-home-memory2.png",
    character: "",
    name: "",
    text: "”Не все, що блищить, створене для гри”, - казала вона тоді",
    next: "scene_lianas-house_description_16"
  },
  {
    id: "scene_lianas-house_description_16",
    background: "/assets/backgrounds/scene2/liana-home-memory2.png",
    character: "",
    name: "",
    text: "Ліана довго дивилася на скриньку.",
    next: "scene_lianas-house_description_17"
  },
  {
    id: "scene_lianas-house_description_17",
    background: "/assets/backgrounds/scene2/liana-home-memory2.png",
    character: "",
    name: "",
    text: "Потім усе ж відкрила.",
    next: "scene_lianas-house_description_18"
  },
  {
    id: "scene_lianas-house_description_18",
    background: "/assets/backgrounds/scene2/liana-home-amulet.png",
    character: "",
    name: "",
    text: "Окрім інших маминих прикрас, увагу Ліани привернув амулет.",
    next: "scene_lianas-house_description_19"
  },
   {
    id: "scene_lianas-house_description_19",
    background: "/assets/backgrounds/scene2/liana-home-amulet.png",
    character: "",
    name: "",
    text: "Невеликий, срібний, із темно-синім каменем у центрі. Камінь спочатку видався майже чорним, але коли Ліана взяла його в руки, у глибині промайнуло слабке  світло.",
    next: "scene_lianas-house_description_20"
  },
   {
    id: "scene_lianas-house_description_20",
    background: "/assets/backgrounds/scene2/liana-home-amulet.png",
    character: "",
    name: "",
    text: "Вона різко вдихнула.",
    next: "scene_lianas-house_5"
  },
    {
    id: "scene_lianas-house_5",
    background: "/assets/backgrounds/scene2/liana-home-amulet.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Мамин амулет! Вона майже ніколи його не носила, лише деколи брала із собою і йшла у невідомому напрямку.",
    next: "scene_lianas-house_description_21"
  },
   {
    id: "scene_lianas-house_description_21",
    background: "/assets/backgrounds/scene2/liana-home-amulet.png",
    character: "",
    name: "",
    text: "Ліана стиснула амулет у долоні, а перед очима спливали спогади.",
    next: "scene_lianas-house_description_22"
  },
   {
    id: "scene_lianas-house_description_22",
    background: "/assets/backgrounds/scene2/flashback1.png",
    character: "",
    name: "",
    text: "...",
    next: "scene_lianas-house_description_23"
  },
   {
    id: "scene_lianas-house_description_23",
    background: "/assets/backgrounds/scene2/flashback2.png",
    character: "",
    name: "",
    text: "Еліоте!",
    next: "scene_lianas-house_description_24"
  },
  {
    id: "scene_lianas-house_description_24",
    background: "/assets/backgrounds/scene2/flashback3.png",
    character: "",
    name: "",
    text: "Збережи їх, любою ціною...",
    next: "scene_lianas-house_description_25"
  },
  {
    id: "scene_lianas-house_description_25",
    background: "/assets/backgrounds/scene2/flashback4.png",
    character: "",
    name: "",
    text: "Я повинна захистити тих, хто в мене лишився. Навіть якщо доведеться віддати своє життя.",
    next: "scene_lianas-house_description_26"
  },
  {
    id: "scene_lianas-house_description_26",
    background: "/assets/backgrounds/scene2/flashback5.png",
    character: "",
    name: "",
    text: "Віддамо нашу кров, плоть і останній подих заради майбутнього нашого королівства! Скуємо тінь печаттю крові!",
    next: "scene_lianas-house_description_27"
  },
    {
    id: "scene_lianas-house_description_27",
    background: "/assets/backgrounds/scene2/flashback6.png",
    character: "",
    name: "",
    text: "...",
    next: "scene_lianas-house_description_28"
  },
    {
    id: "scene_lianas-house_description_28",
    background: "/assets/backgrounds/scene2/flashback7.png",
    character: "",
    name: "",
    text: "Запам'ятай, ти повинна берегти цей амулет як зіницю ока. В ньому міститься сила усього нашого роду. І коли прийде час, він перейде твоїм дітям, а потім, і їхнім дітям, допоки не знайде того, хто його потребує. ",
    next: "scene_lianas-house_6"
  },
    {
    id: "scene_lianas-house_6",
    background: "/assets/backgrounds/scene2/liana-emotion.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Що це зараз було?",
    next: "scene_lianas-house_7"
  },
    {
    id: "scene_lianas-house_7",
    background: "/assets/backgrounds/scene2/liana-emotion.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Невже це чиїсь спогади?",
    next: "scene_lianas-house_description_29"
  },
    {
    id: "scene_lianas-house_description_29",
    background: "/assets/backgrounds/scene2/liana-emotion.png",
    character: "",
    name: "",
    text: "Замість відповіді, було тільки слабке світіння каменя. Наче амулет намагався розповісти Ліані якусь історію.",
    next: "scene_lianas-house_description_30"
  },
    {
    id: "scene_lianas-house_description_30",
    background: "/assets/backgrounds/scene2/liana-home-3.png",
    character: "",
    name: "",
    text: "Ліана перевела погляд до вікна. Еларія за склом була темна і чужа.",
    next: "scene_lianas-house_8"
  },
    {
    id: "scene_lianas-house_8",
    background: "/assets/backgrounds/scene2/liana-home-3.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Орвен може знати, що це означає.",
    next: "scene_lianas-house_description_31"
  },
    {
    id: "scene_lianas-house_description_31",
    background: "/assets/backgrounds/scene2/liana-home-3.png",
    character: "",
    name: "",
    text: "Ліана вже хотіла надіти амулет на шию, але пальці не розтиснулися.",
    next: "scene_lianas-house_description_32"
  },
    {
    id: "scene_lianas-house_description_32",
    background: "/assets/backgrounds/scene2/liana-home-fear.png",
    character: "",
    name: "",
    text: "Вона застигла посеред старої, обшарпаної вітальні, наче в один момент зіштовхнулась із чимось від чого довго тікала.",
    next: "scene_lianas-house_description_33"
  },
    {
    id: "scene_lianas-house_description_33",
    background: "/assets/backgrounds/scene2/liana-home-fear.png",
    character: "",
    name: "",
    text: "В її очах раптом промайнув страх.",
    next: "scene_lianas-house_9"
  },
    {
    id: "scene_lianas-house_9",
    background: "/assets/backgrounds/scene2/liana-home-fear.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Чому... Чому я не можу наважитись його надіти?",
    next: "scene_lianas-house_10"
  },
    {
    id: "scene_lianas-house_10",
    background: "/assets/backgrounds/scene2/liana-home-fear.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "О мамо, я не така як ти, я слабка духом. Я, я просто завмерла...",
    next: "scene_lianas-house_11"
  },
    {
    id: "scene_lianas-house_11",
    background: "/assets/backgrounds/scene2/liana-home-fear.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Якби ти була поруч, ти б знала, як мені страшно. Відтоді як тебе не стало, я весь час ніби тікала від думки, що залишилася сама. Мабуть, саме тому й поїхала вчитися до столиці - подалі від цього дому, від спогадів і від тиші, яка нагадувала про тебе.",
    next: "scene_lianas-house_description_34"
  },
    {
    id: "scene_lianas-house_description_34",
    background: "/assets/backgrounds/scene2/liana-home-crying.png",
    character: "",
    name: "",
    text: "Не витримавши ваги думок, Ліана впала на коліна.",
    next: "scene_lianas-house_12"
  },
    {
    id: "scene_lianas-house_12",
    background: "/assets/backgrounds/scene2/liana-home-crying.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Я бачила, як ти день за днем слабшаєш. Носила тобі ліки, хапалася за кожну надію, переконувала себе, що ще не пізно… але врятувати тебе так і не змогла.",
    next: "scene_lianas-house_13"
  },
  {
    id: "scene_lianas-house_13",
    background: "/assets/backgrounds/scene2/liana-home-crying.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "То як я можу сподіватися, що здатна щось змінити?",
    next: "scene_lianas-house_14"
  },
  {
    id: "scene_lianas-house_14",
    background: "/assets/backgrounds/scene2/liana-home-crying.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Що, як кожне моє рішення тільки наблизить нове горе? Що, як я торкнуся цієї темряви - і вона забере ще більше, ніж уже забрала?",
    next: "scene_lianas-house_15"
  },
  {
    id: "scene_lianas-house_15",
    background: "/assets/backgrounds/scene2/liana-home-crying.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Я не змогла врятувати тебе, хоча вірила до останнього.",
    next: "scene_lianas-house_16"
  },
  {
    id: "scene_lianas-house_16",
    background: "/assets/backgrounds/scene2/liana-home-crying.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "То як я маю врятувати ціле місто, якщо не змогла врятувати одну людину, яку любила найбільше?",
    next: "scene_lianas-house_description_35"
  },
    {
    id: "scene_lianas-house_description_35",
    background: "/assets/backgrounds/scene2/liana-home-crying.png",
    character: "",
    name: "",
    text: "І раптом у моїй голові промайнули мамині слова.",
    next: "scene_lianas-house_description_36"
  },
   {
    id: "scene_lianas-house_description_36",
    background: "/assets/backgrounds/scene2/liana-home-crying.png",
    character: "",
    name: "",
    text: "Іноді в житті ставатиме так темно, що тобі здаватиметься - ти загубилася остаточно. Наче попереду більше немає жодної дороги.",
    next: "scene_lianas-house_description_37"
  },
   {
    id: "scene_lianas-house_description_37",
    background: "/assets/backgrounds/scene2/liana-home-crying.png",
    character: "",
    name: "",
    text: "Але це не так.",
    next: "scene_lianas-house_description_38"
  },
  {
    id: "scene_lianas-house_description_38",
    background: "/assets/backgrounds/scene2/liana-home-crying.png",
    character: "",
    name: "",
    text: "Навіть у найглибшій темряві в тебе завжди лишається одне світло. Вибір.",
    next: "scene_lianas-house_description_40"
  },
   {
    id: "scene_lianas-house_description_40",
    background: "/assets/backgrounds/scene2/liana-home-crying.png",
    character: "",
    name: "",
    text: "Яким би важким він не був, ти маєш зробити його. Бо тільки так можна рушити далі.",
    next: "scene_amulet_choice"
  },
  {
  id: "scene_amulet_choice",
  background: "/assets/backgrounds/scene2/liana-home-choice.png",
  character: "",
  name: "",
  text: "",
  choices: [
    {
      text: "Взяти амулет із собою",
      next: "scene_take_amulet",
      set: {
        hasAmulet: true
      }
    },
  ]
},
{
  id: "scene_take_amulet",
  background: "/assets/backgrounds/scene2/liana-home-choice.png",
  character: "",
  name: "",
  text: "Ліана обережно застібнула ланцюжок на шиї. Камінь торкнувся шкіри, і всього лише на мить, вона відчула дивне полегшення.",
  next: "scene_to_orven"
}, 
{
  id: "scene_to_orven",
  background: "/assets/backgrounds/scene2/liana-home-choice.png",
  character: "",
  name: "",
  text: "Ліана востаннє озирнулася на стару вітальню й вийшла з дому. Попереду був Орвен. А разом із ним - можливо, перша відповідь.",
  next: "orven-house_1"
},
{
  id: "orven-house_1",
  background: "/assets/backgrounds/scene-orven/orven-home.png",
  character: "",
  name: "",
  text: "Ліана зупинилася на порозі старого кам’яного будинку, майже повністю обплетеного плющем.",
  next: "orven-house_2"
},
{
  id: "orven-house_2",
  background: "/assets/backgrounds/scene-orven/orven-home.png",
  character: "",
  name: "",
  text: "Колись перед ним росли густі зелені трави - Орвен збирав їх для настоянок, мазей і гірких відварів. Тепер вони лежали сухими й мертвими, ніби земля теж забула, як лікувати.",
  next: "orven-house_3"
},
{
  id: "orven-house_3",
  background: "/assets/backgrounds/scene-orven/orven-home.png",
  character: "",
  name: "",
  text: "Ліана кілька секунд дивилася на двері. Потім нерішуче постукала.",
  next: "orven-house_dialogue-1"
},
{
  id: "orven-house_dialogue-1",
  background: "/assets/backgrounds/scene-orven/orven-home.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Орвене?.. Це я, Ліана.",
  next: "orven-house_dialogue-2"
},
{
  id: "orven-house_dialogue-2",
  background: "/assets/backgrounds/scene-orven/orven-home.png",
  character: "/assets/characters/orven-withoutBg.png",
  name: "Орвен",
  text: "Ліана?.. Ні, не знаю. Чи знаю?.. Зачекай… твоє обличчя… воно ніби було десь у моїй пам’яті.",
  next: "orven-house_4"
},
{
  id: "orven-house_4",
  background: "/assets/backgrounds/scene-orven/orven-home.png",
  character: "",
  name: "",
  text: "Орвен, привідкривши двері, виглянув у щілину.",
  next: "orven-house_dialogue-3"
},
{
  id: "orven-house_dialogue-3",
  background: "/assets/backgrounds/scene-orven/orven-home.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Ви справді мене не впізнаєте?",
  next: "orven-house_dialogue-4"
},
{
  id: "orven-house_dialogue-4",
  background: "/assets/backgrounds/scene-orven/orven-home.png",
  character: "/assets/characters/orven-withoutBg.png",
  name: "Орвен",
  text: "Я багатьох не впізнаю, дитино. Іноді навіть себе. Прокидаюся зранку, дивлюся на власні руки й думаю: чиї вони?",
  next: "orven-house_dialogue-5"
},
{
  id: "orven-house_dialogue-5",
  background: "/assets/backgrounds/scene-orven/orven-home.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Це не схоже на вас. Ви завжди пам’ятали все, навіть те, що інші хотіли забути...",
  next: "orven-house_dialogue-6"
},
{
  id: "orven-house_dialogue-6",
  background: "/assets/backgrounds/scene-orven/orven-home.png",
  character: "/assets/characters/orven-withoutBg.png",
  name: "Орвен",
  text: "Я… знав багато. Так. Трави, імена, старі історії. А тепер усе тоне, наче чорнило у воді.",
  next: "orven-house_dialogue-7"
},
{
  id: "orven-house_dialogue-7",
  background: "/assets/backgrounds/scene-orven/orven-home.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Згадайте мене. Будь ласка. Я малою прибігала до вас по ліки матері.",
  next: "orven-house_dialogue-8"
},
{
  id: "orven-house_dialogue-8",
  background: "/assets/backgrounds/scene-orven/orven-home.png",
  character: "/assets/characters/orven-withoutBg.png",
  name: "Орвен",
  text: "Малою?...",
  next: "orven-house_dialogue-9"
},
{
  id: "orven-house_dialogue-9",
  background: "/assets/backgrounds/scene-orven/orven-home.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Так, сидячи біля вашої робочої стійки, я чекала, в той час як ви розважали мене неймовірними історіями, в які мені і досих пір важко повірити.",
  next: "orven-house_dialogue-10"
},
{
  id: "orven-house_dialogue-10",
  background: "/assets/backgrounds/scene-orven/orven-home.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Наприклад, легенду про святу Агнію. Вона пожертвувала своє життя, врятувавши наші землі від зла багато років тому.",
  next: "orven-house_dialogue-11"
},
{
  id: "orven-house_dialogue-11",
  background: "/assets/backgrounds/scene-orven/orven-home.png",
  character: "/assets/characters/orven-withoutBg.png",
  name: "Орвен",
  text: "Святу Агнію? Так, так, жінку-воїтельницю.",
  next: "orven-house_dialogue-12"
},
{
  id: "orven-house_dialogue-12",
  background: "/assets/backgrounds/scene-orven/orven-home.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Ви казали мені, що я дуже схожа на її образ, про який ходять різні чутки. Але всі сходились на одному, що її риже волосся виблискувало на сонці яскравіше ніж полум'я.",
  next: "orven-house_dialogue-13"
},
{
  id: "orven-house_dialogue-13",
  background: "/assets/backgrounds/scene-orven/orven-home.png",
  character: "/assets/characters/orven-withoutBg.png",
  name: "Орвен",
  text: "То ти... Ліана! Дівчинка із довгим рудим волоссям.",
  next: "orven-house_5"
},
{
  id: "orven-house_5",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "",
  name: "",
  text: "Орвен широко розпахнув двері, втупившись у лице Ліани.",
  next: "orven-house_dialogue-14"
},
{
  id: "orven-house_dialogue-14",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/orven-withoutBg.png",
  name: "Орвен",
  text: "Я пам’ятаю… Ні. Не все. Але цей сміх… твої кроки біля дверей… На мить бачу.",
  next: "orven-house_dialogue-15"
},
{
  id: "orven-house_dialogue-15",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Що сталося з містом? Чому вулиці порожні? Що це за тінь над башнею?",
  next: "orven-house_dialogue-16"
},
{
  id: "orven-house_dialogue-16",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/orven-withoutBg.png",
  name: "Орвен",
  text: "Не питай голосно. Накличеш на себе біду.",
  next: "orven-house_dialogue-17"
},
{
  id: "orven-house_dialogue-17",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Орвене, мені потрібно знати!",
  next: "orven-house_dialogue-18"
},
{
  id: "orven-house_dialogue-18",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/orven-withoutBg.png",
  name: "Орвен",
  text: "Дитино, дай мені час пригадати... Спершу я забував дрібниці: де лежить ключ, чиюсь обіцянку, назву трави. Потім - імена сусідів, людей які були для мене близькими.",
  next: "orven-house_dialogue-19"
},
{
  id: "orven-house_dialogue-19",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Це хвороба?",
  next: "orven-house_dialogue-20"
},
{
  id: "orven-house_dialogue-20",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/orven-withoutBg.png",
  name: "Орвен",
  text: "Ні... Хвороба не дивиться на тебе з темряви.",
  next: "orven-house_dialogue-21"
},
{
  id: "orven-house_dialogue-21",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Ви бачили те, що на вас дивилось?",
  next: "orven-house_dialogue-22"
},
{
  id: "orven-house_dialogue-22",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/orven-withoutBg.png",
  name: "Орвен",
  text: "Не очима, але відчував. Наче хтось стоїть позаду думки й чекає, коли вона ослабне.",
  next: "orven-house_dialogue-23"
},
{
  id: "orven-house_dialogue-23",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Чорна магія?",
  next: "orven-house_dialogue-24"
},
{
  id: "orven-house_dialogue-24",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/orven-withoutBg.png",
  name: "Орвен",
  text: "Гірше. Магія має слід, форму, ціну. А це… Має свідомість, воно вистежує тебе як жертву.",
  next: "orven-house_dialogue-25"
},
{
  id: "orven-house_dialogue-25",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/orven-withoutBg.png",
  name: "Орвен",
  text: "Воно живиться тим, що робить людину собою. Спогадами, іменами, любов’ю, провиною. Усе забирає.",
  next: "orven-house_dialogue-26"
},
{
  id: "orven-house_dialogue-26",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Хто це міг зробити? Кого мені шукати? Можливо ви змогли б згадати, когось, хто міг б допомогти.",
  next: "orven-house_6"
},
{
  id: "orven-house_6",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "",
  name: "",
  text: "Орвен глибоко задумався, потім зайшов в будинок.",
  next: "orven-house_7"
},
{
  id: "orven-house_7",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "",
  name: "",
  text: "Його очі повільно проходились по кожному предмету, наче це допомагало зачепитись за спогад у власній голові.",
  next: "orven-house_8"
},
{
  id: "orven-house_8",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "",
  name: "",
  text: "Раптом, погляд зупинився на зброї для полювання, що висіла на стіні.",
  next: "orven-house_9"
},
{
  id: "orven-house_9",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "",
  name: "",
  text: "Із яскравими очима, в яких щойно промайнула надія, він повернувся до Ліани.",
  next: "orven-house_dialogue-27"
},
{
  id: "orven-house_dialogue-27",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/orven-withoutBg.png",
  name: "Орвен",
  text: "Є той, хто бачив темряву ближче за інших.",
  next: "orven-house_dialogue-28"
},
{
  id: "orven-house_dialogue-28",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Хто?",
  next: "orven-house_dialogue-29"
},
{
  id: "orven-house_dialogue-29",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/orven-withoutBg.png",
  name: "Орвен",
  text: "Мисливець, що живе в лісі. Наче... Ейраном звати.",
  next: "orven-house_dialogue-30"
},
{
  id: "orven-house_dialogue-30",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Ейран? Я чула це ім’я.",
  next: "orven-house_dialogue-31"
},
{
  id: "orven-house_dialogue-31",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/orven-withoutBg.png",
  name: "Орвен",
  text: "Він живе за містом, там, де стара дорога входить у ліс. Не любить гостей, не любить магію. І має на це причину.",
  next: "orven-house_dialogue-32"
},
{
  id: "orven-house_dialogue-32",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Причину, яку?",
  next: "orven-house_dialogue-33"
},
{
  id: "orven-house_dialogue-33",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/orven-withoutBg.png",
  name: "Орвен",
  text: "Пригадалось мені, що його дружину відьма прокляла темною магією. Висмоктувала не тільки її сили, а ще й дитя. Вагітна була... Загинула у муках.",
  next: "orven-house_dialogue-34"
},
{
  id: "orven-house_dialogue-34",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Боже...",
  next: "orven-house_dialogue-35"
},
{
  id: "orven-house_dialogue-35",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/orven-withoutBg.png",
  name: "Орвен",
  text: "Після того він пішов у ліс, казав, що дерева чесніші за людей.",
  next: "orven-house_dialogue-36"
},
{
  id: "orven-house_dialogue-36",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Він допоможе мені?",
  next: "orven-house_dialogue-37"
},
{
  id: "orven-house_dialogue-37",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/orven-withoutBg.png",
  name: "Орвен",
  text: "Не одразу. Можливо, й зовсім ні. Але якщо хтось знає, про темні сили, то це він.",
  next: "orven-house_dialogue-38"
},
{
  id: "orven-house_dialogue-38",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Дякую, Орвене. Я знайду його.",
  next: "orven-house_dialogue-39"
},
{
  id: "orven-house_dialogue-39",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/orven-withoutBg.png",
  name: "Орвен",
  text: "Ліано…",
  next: "orven-house_dialogue-40"
},
{
  id: "orven-house_dialogue-40",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Так?",
  next: "orven-house_dialogue-41"
},
{
  id: "orven-house_dialogue-41",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/orven-withoutBg.png",
  name: "Орвен",
  text: "Не довіряй світлу тільки тому, що воно біле. І не бійся темряви тільки тому, що вона чорна.",
  next: "orven-house_dialogue-42"
},
{
  id: "orven-house_dialogue-42",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Що це означає?",
  next: "orven-house_dialogue-43"
},
{
  id: "orven-house_dialogue-43",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/orven-withoutBg.png",
  name: "Орвен",
  text: "Я… Я не пам’ятаю.",
  next: "orven-house_dialogue-44"
},
{
  id: "orven-house_dialogue-44",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Орвене?",
  next: "orven-house_10"
},
{
  id: "orven-house_10",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "",
  name: "",
  text: "В моменті, очі Орвена помутніли.",
  next: "orven-house_dialogue-45"
},
{
  id: "orven-house_dialogue-45",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/orven-withoutBg.png",
  name: "Орвен",
  text: "Хто ти, дитино? Чому ти стоїш тут?",
  next: "orven-house_11"
},
{
  id: "orven-house_11",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "",
  name: "",
  text: "Ліана потягнулась, щоб взяти Орвена за руку.",
  next: "orven-house_dialogue-46"
},
{
  id: "orven-house_dialogue-46",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Не переживайте. Я поверну вам пам’ять, усім поверну!",
  next: "orven-house_12"
},
{
  id: "orven-house_12",
  background: "/assets/backgrounds/scene-orven/orven-home1.png",
  character: "",
  name: "",
  text: "Обережно відпустивши руку Орвена, вона розвернулась і помчала в ліс.",
  next: "eiran-house_description-1"
},
{
  id: "eiran-house_description-1",
  background: "/assets/backgrounds/scene-eiran/scene-eiran.png",
  character: "",
  name: "",
  text: "Дерева тут росли густо, наче навмисно ховали це місце від чужих очей. На гілках висіли сухі трави, біля стіни стояли пастки, а над дверима було прибито кілька старих стріл із потемнілими наконечниками.",
  next: "eiran-house_description-2"
},
{
  id: "eiran-house_description-2",
  background: "/assets/backgrounds/scene-eiran/scene-eiran.png",
  character: "",
  name: "",
  text: "Вона ще не встигла постукати, як із тіні почувся голос.",
  next: "eiran-house_dialogue-1"
},
{
  id: "eiran-house_dialogue-1",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Ще один крок - і я вирішу, що ти прийшла із поганими намірами.",
  next: "eiran-house_description-3"
},
{
  id: "eiran-house_description-3",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "",
  name: "",
  text: "Ліана завмерла.",
  next: "eiran-house_dialogue-2"
},
{
  id: "eiran-house_dialogue-2",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Я не ворог.",
  next: "eiran-house_dialogue-3"
},
{
  id: "eiran-house_dialogue-3",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Так зазвичай кажуть ті, хто приносить найбільше біди.",
  next: "eiran-house_description-4"
},
{
  id: "eiran-house_description-4",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "",
  name: "",
  text: "З-поміж дерев вийшов чоловік із луком у руці. Його погляд був холодний, насторожений, ніби він уже давно не бачив у людях нічого, крім загрози.",
  next: "eiran-house_dialogue-4"
},
{
  id: "eiran-house_dialogue-4",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Ви Ейран?",
  next: "eiran-house_dialogue-5"
},
{
  id: "eiran-house_dialogue-5",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Залежить від того, хто питає.",
  next: "eiran-house_dialogue-6"
},
{
  id: "eiran-house_dialogue-6",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Моє ім'я - Ліана. Мені про вас розказав Орвен.",
  next: "eiran-house_dialogue-7"
},
{
  id: "eiran-house_dialogue-7",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Орвен вже давно не пам'ятає, що кому розказує.",
  next: "eiran-house_dialogue-8"
},
{
  id: "eiran-house_dialogue-8",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "На мить він згадав достатньо.",
  next: "eiran-house_dialogue-9"
},
{
  id: "eiran-house_dialogue-9",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Тоді мав би згадати й те, що я не приймаю гостей.",
  next: "eiran-house_dialogue-10"
},
{
  id: "eiran-house_dialogue-10",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Мені потрібно знати, що відбувається з Еларією.",
  next: "eiran-house_dialogue-11"
},
{
  id: "eiran-house_dialogue-11",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "То йди назад у місто.",
  next: "eiran-house_dialogue-12"
},
{
  id: "eiran-house_dialogue-12",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Там немає до кого йти.",
  next: "eiran-house_dialogue-13"
},
{
  id: "eiran-house_dialogue-13",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Тоді йди куди завгодно. Тільки не сюди.",
  next: "eiran-house_dialogue-14"
},
{
  id: "eiran-house_dialogue-14",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Орвен сказав, що ви бачили темряву ближче за інших.",
  next: "eiran-house_dialogue-15"
},
{
  id: "eiran-house_dialogue-15",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Я впевнена, що якщо ви зі мною поділитесь тим що...",
  next: "eiran-house_description-5"
},
{
  id: "eiran-house_description-5",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "",
  name: "",
  text: "Ліана навіть не встигла договорити, як стріла пролетіла повз, влучивши дерево позаду.",
  next: "eiran-house_description-7"
},
{
  id: "eiran-house_description-7",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "",
  name: "",
  text: "Розгубившись від переляку, вона подалась назад.",
  next: "eiran-house_dialogue-16"
},
{
  id: "eiran-house_dialogue-16",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Вимовиш ще слово. Наступна стріла полетить у тебе.",
  next: "eiran-house_choice"
},
{
  id: "eiran-house_choice",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "",
  name: "",
  text: "",
  choices: [
    {
      text: "Знайти в собі сміливість і переконати Ейрана",
      next: "eiran-choice-brave-1",
      set: {
         convincedEiran: true,
        hasEiranInfo: true,
        hasProtectionCrystal: true,
        hasTeleportCrystal: true,
        hasRitualPaper: true
      }
    },
    {
      text: "Піддатися страху і піти",
      next: "eiran-choice-fear-1",
      set: {
         convincedEiran: false,
        hasEiranInfo: false,
        hasProtectionCrystal: false,
        hasTeleportCrystal: false,
        hasRitualPaper: false
      }
    }
  ]
},
];
const finalGoodPathScenes = [
  {
  id: "eiran-choice-brave-1",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "",
  name: "",
  text: "Ліана завмерла. Серце билося так сильно, що здавалося - він почує його навіть крізь шум лісу. Але вона не відступила.",
  next: "eiran-choice-brave-2"
},
{
  id: "eiran-choice-brave-2",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Прошу, послухайте мене. Я знаю як це втрачати тих, кого любиш усім серцем. І я боюсь.. Дуже боюсь, але ще більше боюсь пережити втрату знову!",
  next: "eiran-choice-brave-3"
},
{
  id: "eiran-choice-brave-3",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Ти не розумієш, у що лізеш.",
  next: "eiran-choice-brave-4"
},
{
  id: "eiran-choice-brave-4",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Можливо. Але я розумію, що в місті ще є живі люди. Орвен ще бореться, і я впевнена інші теж. І якщо ви знаєте хоч щось, що може їм допомогти, ви не маєте права мовчати.",
  next: "eiran-choice-brave-5"
},
{
  id: "eiran-choice-brave-5",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Не говори мені про право.",
  next: "eiran-choice-brave-6"
},
{
  id: "eiran-choice-brave-6",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Тоді я скажу про втрату. Я теж втратила близьку людину, я бачила, як моя мати згасала, і нічого не змогла вдіяти. Тому я знаю, як легко після цього зненавидіти весь світ.",
  next: "eiran-choice-brave-7"
},
{
  id: "eiran-choice-brave-7",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Але якщо йти цим шляхом байдужості та болю, це дозволить темряві забрати ще когось. І ще. Поки в Еларії не залишиться нікого, хто пам’ятатиме, кого він любив.",
  next: "eiran-choice-brave-8"
},
{
  id: "eiran-choice-brave-8",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Ви хотіли б забути тих кого любили!?",
  next: "eiran-choice-brave-9"
},
{
  id: "eiran-choice-brave-9",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "",
  name: "",
  text: "Ейран різко нахмурив брови, лук у руках затремтів, а ніздрі розширились, наче у всьому світі різко забракло повітря.",
  next: "eiran-choice-brave-10"
},
{
  id: "eiran-choice-brave-10",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Ти говориш, наче ще віриш, що біль можна перетворити на щось корисне.",
  next: "eiran-choice-brave-11"
},
{
  id: "eiran-choice-brave-11",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Не знаю, чи можна. Але якщо ні - тоді всі наші втрати були просто порожнечею. Я не хочу в це вірити.",
  next: "eiran-choice-brave-12"
},
{
  id: "eiran-choice-brave-12",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Марена теж так казала.",
  next: "eiran-choice-brave-13"
},
{
  id: "eiran-choice-brave-13",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "",
  name: "",
  text: "Ейран повільно опустив лук. Його пальці все ще стискали тятиву, але стріла вже не дивилася Ліані в груди.",
  next: "eiran-choice-brave-14"
},
{
  id: "eiran-choice-brave-14",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Мою дружину звали Марена. Її прокляла жінка, яку я колись називав подругою.",
  next: "eiran-story-1"
},
{
  id: "eiran-story-1",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Ми знали одне одного ще з дитинства. У столиці. Я пішов в армію лучником, а вона з малих років опановувала магію.",
  next: "eiran-story-2"
},
{
  id: "eiran-story-2",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Вона любила мене так, що не змогла пережити, коли я покохав іншу. І те, що вона називала любов’ю, стало прокляттям для моєї родини.",
  next: "eiran-story-3"
},
{
  id: "eiran-story-3",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Марена мала народжувати, прокляття висмоктало з неї всю душу. І... І вона... Та дитина... Загинули під час пологів.",
  next: "eiran-story-4"
},
{
  id: "eiran-story-4",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Перед тим, я привіз її до Еларії, бо чув про білу відьму. Казали, вона живе вже століттями й знає магію, якої не знають навіть найкращі маги столиці.",
  next: "eiran-story-5"
},
{
  id: "eiran-story-5",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Білу відьму?",
  next: "eiran-story-6"
},
{
  id: "eiran-story-6",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Так її називали. Але в старих записах було інше ім’я.",
  next: "eiran-story-7"
},
{
  id: "eiran-story-7",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Яке?",
  next: "eiran-story-8"
},
{
  id: "eiran-story-8",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Міра.",
  next: "eiran-story-9"
},
{
  id: "eiran-story-9",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Чув, колись вона була хранителькою вежі в центрі міста. Але останні десять років її ніхто не бачив. І я, збриючи про неї інформацію, так  і не зміг її відшукати.",
  next: "eiran-story-10"
},
{
  id: "eiran-story-10",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Прошу, розкажіть мені все, що знаєте!",
  next: "eiran-story-11"
},
{
  id: "eiran-story-11",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Гаразд. Я шукав її всюди. У кожному місці, де, за словами людей, її хоча б раз бачили.",
  next: "eiran-story-12"
},
{
  id: "eiran-story-12",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Одні казали, що вона з’являлася біля старої вежі. Інші - що бачили її на межі лісу. Хтось клявся, що вона проходила повз міську площу серед білого дня, і жодна людина не наважилась її зупинити.",
  next: "eiran-story-13"
},
{
  id: "eiran-story-13",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Ви знаєте, як вона виглядає?",
  next: "eiran-story-14"
},
{
  id: "eiran-story-14",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Біле вбрання. Довге біле волосся, заплетене в косу. Обличчя… Майже янгольське.",
  next: "eiran-story-15"
},
{
  id: "eiran-story-15",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Але саме це мене й насторожило.",
  next: "eiran-story-16"
},
{
  id: "eiran-story-16",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Кажуть, коли вона говорить із тобою, важко зрозуміти, чи ти справді слухаєш її добровільно, чи вже падаєш у її чари.",
  next: "eiran-story-17"
},
{
  id: "eiran-story-17",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Ви думаєте, вона могла впливати на людей?",
  next: "eiran-story-18"
},
{
  id: "eiran-story-18",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Після всього, що я бачив, я не довіряю жодній магії. Навіть тій, що прикидається світлом.",
  next: "eiran-story-19"
},
{
  id: "eiran-story-19",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Тому я звернувся до місцевого чародія. Попросив захист від будь-якого впливу - чар, навіювань, голосів, ілюзій.",
  next: "eiran-story-20"
},
{
  id: "eiran-story-20",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Він дав мені кристал. Сказав, що той здатен нейтралізувати магічний вплив, якщо тримати його близько до себе.",
  next: "eiran-story-21"
},
{
  id: "eiran-story-21",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "І з ним ви змогли наблизитись до вежі?",
  next: "eiran-story-22"
},
{
  id: "eiran-story-22",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Не зовсім. Міра була хранителькою тієї вежі бог знає скільки років. І ніхто досі не знає, що саме вона там оберігала.",
  next: "eiran-story-23"
},
{
  id: "eiran-story-23",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Вони думали, що їхнього захисту достатньо, проте вони помилялись.",
  next: "eiran-story-24"
},
{
  id: "eiran-story-24",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Ви пробралися всередину?",
  next: "eiran-story-25"
},
{
  id: "eiran-story-25",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Я був відчайдушний. Марена згасала на моїх очах. Я був готовий увірватися хоч у саму пащу темряви, аби знайти хоч щось, що могло її урятувати.",
  next: "eiran-story-26"
},
{
  id: "eiran-story-26",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Я взяв із собою два камені: кристал захисту від магії і камінь телепортації.",
  next: "eiran-story-27"
},
{
  id: "eiran-story-27",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Камінь телепортації?",
  next: "eiran-story-28"
},
{
  id: "eiran-story-28",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Одноразовий, старий і нестабільний. Але він спрацював, напевно я аж настільки прагнув віднайти хочаб якусь зачепку...",
  next: "eiran-story-29"
},
{
  id: "eiran-story-29",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Якби Біла Відьма досі охороняла вежу, я певен, не зробив би й кроку всередині. Тільки вона могла тримати справжній захист, та без неї вежа стала слабшою.",
  next: "eiran-story-30"
},
{
  id: "eiran-story-30",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Не безпечною. Ні, просто не неприступною.",
  next: "eiran-story-31"
},
{
  id: "eiran-story-31",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Що ви знайшли?",
  next: "eiran-story-32"
},
{
  id: "eiran-story-32",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Не багато. Усередині всюди була охорона, магічні печаті, патрулі, замкнені проходи. Я не міг довго блукати, тому обрав місце, де, на мою думку, могли зберігатися старі записи.",
  next: "eiran-story-33"
},
{
  id: "eiran-story-33",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Сховище вежі, там я знайшов лист про Міру. У ньому йшлося про події Мороку і про печать голови Управління з питань магії - Агати. Після цього контроль над ситуацією мали передати її правій руці - Мірі Гацліт. Саме там я вперше дізнався її повне ім’я.",
  next: "eiran-story-34"
},
{
  id: "eiran-story-34",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Міра Гацліт…",
  next: "eiran-story-35"
},
{
  id: "eiran-story-35",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Запам’ятай його, можливо знадобиться",
  next: "eiran-story-36"
},
{
  id: "eiran-story-36",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Проте, поруч із листом лежав опис ритуалу. Сторінки були старі, із кресленнями, символами й текстом, написаним мовою, яку я не зміг прочитати.",
  next: "eiran-story-37"
},
{
  id: "eiran-story-37",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Це не була звичайна магічна формула. Не те, що вивчають у столиці, скоріше щось давніше, набагато давніше.",
  next: "eiran-story-38"
},
{
  id: "eiran-story-38",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Я не знав, що саме тримаю в руках, але забрав його. Розуміючи одне: якщо знайду Білу відьму, цей папір може стати єдиним способом змусити її говорити, навіть якщо доведеться шантажувати її.",
  next: "eiran-story-39"
},
{
  id: "eiran-story-39",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "",
  name: "",
  text: "Ейран кілька секунд мовчав. Потім розвернувся й зайшов до хатини.",
  next: "eiran-story-40"
},
{
  id: "eiran-story-40",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "",
  name: "",
  text: "Ліана залишилася чекати біля дверей, слухаючи, як усередині скриплять дошки під його кроками.",
  next: "eiran-story-41"
},
{
  id: "eiran-story-41",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "",
  name: "",
  text: "За кілька хвилин Ейран повернувся. У руках він тримав невеликий кристал, тьмяний камінь телепортації і старий складений аркуш із потемнілими краями.",
  next: "eiran-story-42"
},
{
  id: "eiran-story-42",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Ось. Кристал захисту, іще один камінь телепортації, і той самий ритуал.",
  next: "eiran-story-43"
},
{
  id: "eiran-story-43",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "",
  name: "",
  text: "Ліана обережно взяла речі.",
  next: "eiran-story-44"
},
{
  id: "eiran-story-44",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Чому ви віддаєте це мені?",
  next: "eiran-story-45"
},
{
  id: "eiran-story-45",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Бо я шукав відповіді, щоб урятувати тих, кого вже втратив. А ти ще можеш урятувати тих, хто живий.",
  next: "eiran-story-46"
},
{
  id: "eiran-story-46",
  background: "/assets/backgrounds/scene-eiran/scene-eiran2.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Не змушуй мене пошкодувати.",
  next: "tower-scene_good-path"
},
{
  id: "tower-scene_good-path",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_1.png",
  character: "",
  name: "",
  text: "Ліана зупинилася біля підніжжя вежі й міцніше стиснула в долоні камінь телепортації, який дав їй Ейран.",
  next: "tower-scene_good-path-1"
},
{
  id: "tower-scene_good-path-1",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Якщо Ейран зміг пробратися всередину… зможу і я.",
  next: "tower-scene_good-path-2"
},
{
  id: "tower-scene_good-path-2",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_1.png",
  character: "",
  name: "",
  text: "Вона заплющила очі.",
  next: "tower-scene_good-path-3"
},
{
  id: "tower-scene_good-path-3",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_1.png",
  character: "",
  name: "",
  text: "У голові Ліана намагалася уявити сховище вежі: старі полиці, записи, печаті, аркуші з ритуалами. Почати пошуки підказок, вона планувала звідти.",
  next: "tower-scene_good-path-4"
},
{
  id: "tower-scene_good-path-4",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_1.png",
  character: "",
  name: "",
  text: "Камінь у її руці став холодним. Потім, нестерпно важким.",
  next: "tower-scene_good-path-5"
},
{
  id: "tower-scene_good-path-5",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_1.png",
  character: "",
  name: "",
  text: "Ліана різко вдихнула, і світ навколо неї провалився в темряву.",
  next: "tower-scene_good-path-6"
},
{
  id: "tower-scene_good-path-6",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_2.png",
  character: "",
  name: "",
  text: "Коли вона розплющила очі, то побачила не сховище.",
  next: "tower-scene_good-path-7"
},
{
  id: "tower-scene_good-path-7",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_2.png",
  character: "",
  name: "",
  text: "Перед нею височіли величезні двері головної зали вежі. Холодна підлога під ногами була вкрита тонким шаром пилу, а десь високо над головою губилися темні склепіння.",
  next: "tower-scene_good-path-8"
},
{
  id: "tower-scene_good-path-8",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_2.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Ні… ні, ні, ні. Це не те місце.",
  next: "tower-scene_good-path-9"
},
{
  id: "tower-scene_good-path-9",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_2.png",
  character: "",
  name: "",
  text: "Вона розгублено подивилася на кристал.",
  next: "tower-scene_good-path-10"
},
{
  id: "tower-scene_good-path-10",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_2.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Я ж думала про сховище. Чому ти привів мене сюди?",
  next: "tower-scene_good-path-11"
},
{
  id: "tower-scene_good-path-11",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_2.png",
  character: "",
  name: "",
  text: "Вона стиснула камінь сильніше, почала нервово терти його пальцями, ніби могла змусити його спрацювати вдруге.",
  next: "tower-scene_good-path-12"
},
{
  id: "tower-scene_good-path-12",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_2.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Давай, ще раз, прошу. Раптом мене помітять охоронці.",
  next: "tower-scene_good-path-13"
},
{
  id: "tower-scene_good-path-13",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_2.png",
  character: "",
  name: "",
  text: "Нічого не сталося, камінь залишався тьмяним і мертвим.",
  next: "tower-scene_good-path-14"
},
{
  id: "tower-scene_good-path-14",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_2.png",
  character: "",
  name: "",
  text: "Ліана відчула, як холод повільно піднімається вздовж її спини.",
  next: "tower-scene_good-path-15"
},
{
  id: "tower-scene_good-path-15",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_2.png",
  character: "",
  name: "",
  text: "А потім вона помітила тишу. Абсолютну. У такому місці її не мало бути.",
  next: "tower-scene_good-path-17"
},
{
  id: "tower-scene_good-path-17",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_2.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Вежу мали охороняти. Тут мали бути кроки, голоси, патрулі, магічні печаті. Хоч щось.",
  next: "tower-scene_good-path-18"
},
{
  id: "tower-scene_good-path-18",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_2.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "То де всі?...",
  next: "tower-scene_good-path-19"
},
{
  id: "tower-scene_good-path-19",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_3.png",
  character: "",
  name: "",
  text: "Вона обережно рушила вперед.",
  next: "tower-scene_good-path-20"
},
{
  id: "tower-scene_good-path-20",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_3.png",
  character: "",
  name: "",
  text: "Кожен її крок лунав занадто голосно. Здавалося, вежа слухає її. Кам’яні стіни тягнулися вгору, вкриті старими символами, частина з яких було почорніла, ніби їх випалили зсередини.",
  next: "tower-scene_good-path-21"
},
  {
  id: "tower-scene_good-path-21",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_3.png",
  character: "",
  name: "",
  text: "Ліана піднялася сходами.",
  next: "tower-scene_good-path-22"
},
  {
  id: "tower-scene_good-path-22",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_4.png",
  character: "",
  name: "",
  text: "Вона вступила в коридор - і скрикнула, закривши рот руками.",
  next: "tower-scene_good-path-23"
},
{
  id: "tower-scene_good-path-23",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_5.png",
  character: "",
  name: "",
  text: "Біля дверей, де мали стояти охоронці, лежали тіла.",
  next: "tower-scene_good-path-24"
},
{
  id: "tower-scene_good-path-24",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_5.png",
  character: "",
  name: "",
  text: "Сухі та нерухомі, схожі радше на порожні оболонки, ніж на людей.",
  next: "tower-scene_good-path-25"
},
{
  id: "tower-scene_good-path-25",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_4.png",
  character: "",
  name: "",
  text: "Її очі розширилися, а на чолі виступив холодний піт.",
  next: "tower-scene_good-path-26"
},
{
  id: "tower-scene_good-path-26",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_4.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Ні...",
  next: "tower-scene_good-path-27"
},
{
  id: "tower-scene_good-path-27",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_4.png",
  character: "",
  name: "",
  text: "Вона зробила крок назад.",
  next: "tower-scene_good-path-28"
},
{
  id: "tower-scene_good-path-28",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_4.png",
  character: "",
  name: "",
  text: "І вперлася спиною в когось.",
  next: "tower-scene_good-path-29"
},
{
  id: "tower-scene_good-path-29",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_4.png",
  character: "",
  name: "",
  text: "Позаду пролунав тихий голос.",
  next: "tower-scene_good-path-3@"
},
{
  id: "tower-scene_good-path-3@",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_4.png",
  character: "",
  name: "",
  text: "Я не думав, що хтось наважиться навідатися в гості.",
  next: "tower-scene_good-path-30"
},
{
  id: "tower-scene_good-path-30",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_6.png",
  character: "",
  name: "",
  text: "Ліана різко обернулася.",
  next: "tower-scene_good-path-31"
},
{
  id: "tower-scene_good-path-31",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_6.png",
  character: "",
  name: "",
  text: "Прямо перед її лицем стояв молодий чоловік.",
  next: "tower-scene_good-path-32"
},
{
  id: "tower-scene_good-path-32",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_6.png",
  character: "",
  name: "",
  text: "Він усміхався так, ніби вся ця вежа була пасткою, а вона щойно сама зачинила за собою двері. ",
  next: "tower-scene_good-path-33"
},
{
  id: "tower-scene_good-path-33",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_6.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Хто ви?...",
  next: "tower-scene_good-path-34"
},
{
  id: "tower-scene_good-path-34",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_6.png",
  character: "/assets/characters/cael-withoutBg.png",
  name: "",
  text: "Ти виглядаєш так, ніби очікувала побачити тут когось іншого.",
  next: "tower-scene_good-path-35"
},
{
  id: "tower-scene_good-path-35",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_6.png",
  character: "",
  name: "",
  text: "Ліана зробила крок назад.",
  next: "tower-scene_good-path-36"
},
{
  id: "tower-scene_good-path-36",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_6.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Що сталося з охороною?",
  next: "tower-scene_good-path-37"
},
{
  id: "tower-scene_good-path-37",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_6.png",
  character: "",
  name: "",
  text: "Чоловік байдуже перевів погляд на коридор.",
  next: "tower-scene_good-path-38"
},
{
  id: "tower-scene_good-path-38",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_6.png",
  character: "/assets/characters/cael-withoutBg.png",
  name: "",
  text: "Вони залишилися на своїх місцях. Як і належить хорошій охороні.",
  next: "tower-scene_good-path-39"
},
{
  id: "tower-scene_good-path-39",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_6.png",
  character: "",
  name: "",
  text: "Ліана відчула, як їй від жаху перехопило подих.",
  next: "tower-scene_good-path-40"
},
{
  id: "tower-scene_good-path-40",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_7.png",
  character: "",
  name: "",
  text: "Потім розвернулась, і побігла.",
  next: "tower-scene_good-path-41"
},
{
  id: "tower-scene_good-path-41",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_7.png",
  character: "",
  name: "",
  text: "Він залишився стояти на місці, лише проводив її поглядом.",
  next: "tower-scene_good-path-42"
},
{
  id: "tower-scene_good-path-42",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_7.png",
  character: "/assets/characters/cael-withoutBg.png",
  name: "",
  text: "Біжи, Ліано.",
  next: "tower-scene_good-path-43"
},
{
  id: "tower-scene_good-path-43",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_7.png",
  character: "",
  name: "",
  text: "Його голос звучав холодно та повільно.",
  next: "tower-scene_good-path-44"
},
{
  id: "tower-scene_good-path-44",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_7.png",
  character: "/assets/characters/cael-withoutBg.png",
  name: "",
  text: "Вежа любить, коли здобич думає, що має вибір.",
  next: "tower-scene_good-path-45"
},
{
  id: "tower-scene_good-path-45",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_7.png",
  character: "",
  name: "",
  text: "Ліана бігла коридорами, майже не розбираючи дороги.",
  next: "tower-scene_good-path-46"
},
{
  id: "tower-scene_good-path-46",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_7.png",
  character: "",
  name: "",
  text: "Сходи. Поворот. Ще одні сходи.",
  next: "tower-scene_good-path-47"
},
{
  id: "tower-scene_good-path-47",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_7.png",
  character: "",
  name: "",
  text: "Стіни ставали вужчими, а повітря холоднішим. Десь позаду лунали непоспішні кроки.",
  next: "tower-scene_good-path-48"
},
{
  id: "tower-scene_good-path-48",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_7.png",
  character: "",
  name: "",
  text: "Він ішов так, ніби точно знав: їй нікуди подітися.",
  next: "tower-scene_good-path-49"
},
{
  id: "tower-scene_good-path-49",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_7.png",
  character: "",
  name: "",
  text: "Ліана дісталася верхівки вежі.",
  next: "tower-scene_good-path-50"
},
{
  id: "tower-scene_good-path-50",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_8.png",
  character: "",
  name: "",
  text: "Перед нею відчинилися двері до просторої кімнати з високими вікнами й виходом на балкон. За ним лежала вся темна Еларія.",
  next: "tower-scene_good-path-51"
},
{
  id: "tower-scene_good-path-51",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_8.png",
  character: "",
  name: "",
  text: "Ліана вибігла на балкон і дістала обидва камені: кристал захисту і камінь телепортації.",
  next: "tower-scene_good-path-52"
},
{
  id: "tower-scene_good-path-52",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_8.png",
  character: "",
  name: "",
  text: "Її пальці тремтіли так сильно, що вона ледь не впустила їх.",
  next: "tower-scene_good-path-53"
},
{
  id: "tower-scene_good-path-53",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_8.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Ну ж бо... ну ж бо...",
  next: "tower-scene_good-path-54"
},
{
  id: "tower-scene_good-path-54",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_8.png",
  character: "",
  name: "",
  text: "Вона почала терти камінь телепортації, шепочучи уривки заклять, які знала зі столиці.",
  next: "tower-scene_good-path-55"
},
{
  id: "tower-scene_good-path-55",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_8.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Забери мене звідси, куди завгодно. Просто забери.",
  next: "tower-scene_good-path-56"
},
{
  id: "tower-scene_good-path-56",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_8.png",
  character: "",
  name: "",
  text: "Позаду скрипнули двері. Ліана завмерла.",
  next: "tower-scene_good-path-57"
},
{
  id: "tower-scene_good-path-57",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_9.png",
  character: "/assets/characters/cael-withoutBg.png",
  name: "",
  text: "Нестабільні артефакти рідко слухаються тих, хто панікує.",
  next: "tower-scene_good-path-58"
},
{
  id: "tower-scene_good-path-58",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_9.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Не підходьте.",
  next: "tower-scene_good-path-59"
},
{
  id: "tower-scene_good-path-59",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_9.png",
  character: "/assets/characters/cael-withoutBg.png",
  name: "",
  text: "Ти сама прийшла в мою вежу.",
  next: "tower-scene_good-path-60"
},
{
  id: "tower-scene_good-path-60",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_9.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Вона не ваша.",
  next: "tower-scene_good-path-61"
},
{
  id: "tower-scene_good-path-61",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_9.png",
  character: "/assets/characters/cael-withoutBg.png",
  name: "",
  text: "Сміливі слова для людини, яка стоїть на краю.",
  next: "tower-scene_good-path-62"
},
{
  id: "tower-scene_good-path-62",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_9.png",
  character: "",
  name: "",
  text: "Ліана відступила. Один крок, другий.",
  next: "tower-scene_good-path-63"
},
{
  id: "tower-scene_good-path-63",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_9.png",
  character: "",
  name: "",
  text: "Чоловік ішов повільно, майже ліниво. Його погляд був холодним, але в ньому було щось дивне - ніби за цією байдужістю на мить пробивалося щось інше.",
  next: "tower-scene_good-path-64"
},
{
  id: "tower-scene_good-path-64",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_9.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Що ви зробили з людьми внизу?",
  next: "tower-scene_good-path-65"
},
{
  id: "tower-scene_good-path-65",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_9.png",
  character: "/assets/characters/cael-withoutBg.png",
  name: "",
  text: "Я? Нічого.",
  next: "tower-scene_good-path-66"
},
{
  id: "tower-scene_good-path-66",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_9.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Вони мертві.",
  next: "tower-scene_good-path-67"
},
{
  id: "tower-scene_good-path-67",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_9.png",
  character: "/assets/characters/cael-withoutBg.png",
  name: "",
  text: "У цій вежі смерть — не найгірше, що може статися.",
  next: "tower-scene_good-path-68"
},
{
  id: "tower-scene_good-path-68",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_9.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Ви чудовисько.",
  next: "tower-scene_good-path-69"
},
{
  id: "tower-scene_good-path-69",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_9.png",
  character: "",
  name: "",
  text: "Він на мить зупинився. Його усмішка стала тоншою.",
  next: "tower-scene_good-path-70"
},
{
  id: "tower-scene_good-path-70",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_9.png",
  character: "",
  name: "",
  text: "Він зробив ще крок.",
  next: "tower-scene_good-path-71"
},
{
  id: "tower-scene_good-path-71",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_9.png",
  character: "/assets/characters/cael-withoutBg.png",
  name: "",
  text: "Можливо, ти ще не знаєш кого треба боятись.",
  next: "tower-scene_good-path-72"
},
{
  id: "tower-scene_good-path-72",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_9.png",
  character: "",
  name: "",
  text: "Ліана відчула за спиною холодний камінь балконного краю.",
  next: "tower-scene_good-path-73"
},
{
  id: "tower-scene_good-path-73",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_9.png",
  character: "",
  name: "",
  text: "Далі відступати було нікуди.",
  next: "tower-scene_good-path-74"
},
{
  id: "tower-scene_good-path-74",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_9.png",
  character: "",
  name: "",
  text: "Каель підійшов майже впритул.",
  next: "tower-scene_good-path-75"
},
{
  id: "tower-scene_good-path-75",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_9.png",
  character: "",
  name: "",
  text: "Ліана стиснула камінь телепортації так сильно, що пальці заболіли.",
  next: "tower-scene_good-path-76"
},
{
  id: "tower-scene_good-path-76",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_9.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Не торкайтеся мене.",
  next: "tower-scene_good-path-77"
},
{
  id: "tower-scene_good-path-77",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_9.png",
  character: "",
  name: "",
  text: "Каель підняв руку.",
  next: "tower-scene_good-path-78"
},
{
  id: "tower-scene_good-path-78",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_9.png",
  character: "",
  name: "",
  text: "І саме в цю мить амулет на шиї Ліани спалахнув синім світлом.",
  next: "tower-scene_good-path-79"
},
{
  id: "tower-scene_good-path-79",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_9.png",
  character: "",
  name: "",
  text: "Каель різко здригнувся, його обличчя змінилося.",
  next: "tower-scene_good-path-80"
},
{
  id: "tower-scene_good-path-80",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_9.png",
  character: "",
  name: "",
  text: "Усмішка зникла, і на мить в його очах можна було розгледіти не холод, а страх.",
  next: "tower-scene_good-path-81"
},
{
  id: "tower-scene_good-path-81",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_9.png",
  character: "/assets/characters/cael-withoutBg.png",
  name: "",
  text: "Ліано, стій-",
  next: "tower-scene_good-path-82"
},
{
  id: "tower-scene_good-path-82",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_9.png",
  character: "",
  name: "",
  text: "Вона інстинктивно відступила.",
  next: "tower-scene_good-path-83"
},
{
  id: "tower-scene_good-path-83",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_10.png",
  character: "",
  name: "",
  text: "Перекинулась через бортик.",
  next: "tower-scene_good-path-84"
},
{
  id: "tower-scene_good-path-84",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_10.png",
  character: "",
  name: "",
  text: "Світ різко перекинувся. Ліана падала.",
  next: "tower-scene_good-path-85"
},
{
  id: "tower-scene_good-path-85",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_10.png",
  character: "",
  name: "",
  text: "Вітер ударив у лице, вирвав подих із грудей. Вежа, балкон, темне небо - усе розпливлося в одну холодну пляму.",
  next: "tower-scene_good-path-86"
},
{
  id: "tower-scene_good-path-86",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_11.png",
  character: "",
  name: "",
  text: "Останнє, що вона побачила, було синє світло амулета.",
  next: "tower-scene_good-path-87"
},
{
  id: "tower-scene_good-path-87",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_11.png",
  character: "",
  name: "",
  text: "І цього страшного чоловіка.",
  next: "tower-scene_good-path-88"
},
{
  id: "tower-scene_good-path-88",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_11.png",
  character: "",
  name: "",
  text: "Він кинувся до краю балкона, вхопився рукою за камінь і потягнувся до неї.",
  next: "tower-scene_good-path-89"
},
{
  id: "tower-scene_good-path-89",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_11.png",
  character: "",
  name: "",
  text: "На його обличчі більше не було ні усмішки, ні зверхності.",
  next: "tower-scene_good-path-90"
},
{
  id: "tower-scene_good-path-90",
  background: "/assets/backgrounds/scene-tower_good-path/scene-tower_11.png",
  character: "",
  name: "",
  text: "Лише розпачлива, майже людська тривога.",
  next: "tower-scene_good-path-91"
},
{
  id: "tower-scene_good-path-91",
  background: "",
  character: "",
  name: "",
  text: "І світ поглинула темрява.",
  next: "mira-hideout_good-path-1"
},
{
id: "mira-hideout_good-path-1",
background: "",
character: "",
name: "",
text: "Темрява відступала повільно. У голові дзвеніло, Ліана чула лише далекий шум потріскування свічок і власне уривчасте дихання.",
next: "mira-hideout_good-path-2"
},
{
id: "mira-hideout_good-path-2",
background: "/assets/backgrounds/mira-hideout/scene-1.png",
character: "",
name: "",
text: "Вона розплющила очі й побачила над собою низьку кам’яну стелю. На стінах висіли засушені трави, старі карти, срібні обереги й білі тканини з вишитими магічними знаками.",
next: "mira-hideout_good-path-3"
},
{
id: "mira-hideout_good-path-3",
background: "/assets/backgrounds/mira-hideout/scene-1.png",
character: "/assets/characters/liana-withoutBackground.png",
name: "Ліана",
text: "Де… де я?",
next: "mira-hideout_good-path-4"
},
{
id: "mira-hideout_good-path-4",
background: "/assets/backgrounds/mira-hideout/scene-1.png",
character: "",
name: "",
text: "У безпечному місці. Принаймні настільки безпечному, наскільки це можливо зараз.",
next: "mira-hideout_good-path-5"
},
{
id: "mira-hideout_good-path-5",
background: "",
character: "/assets/characters/liana-withoutBackground.png",
name: "Ліана",
text: "Ви… врятували мене?",
next: "mira-hideout_good-path-6"
},
{
id: "mira-hideout_good-path-6",
background: "/assets/backgrounds/mira-hideout/scene-2.png",
character: "",
name: "",
text: "Ти падала з верхівки вежі. Я призупинила падіння, але ти добряче вдарилась головою. Якби я запізнилась, ця розмова вже не відбулася б.",
next: "mira-hideout_good-path-7"
},
{
id: "mira-hideout_good-path-7",
background: "/assets/backgrounds/mira-hideout/scene-2.png",
character: "/assets/characters/liana-withoutBackground.png",
name: "Ліана",
text: "У всьому.. Винен.. Чоловік, із червоним волоссям, він був там. А як я летіла... Він тягнувся до мене.",
next: "mira-hideout_good-path-8"
},
{
id: "mira-hideout_good-path-8",
background: "/assets/backgrounds/mira-hideout/scene-2.png",
character: "",
name: "",
text: "Тягнувся? Ні, дитино. Він не рятує, він тільки забирає.",
next: "mira-hideout_good-path-9"
},
{
id: "mira-hideout_good-path-9",
background: "/assets/backgrounds/mira-hideout/scene-2.png",
character: "/assets/characters/liana-withoutBackground.png",
name: "Ліана",
text: "А ви хто?",
next: "mira-hideout_good-path-10"
},
{
id: "mira-hideout_good-path-10",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Колись мене називали Білою відьмою. Ще раніше - хранителькою вежі. А моє справжнє ім’я - Міра.",
next: "mira-hideout_good-path-11"
},
{
id: "mira-hideout_good-path-11",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/liana-withoutBackground.png",
name: "Ліана",
text: "Міра… Гацліт?",
next: "mira-hideout_good-path-12"
},
{
id: "mira-hideout_good-path-12",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Це ім’я давно не вимовляли вголос.",
next: "mira-hideout_good-path-13"
},
{
id: "mira-hideout_good-path-13",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "",
name: "",
text: "Погляд Міри на мить ковзнув до грудей Ліани. Туди, де під тканиною слабко світився синій камінь амулета.",
next: "mira-hideout_good-path-14"
},
{
id: "mira-hideout_good-path-14",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "А це... звідки в тебе?",
next: "mira-hideout_good-path-15"
},
{
id: "mira-hideout_good-path-15",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/liana-withoutBackground.png",
name: "Ліана",
text: "Амулет?",
next: "mira-hideout_good-path-16"
},
{
id: "mira-hideout_good-path-16",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Так. Хто дав його тобі?",
next: "mira-hideout_good-path-17"
},
{
id: "mira-hideout_good-path-17",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/liana-withoutBackground.png",
name: "Ліана",
text: "Мама. Точніше… я знайшла його в її скриньці. Серед старих прикрас.",
next: "mira-hideout_good-path-18"
},
{
id: "mira-hideout_good-path-18",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Твоя мати знала, що це за річ?",
next: "mira-hideout_good-path-19"
},
{
id: "mira-hideout_good-path-19",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/liana-withoutBackground.png",
name: "Ліана",
text: "Не знаю. Вона ніколи не говорила про нього. Або я просто була надто мала, щоб зрозуміти.",
next: "mira-hideout_good-path-20"
},
{
id: "mira-hideout_good-path-20",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "І коли ти вперше взяла його в руки… щось сталося?",
next: "mira-hideout_good-path-21"
},
{
id: "mira-hideout_good-path-21",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/liana-withoutBackground.png",
name: "Ліана",
text: "Звідки ви...",
next: "mira-hideout_good-path-22"
},
{
id: "mira-hideout_good-path-22",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/liana-withoutBackground.png",
name: "Ліана",
text: "Я побачила видіння: місто, бій, велику чорну істоту над столицею. І рудоволосу жінку, яка стояла проти неї.",
next: "mira-hideout_good-path-23"
},
{
id: "mira-hideout_good-path-23",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/liana-withoutBackground.png",
name: "Ліана",
text: "Вона тримала посох, навколо були маги, вони допомагали їй. А на її грудях був такий самий амулет.",
next: "mira-hideout_good-path-24"
},
{
id: "mira-hideout_good-path-24",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "",
name: "",
text: "Обличчя Міри майже не змінилося. Але у її очах на мить промайнула зацікавленість.",
next: "mira-hideout_good-path-25"
},
{
id: "mira-hideout_good-path-25",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Ти бачила Святу Агату.",
next: "mira-hideout_good-path-26"
},
{
id: "mira-hideout_good-path-26",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/liana-withoutBackground.png",
name: "Ліана",
text: "Святу Агату?",
next: "mira-hideout_good-path-27"
},
{
id: "mira-hideout_good-path-27",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Так, хоч тоді вона ще не була святою. Вона була головою Управління з питань магії. Командиркою, людиною, яка зупинила Морок.",
next: "mira-hideout_good-path-28"
},
{
id: "mira-hideout_good-path-28",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/liana-withoutBackground.png",
name: "Ліана",
text: "Яке відношення вона має до мого амулета?",
next: "mira-hideout_good-path-29"
},
{
id: "mira-hideout_good-path-29",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Якщо він опинився в твоїй родині, тоді відповідь очевидна. Ти її кров.",
next: "mira-hideout_good-path-30"
},
{
id: "mira-hideout_good-path-30",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/liana-withoutBackground.png",
name: "Ліана",
text: "Що?.. Ні. Це неможливо.",
next: "mira-hideout_good-path-31"
},
{
id: "mira-hideout_good-path-31",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Агата заповіла передати амулет своїй родині. Від покоління до покоління. На випадок, якщо тінь колись повернеться.",
next: "mira-hideout_good-path-32"
},
{
id: "mira-hideout_good-path-32",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Якщо ти побачила ці видіння, схоже, що вона залишила в ньому частину своєї сили, із пам'ятью про той день.",
next: "mira-hideout_good-path-33"
},
{
id: "mira-hideout_good-path-33",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/liana-withoutBackground.png",
name: "Ліана",
text: "Чому моя мама ніколи не сказала мені?",
next: "mira-hideout_good-path-34"
},
{
id: "mira-hideout_good-path-34",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Можливо, хотіла захистити. Іноді правда не рятує дитину, лише забирає в неї сон.",
next: "mira-hideout_good-path-35"
},
{
id: "mira-hideout_good-path-35",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/liana-withoutBackground.png",
name: "Ліана",
text: "У вежі... що там сталося?",
next: "mira-hideout_good-path-36"
},
{
id: "mira-hideout_good-path-36",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/liana-withoutBackground.png",
name: "Ліана",
text: "Я бачила солдатів. Вони були... наче з них забрали життя. А цей чоловік стояв серед усього цього так, ніби чекав на мене.",
next: "mira-hideout_good-path-37"
},
{
id: "mira-hideout_good-path-37",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Бо він і чекав.",
next: "mira-hideout_good-path-38"
},
{
id: "mira-hideout_good-path-38",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Його ім'я Каель, він не людина, якою здається. Він уособлення тієї тіні. Обличчя, яке Морок навчився носити, щоб говорити з нами.",
next: "mira-hideout_good-path-39"
},
{
id: "mira-hideout_good-path-39",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/liana-withoutBackground.png",
name: "Ліана",
text: "Невже... це правда?",
next: "mira-hideout_good-path-40"
},
{
id: "mira-hideout_good-path-40",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Я була там, коли він уперше прийшов.",
next: "mira-hideout_good-path-41"
},
{
id: "mira-hideout_good-path-41",
background: "/assets/backgrounds/mira-hideout/scene-4.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Триста років тому я стояла на полі бою поруч з Агатою. Я була молодою і самовпевненою. Її правою рукою.",
next: "mira-hideout_good-path-42"
},
{
id: "mira-hideout_good-path-42",
background: "/assets/backgrounds/mira-hideout/scene-5.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Ми думали, що знаємо межі магії. А потім небо розірвала тінь.",
next: "mira-hideout_good-path-43"
},
{
id: "mira-hideout_good-path-43",
background: "/assets/backgrounds/mira-hideout/scene-5.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Вона не просто вбивала. Вона стирала імена, обличчя, людей, любов, провину. Люди залишалися стояти, але вже не пам’ятали, ким були.",
next: "mira-hideout_good-path-44"
},
{
id: "mira-hideout_good-path-44",
background: "/assets/backgrounds/mira-hideout/scene-5.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Агата зрозуміла те, чого не хотів приймати ніхто з нас: у тій подобі в якій він був, тінь не можна було просто знищити.",
next: "mira-hideout_good-path-45"
},
{
id: "mira-hideout_good-path-45",
background: "/assets/backgrounds/mira-hideout/scene-6.png",
character: "/assets/characters/liana-withoutBackground.png",
name: "Ліана",
text: "І вона запечатала її у собі.",
next: "mira-hideout_good-path-46"
},
{
id: "mira-hideout_good-path-46",
background: "/assets/backgrounds/mira-hideout/scene-6.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Так. А після її смерті мощі Агати перенесли до підвалу вежі й наклали додаткову печать.",
next: "mira-hideout_good-path-47"
},
{
id: "mira-hideout_good-path-47",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Двісті років я живила цю печать власною силою. День за днем? рік за роком. Поки всі навколо будували життя на забутій жертві Агати.",
next: "mira-hideout_good-path-48"
},
{
id: "mira-hideout_good-path-48",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "А останні п’ятдесят років моєї сили вже не вистачало. Печать слабшала, а тінь почала просочуватися в місто.",
next: "mira-hideout_good-path-49"
},
{
id: "mira-hideout_good-path-49",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/liana-withoutBackground.png",
name: "Ліана",
text: "Саме тому люди почали забувати?",
next: "mira-hideout_good-path-50"
},
{
id: "mira-hideout_good-path-50",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Так. Спершу дрібниці, потім імена, потім тих, кого любили.",
next: "mira-hideout_good-path-51"
},
{
id: "mira-hideout_good-path-51",
background: "/assets/backgrounds/mira-hideout/scene-7.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Десять років тому я вступила з нею в бій. Але через всі роки спустошення своєї сили, я виявилась надто слабкою. Мене сильно поранили, і я мусила піти, шукати спосіб знову замкнути те, що прокинулося.",
next: "mira-hideout_good-path-52"
},
{
id: "mira-hideout_good-path-52",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/liana-withoutBackground.png",
name: "Ліана",
text: "А Каель?",
next: "mira-hideout_good-path-53"
},
{
id: "mira-hideout_good-path-53",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Каель - це її голод у людській подобі. Він живиться спогадами, щоб повернути собі силу.",
next: "mira-hideout_good-path-54"
},
{
id: "mira-hideout_good-path-54",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/liana-withoutBackground.png",
name: "Ліана",
text: "Але він… коли я падала, він виглядав не так, ніби хотів мене знищити.",
next: "mira-hideout_good-path-55"
},
{
id: "mira-hideout_good-path-55",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Тінь уміє приймати ті обличчя, яким хочеться повірити.",
next: "mira-hideout_good-path-56"
},
{
id: "mira-hideout_good-path-56",
background: "/assets/backgrounds/scene-tower_good-path/scene-tower_11.png",
character: "",
name: "",
text: "Ліана опустила погляд. Слова Міри звучали переконливо. Надто переконливо. Але в пам’яті все ще стояло обличчя Каеля над балконом - не зверхнє, не насмішкувате, а злякане.",
next: "mira-hideout_good-path-57"
},
{
id: "mira-hideout_good-path-57",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Ліано. Твій амулет може все змінити.",
next: "mira-hideout_good-path-58"
},
{
id: "mira-hideout_good-path-58",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/liana-withoutBackground.png",
name: "Ліана",
text: "Що ви маєте на увазі?",
next: "mira-hideout_good-path-59"
},
{
id: "mira-hideout_good-path-59",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Якщо частина сили Агати справді залишилася в ньому, я зможу використати її для нової печаті.",
next: "mira-hideout_good-path-60"
},
{
id: "mira-hideout_good-path-60",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Дай його мені. Я вивчу його структуру й зрозумію, як повернути тінь назад.",
next: "mira-hideout_good-path-61"
},
{
id: "mira-hideout_good-path-61",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/liana-withoutBackground.png",
name: "Ліана",
text: "Ні.",
next: "mira-hideout_good-path-62"
},
{
id: "mira-hideout_good-path-62",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Ні?",
next: "mira-hideout_good-path-63"
},
{
id: "mira-hideout_good-path-63",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/liana-withoutBackground.png",
name: "Ліана",
text: "Я вдячна вам за порятунок. Справді, але це єдина річ, яка залишилася мені від мами. І якщо вона дійсно пов’язана з Агатою, я не можу просто віддати її з рук.",
next: "mira-hideout_good-path-64"
},
{
id: "mira-hideout_good-path-64",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Я розумію.",
next: "mira-hideout_good-path-65"
},
{
id: "mira-hideout_good-path-65",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "",
name: "",
text: "Міра усміхнулася м’яко, майже тепло. Але її очі залишилися холодними.",
next: "mira-hideout_good-path-66"
},
{
id: "mira-hideout_good-path-66",
background: "/assets/backgrounds/mira-hideout/scene-3.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Як забажаєш. Ти пережила важкий день, тому відпочинь. Завтра ми вирішимо, що робити далі.",
next: "mira-hideout_good-path-67"
},
{
id: "mira-hideout_good-path-67",
background: "/assets/backgrounds/mira-hideout/scene-8.png",
character: "",
name: "",
text: "Пізніше, коли в сховку згасли майже всі свічки, Ліана лежала нерухомо, але сон не приходив.",
next: "mira-hideout_good-path-68"
},
{
id: "mira-hideout_good-path-68",
background: "/assets/backgrounds/mira-hideout/scene-8.png",
character: "",
name: "",
text: "Вона знову й знову згадувала слова Міри. Агата. Печать. Каель. Тінь. Усе складалося в одну історію, але в цій історії щось було надто рівним. Надто зручним.",
next: "mira-hideout_good-path-69"
},
{
id: "mira-hideout_good-path-69",
background: "/assets/backgrounds/mira-hideout/scene-8.png",
character: "",
name: "",
text: "Раптом за спиною тихо скрипнула дошка.",
next: "mira-hideout_good-path-70"
},
{
id: "mira-hideout_good-path-70",
background: "/assets/backgrounds/mira-hideout/scene-9.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Спи, Ліано.",
next: "mira-hideout_good-path-71"
},
{
id: "mira-hideout_good-path-71",
background: "/assets/backgrounds/mira-hideout/scene-9.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Забудь страх, забудь сумнів. Віддай мені те, що має врятувати нас усіх.",
next: "mira-hideout_good-path-72"
},
{
id: "mira-hideout_good-path-72",
background: "/assets/backgrounds/mira-hideout/scene-9.png",
character: "",
name: "",
text: "Повітря над Ліаною здригнулося. Сріблясте закляття лягло на кімнату, наче тонка павутина.",
next: "mira-hideout_good-path-73"
},
{
id: "mira-hideout_good-path-73",
background: "/assets/backgrounds/mira-hideout/scene-9.png",
character: "",
name: "",
text: "На у кишені Ліани під тканиною ледь чутно затремтів кристал, який дав Ейран.",
next: "mira-hideout_good-path-74"
},
{
id: "mira-hideout_good-path-74",
background: "/assets/backgrounds/mira-hideout/scene-9.png",
character: "/assets/characters/liana-withoutBackground.png",
name: "Ліана",
text: "…",
next: "mira-hideout_good-path-75"
},
{
id: "mira-hideout_good-path-75",
background: "/assets/backgrounds/mira-hideout/scene-9.png",
character: "",
name: "",
text: "Ліана не поворухнулася. Дихала рівно. Вдавала, що спить.",
next: "mira-hideout_good-path-76"
},
{
id: "mira-hideout_good-path-76",
background: "/assets/backgrounds/mira-hideout/scene-9.png",
character: "/assets/characters/mira-withoutBg.png",
name: "Міра",
text: "Добре. Завтра ти сама принесеш його мені.",
next: "mira-hideout_good-path-77"
},
{
id: "mira-hideout_good-path-77",
background: "/assets/backgrounds/mira-hideout/scene-9.png",
character: "",
name: "",
text: "Кроки Міри повільно віддалилися. Двері тихо зачинилися.",
next: "mira-hideout_good-path-78"
},
{
id: "mira-hideout_good-path-78",
background: "/assets/backgrounds/mira-hideout/scene-10.png",
character: "/assets/characters/liana-withoutBackground.png",
name: "Ліана",
text: "Отже, Орвен був правий...",
next: "mira-hideout_good-path-79"
},
{
id: "mira-hideout_good-path-79",
background: "/assets/backgrounds/mira-hideout/scene-10.png",
character: "/assets/characters/liana-withoutBackground.png",
name: "Ліана",
text: "Не довіряй світлу тільки тому, що воно біле.",
next: "mira-hideout_good-path-80"
},
{
id: "mira-hideout_good-path-80",
background: "/assets/backgrounds/mira-hideout/scene-10.png",
character: "",
name: "",
text: "Вона дочекалася, поки в сховку запанує повна тиша.",
next: "mira-hideout_good-path-81"
},
{
id: "mira-hideout_good-path-81",
background: "/assets/backgrounds/mira-hideout/scene-10.png",
character: "",
name: "",
text: "Потім обережно підвелася, переодягнулась у свій одяг, забрала амулет, кристал захисту й аркуш із ритуалом, який дав їй Ейран.",
next: "mira-hideout_good-path-82"
},
{
id: "mira-hideout_good-path-82",
background: "/assets/backgrounds/mira-hideout/scene-10.png",
character: "/assets/characters/liana-withoutBackground.png",
name: "Ліана",
text: "Я маю повернутися до вежі. Але цього разу - не як здобич.",
next: "mira-hideout_good-path-83"
},
{
id: "mira-hideout_good-path-83",
background: "/assets/backgrounds/mira-hideout/scene-11.png",
character: "",
name: "",
text: "Ліана тихо відчинила вікно й вистрибнула в ніч. Попереду знову височіла темна, мовчазна і повна відповідей вежа, які хтось дуже не хотів їй показувати.",
next: "final_good-path_1"
},
  {
    id: "final_good-path_1",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-1.png",
    character: "",
    name: "",
    text: "Ліана знову стояла перед вежею. Цього разу вона не шукала таємного входу і не ховалася в тінях.",
    next: "final_good-path_2"
  },
  {
    id: "final_good-path_2",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-1.png",
    character: "",
    name: "",
    text: "Вона штовхнула важкі двері головного входу. Камінь озвався глухим стогоном",
    next: "final_good-path_3"
  },
  {
    id: "final_good-path_3",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-2.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Каелю!",
    next: "final_good-path_4"
  },
  {
    id: "final_good-path_4",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-2.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Я не прийшла просити тебе повірити мені. І не прийшла казати, що довіряю тобі.",
    next: "final_good-path_5"
  },
  {
    id: "final_good-path_5",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-2.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Але коли я падала... ти не виглядав тим, хто хотів моєї смерті.",
    next: "final_good-path_6"
  },
  {
    id: "final_good-path_6",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-3.png",
    character: "",
    name: "",
    text: "У глибині зали щось заворушилося. Темрява зібралася в людську постать, і з неї вийшов Каель.",
    next: "final_good-path_7"
  },
  {
    id: "final_good-path_7",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-3.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Ти справді повернулась. А я вже думав, що страх нарешті навчив тебе розуму.",
    next: "final_good-path_8"
  },
  {
    id: "final_good-path_8",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-3.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Ні. Страх просто навчив мене дивитись уважніше.",
    next: "final_good-path_9"
  },
  {
    id: "final_good-path_9",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-3.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Тоді подивися уважно зараз. Перед тобою те, що залишиться останнім, коли місто забуде навіть власну назву.",
    next: "final_good-path_10"
  },
  {
    id: "final_good-path_10",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-3.png",
    character: "",
    name: "",
    text: "Темрява навколо його руки стиснулася, наче жива. Але Ліана не відступила.",
    next: "final_good-path_11"
  },
  {
    id: "final_good-path_11",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-3.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Ти говориш його голосом, але не завжди очима справжнього власника тіла.",
    next: "final_good-path_12"
  },
  {
    id: "final_good-path_12",
    background: "/assets/backgrounds/finale_good-path/scene-1.png",
    character: "",
    name: "",
    text: "Вона підійшла впритул. Однією рукою торкнулася грудей Каеля, а в іншій стиснула амулет.",
    next: "final_good-path_13"
  },
  {
    id: "final_good-path_13",
    background: "/assets/backgrounds/finale_good-path/scene-1.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Можливо, саме він змушує тебе згадувати себе.",
    next: "final_good-path_14"
  },
  {
    id: "final_good-path_14",
    background: "/assets/backgrounds/finale_good-path/scene-2.png",
    character: "",
    name: "",
    text: "Амулет спалахнув синім. Світло пройшло крізь пальці Ліани і вдарило в груди Каеля.",
    next: "final_good-path_15"
  },
  {
    id: "final_good-path_15",
    background: "/assets/backgrounds/finale_good-path/scene-3.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Відійди. Щоб не нашкодив.",
    next: "final_good-path_16"
  },
  {
    id: "final_good-path_16",
    background: "/assets/backgrounds/finale_good-path/scene-3.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Це ти, справжній Каель?",
    next: "final_good-path_17"
  },
  {
    id: "final_good-path_17",
    background: "/assets/backgrounds/finale_good-path/scene-3.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Поки що. Але тінь довго не дасть мені говорити. Тому в мене мало часу!",
    next: "final_good-path_18"
  },
  {
    id: "final_good-path_18",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-7.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Міра брехала тобі. Вона не просто стримувала Тінь, вона хотіла навчитись користуватися тим, що сиділо під печаттю.",
    next: "final_good-path_19"
  },
  {
    id: "final_good-path_19",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-7.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Коли сил стало замало, вона вирішила не закрити прірву. Вона захотіла забрати собі те, що було всередині.",
    next: "final_good-path_20"
  },
  {
    id: "final_good-path_20",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-7.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Тобто вона хоче не врятувати місто?",
    next: "final_good-path_21"
  },
  {
    id: "final_good-path_21",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-7.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Вона хоче вижити. І стати достатньо сильною, щоб більше ніколи нікого не боятися.",
    next: "final_good-path_22"
  },
  {
    id: "final_good-path_22",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-7.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Тоді ми мусимо зупинити її.",
    next: "final_good-path_23"
  },
  {
    id: "final_good-path_23",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-7.png",
   character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Ти кажеш це так, ніби в нас є армія, план і хоча б одна добра новина.",
    next: "final_good-path_24"
  },
  {
    id: "final_good-path_24",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-7.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "У нас є я, ти, амулет. І... кілька речей, які майже точно вже не працюють.",
    next: "final_good-path_25"
  },
  {
    id: "final_good-path_25",
    background: "/assets/backgrounds/finale_good-path/scene-4.png",
    character: "",
    name: "",
    text: "Ліана витягнула камінь захисту, камінь телепортації і старий аркуш із закляттям Ейрана.",
    next: "final_good-path_26"
  },
  {
    id: "final_good-path_26",
    background: "/assets/backgrounds/finale_good-path/scene-4.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Камені одноразові, вони вже спрацювали. Отже, користі від них приблизно як від парасольки в ураган.",
    next: "final_good-path_27"
  },
  {
    id: "final_good-path_27",
    background: "/assets/backgrounds/finale_good-path/scene-4.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "А це?",
    next: "final_good-path_28"
  },
  {
    id: "final_good-path_28",
    background: "/assets/backgrounds/finale_good-path/scene-4.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Закляття. Написане старою мовою. Проблема в тому, що я абсолютно його не розумію.",
    next: "final_good-path_29-description"
  },
  {
    id: "final_good-path_29-description",
    background: "/assets/backgrounds/finale_good-path/scene-5.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "На хвилину запала тиша, Ліана роздумувала.",
    next: "final_good-path_29"
  },
  {
    id: "final_good-path_29",
    background: "/assets/backgrounds/finale_good-path/scene-5.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Але Тінь повинна бути стара. Дуже стара.",
    next: "final_good-path_30"
  },
  {
    id: "final_good-path_30",
    background: "/assets/backgrounds/finale_good-path/scene-5.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Ти хочеш, щоб я попросив чудовисько в моїй голові допомогти нам прочитати записку?",
    next: "final_good-path_31"
  },
  {
    id: "final_good-path_31",
    background: "/assets/backgrounds/finale_good-path/scene-5.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Ні. Я хочу, щоб ти взяв під контроль його сили. Із допомогою амулету, я думаю це реально.",
    next: "final_good-path_32"
  },
  {
    id: "final_good-path_32",
    background: "/assets/backgrounds/finale_good-path/scene-5.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Це звучить небезпечно.",
    next: "final_good-path_33"
  },
  {
    id: "final_good-path_33",
    background: "/assets/backgrounds/finale_good-path/scene-5.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Але все інше звучить як гарантована катастрофа. Я обираю небезпечний варіант, у якого хоча б є найменший шанс.",
    next: "final_good-path_34"
  },
  {
    id: "final_good-path_34",
    background: "/assets/backgrounds/finale_good-path/scene-6.png",
    character: "",
    name: "",
    text: "Ліана накреслила на підлозі магічне коло. Лінії засвітилися слабким синім сяйвом.",
    next: "final_good-path_35"
  },
  {
    id: "final_good-path_35",
    background: "/assets/backgrounds/finale_good-path/scene-6.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "В академії нас вчили передавати силу через коло. Зазвичай це робили під наглядом трьох викладачів і одного дуже нервового цілителя.",
    next: "final_good-path_36"
  },
  {
    id: "final_good-path_36",
    background: "/assets/backgrounds/finale_good-path/scene-6.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "А зараз у нас є ти, я і підлога, яка виглядає так, ніби бачила більше смертей, ніж усі твої викладачі разом.",
    next: "final_good-path_37"
  },
  {
    id: "final_good-path_37",
    background: "/assets/backgrounds/finale_good-path/scene-6.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Не збивай. Мені й так страшно.",
    next: "final_good-path_38"
  },
  {
    id: "final_good-path_38",
    background: "/assets/backgrounds/finale_good-path/scene-7.png",
    character: "",
    name: "",
    text: "Каель замовк. Закінчивши креслення, вони обоє зайшли у коло. Ліана обережно наділа амулет йому на шию.",
    next: "final_good-path_39"
  },
  {
    id: "final_good-path_39",
    background: "/assets/backgrounds/finale_good-path/scene-7.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Не борися зі мною. Борися з ним.",
    next: "final_good-path_40"
  },
  {
    id: "final_good-path_40",
    background: "/assets/backgrounds/finale_good-path/scene-7.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Якщо я не повернуся собою...",
    next: "final_good-path_41"
  },
    {
    id: "final_good-path_41",
    background: "/assets/backgrounds/finale_good-path/scene-7.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Повернешся, бо я не збираюся вдруге витягувати тебе з темряви. Перший раз це звісно було драматично, але другий - це вже погана звичка.",
    next: "final_good-path_42"
  },
  {
    id: "final_good-path_42",
    background: "/assets/backgrounds/finale_good-path/scene-8.png",
    character: "",
    name: "",
    text: "Ліана почала читати закляття. Синє світло піднялося з кола і обвило їх обох.",
    next: "final_good-path_43"
  },
  {
    id: "final_good-path_43",
    background: "",
    character: "",
    name: "",
    text: "Світ зник, а Каель опинився у темному просторі, де не було ні підлоги, ні стін, лише голос, старший за страх.",
    next: "final_good-path_44"
  },
  {
    id: "final_good-path_44",
    background: "",
    character: "/assets/characters/shadow-withoutBg.png",
    name: "Тінь",
    text: "Дай відгадаю, ти прийшов по силу, яку ніколи не зможеш утримати.",
    next: "final_good-path_45"
  },
  {
    id: "final_good-path_45",
    background: "",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Я прийшов забрати те, що ти вкрав.",
    next: "final_good-path_46"
  },
  {
    id: "final_good-path_46",
    background: "",
    character: "/assets/characters/shadow-withoutBg.png",
    name: "Тінь",
    text: "Вкрав? Ти сам впустив мене. Ти завжди був слабким, добрим, довірливим, зручним.",
    next: "final_good-path_47"
  },
  {
    id: "final_good-path_47",
    background: "",
    character: "/assets/characters/shadow-withoutBg.png",
    name: "Тінь",
    text: "Ця Біла Відьма сказала, що допоможе, і ти повірив. Рудоволоса сказала, що не боїться, і ти вже стоїш перед нею беззахисний.",
    next: "final_good-path_48"
  },
  {
    id: "final_good-path_48",
    background: "",
    character: "/assets/characters/shadow-withoutBg.png",
    name: "Тінь",
    text: "А що, як вона зараз просто чекає? Що, як коло не для передачі сили, а для того, щоб знищити, поки є шанс?",
    next: "final_good-path_49"
  },
  {
    id: "final_good-path_49",
    background: "",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Вона могла втекти, але повернулась.",
    next: "final_good-path_50"
  },
  {
    id: "final_good-path_50",
    background: "",
    character: "/assets/characters/shadow-withoutBg.png",
    name: "Тінь",
    text: "Так само, як колись повернулась твоя надія, коли ти шукав сестру?",
    next: "final_good-path_51"
  },
  {
    id: "final_good-path_51",
    background: "",
    character: "",
    name: "",
    text: "Каель завмер. Темрява навколо нього стала холоднішою.",
    next: "final_good-path_52"
  },
  {
    id: "final_good-path_52",
    background: "",
    character: "/assets/characters/shadow-withoutBg.png",
    name: "Тінь",
    text: "Ти ж клявся її захистити, і дозволив їм забрати її, а сам залишився лежати в багнюці.",
    next: "final_good-path_53"
  },
  {
    id: "final_good-path_53",
    background: "",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Я шукав її всюди де тільки міг!",
    next: "final_good-path_54"
  },
  {
    id: "final_good-path_54",
    background: "",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Я знайшов слід: людей з тих містечок вивозили за кордон. Вона точно жива, і я знайду її.",
    next: "final_good-path_55"
  },
  {
    id: "final_good-path_55",
    background: "",
    character: "/assets/characters/shadow-withoutBg.png",
    name: "Тінь",
    text: "Цікаво, на чому базується твоя впевненість?",
    next: "final_good-path_56"
  },
  {
    id: "final_good-path_56",
    background: "/assets/backgrounds/finale_good-path/scene-9.png",
    character: "",
    name: "",
    text: "Темрява показала йому уламки можливих шляхів. Не правду, а лише страх, складений у форму спогаду.",
    next: "final_good-path_57"
  },
  {
    id: "final_good-path_57",
    background: "/assets/backgrounds/scene-tower_good-path/magic-circle.png",
    character: "",
    name: "",
    text: "У реальному світі тіло Каеля затремтіло. Синє світло кола почало блимати.",
    next: "final_good-path_58"
  },
  {
    id: "final_good-path_58",
    background: "",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Каелю! Чуєш мене?",
    next: "final_good-path_59"
  },
  {
    id: "final_good-path_59",
    background: "/assets/backgrounds/finale_good-path/scene-10.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Я не знаю, що саме показує тобі тінь. Але знаю, як це - стояти в темряві й думати, що ти залишився сам.",
    next: "final_good-path_60"
  },
  {
    id: "final_good-path_60",
    background: "",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Я чула як ти бурмотів про сестру. Я впевнена, що вона жива, і до сих пір десь чекає, що ти віднайдеш її.",
    next: "final_good-path_61"
  },
  {
    id: "final_good-path_61",
    background: "/assets/backgrounds/finale_good-path/scene-10.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Проте, якщо ти зараз піддашся його впливу, цей шанс віднайти її пропаде остаточно. Тому борися за неї зараз. А потім, я допоможу тобі її знайти.",
    next: "final_good-path_62"
  },
  {
    id: "final_good-path_62",
    background: "",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Ти не зламаєш мене її ім'ям!",
    next: "final_good-path_63"
  },
  {
    id: "final_good-path_63",
    background: "",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Бо саме заради неї я й вижив!",
    next: "final_good-path_64"
  },
  {
    id: "final_good-path_64",
    background: "/assets/backgrounds/finale_good-path/scene-11.png",
    character: "",
    name: "",
    text: "Синє світло амулета прорізало темряву. Тінь відступила, скручуючись у глибині його свідомості.",
    next: "final_good-path_65"
  },
  {
    id: "final_good-path_65",
    background: "/assets/backgrounds/finale_good-path/scene-11.png",
    character: "/assets/characters/shadow-withoutBg.png",
    name: "Тінь",
    text: "Чорт тебе забирай, рижа! Це ще не перемога, коли я повернусь я повбиваю вас усіх.",
    next: "final_good-path_66"
  },
  {
    id: "final_good-path_66",
    background: "/assets/backgrounds/finale_good-path/scene-12.png",
    character: "",
    name: "",
    text: "Каель розплющив очі. Темрява в них уже не вирувала, вона спала.",
    next: "final_good-path_66-description"
  },
  {
    id: "final_good-path_66-description",
    background: "/assets/backgrounds/finale_good-path/scene-12.png",
    character: "",
    name: "",
    text: "Перше що він побачив, це стурбоване лице Ліани, і руки, які тягнулись, щоб врятувати його від темряви.",
    next: "final_good-path_66-description-2"
  },
  {
    id: "final_good-path_66-description-2",
    background: "/assets/backgrounds/finale_good-path/scene-12.png",
    character: "",
    name: "",
    text: "Його очі широко розкрились, а серце почало пропускати важкі удари.",
    next: "final_good-path_66-description-3"
  },
  {
    id: "final_good-path_66-description-3",
    background: "/assets/backgrounds/finale_good-path/scene-12.png",
    character: "",
    name: "",
    text: "Він видьоргнув руки і відвернувся.",
    next: "final_good-path_67"
  },
  {
    id: "final_good-path_67",
    background: "/assets/backgrounds/finale_good-path/scene-13.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Дай мені аркуш.",
    next: "final_good-path_68"
  },
  {
    id: "final_good-path_68",
    background: "/assets/backgrounds/finale_good-path/scene-13.png",
    character: "",
    name: "",
    text: "Він провів пальцями над старими символами. Літери на мить спалахнули темно-синім.",
    next: "final_good-path_69"
  },
  {
    id: "final_good-path_69",
    background: "/assets/backgrounds/finale_good-path/scene-13.png",
    character: "/assets/characters/kael-withoutBg.png",
    name: "Каель",
    text: "Це техніка печаті. Саме така, яку використала Свята Агата.",
    next: "final_good-path_70"
  },
  {
    id: "final_good-path_70",
    background: "/assets/backgrounds/finale_good-path/scene-13.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Щоб замкнути Тінь у власному тілі...",
    next: "final_good-path_71"
  },
  {
    id: "final_good-path_71",
    background: "/assets/backgrounds/finale_good-path/scene-13.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Так, але тут є ще щось. Печать не просто стримувала його, вона витягувала силу.",
    next: "final_good-path_72"
  },
  {
    id: "final_good-path_72",
    background: "/assets/backgrounds/finale_good-path/scene-13.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "І трансформовувала її.",
    next: "final_good-path_73"
  },
  {
    id: "final_good-path_73",
    background: "/assets/backgrounds/finale_good-path/scene-13.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Якщо Тінь колись була надто сильною, щоб її знищити, то зараз вона ослаблена. Через те що, триста років печать висмоктувала з неї силу. Саме цим ми можемо скористатись.",
    next: "final_good-path_74"
  },
  {
    id: "final_good-path_74",
    background: "/assets/backgrounds/finale_good-path/scene-13.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "І якщо там сказано, що сила не просто розчинялась, питання тільки одне: у що вона трансформовувалась?",
    next: "final_good-path_75"
  },
  {
    id: "final_good-path_75",
    background: "/assets/backgrounds/finale_good-path/scene-13.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Відповідь може знаходитись лише в одному місці. В підвалі башти, де і були поховані мощі Агати.",
    next: "final_good-path_76"
  },
  {
    id: "final_good-path_76",
    background: "/assets/backgrounds/finale_good-path/scene-13.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Тоді йдемо туди. Каелю, веди, ти повинен знати дорогу.",
    next: "final_good-path_77"
  },
  {
    id: "final_good-path_77",
    background: "/assets/backgrounds/finale_good-path/scene-14.png",
    character: "",
    name: "",
    text: "Вони спустилися в підвал башти. Повітря там було нерухомим, запечатаним століттями.",
    next: "final_good-path_78"
  },
  {
    id: "final_good-path_78",
    background: "/assets/backgrounds/finale_good-path/scene-15.png",
    character: "",
    name: "",
    text: "Ліана простягнула руку. Її магія потягнулася вперед тонкою синьою ниткою.",
    next: "final_good-path_79"
  },
  {
    id: "final_good-path_79",
    background: "/assets/backgrounds/finale_good-path/scene-15.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Тут найбільше магії.",
    next: "final_good-path_80"
  },
  {
    id: "final_good-path_80",
    background: "/assets/backgrounds/finale_good-path/scene-16.png",
    character: "",
    name: "",
    text: "Світло привело її до кам'яного саркофага. Усередині лежав лише попіл, збережений печаттю.",
    next: "final_good-path_81"
  },
   {
    id: "final_good-path_81",
    background: "/assets/backgrounds/finale_good-path/scene-16.png",
    character: "",
    name: "",
    text: "Амулет на грудях Каеля спалахнув. Він обережно зняв його, та повернув Ліані.",
    next: "final_good-path_81-description"
  },
  {
    id: "final_good-path_81-description",
    background: "",
    character: "",
    name: "",
    text: "Як тільки амулет торкунувся грудей ліани, вона провалилась у темряву.",
    next: "final_good-path_82"
  },
  {
    id: "final_good-path_82",
    background: "",
    character: "/assets/characters/agatha-spirit-withoutBg.png",
    name: "Агата",
    text: "Ти прийшла туди, куди мала прийти.",
    next: "final_good-path_83"
  },
  {
    id: "final_good-path_83",
    background: "",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Агато?",
    next: "final_good-path_84"
  },
  {
    id: "final_good-path_84",
    background: "/assets/backgrounds/scene-tower_good-path/agatha-ashes.png",
    character: "/assets/characters/agatha-spirit-withoutBg.png",
    name: "Агата",
    text: "Не бійся цієї сили. Вони весь цей час чекали кров, що пам'ятає.",
    next: "final_good-path_85"
  },
  {
    id: "final_good-path_85",
    background: "/assets/backgrounds/finale_good-path/scene-17.png",
    character: "/assets/characters/agatha-spirit-withoutBg.png",
    name: "Агата",
    text: "Підніми руку. Прояви те, що печать забирала в Тіні всі ці століття.",
    next: "final_good-path_86"
  },
  {
    id: "final_good-path_86",
    background: "/assets/backgrounds/finale_good-path/scene-18.png",
    character: "",
    name: "",
    text: "Ліана підняла руку над саркофагом. Спершу з'явилася тонка лінія світла, потім - руків'я, потім - лезо.",
    next: "final_good-path_87"
  },
  {
    id: "final_good-path_87",
    background: "/assets/backgrounds/finale_good-path/scene-18.png",
    character: "",
    name: "",
    text: "Перед нею сформувався меч із чистої синьої енергії. Він наче палав синім полум'ям.",
    next: "final_good-path_88"
  },
  {
    id: "final_good-path_88",
    background: "/assets/backgrounds/scene-tower_good-path/agatha-sword.png",
    character: "/assets/characters/agatha-spirit-withoutBg.png",
    name: "Агата",
    text: "Це не зброя проти живого. Це наша відповідь на терор Морока.",
    next: "final_good-path_89"
  },
  {
    id: "final_good-path_89",
    background: "/assets/backgrounds/scene-tower_good-path/agatha-sword.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Це допоможе нам не просто запечатати Тінь.",
    next: "final_good-path_90"
  },
  {
    id: "final_good-path_90",
    background: "/assets/backgrounds/scene-tower_good-path/agatha-sword.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Це дасть нам можливість перемогти її повністю.",
    next: "final_good-path_91"
  },
  {
    id: "final_good-path_91",
    background: "/assets/backgrounds/scene-tower_good-path/agatha-sword.png",
    character: "/assets/characters/agatha-spirit-withoutBg.png",
    name: "Агата",
    text: "Якщо ваші сили стануть однією волею - так.",
    next: "final_good-path_91-description"
  },
  {
    id: "final_good-path_91-description",
    background: "/assets/backgrounds/finale_good-path/scene-19.png",
    character: "/assets/characters/agatha-spirit-withoutBg.png",
    name: "Агата",
    text: "Ліана обережно відкрила очі. Вона відчувала як тепло чогось окутувало її.",
    next: "final_good-path_91-description-1"
  },
  {
    id: "final_good-path_91-description-1",
    background: "/assets/backgrounds/finale_good-path/scene-19.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Ліано, ти в порядку?",
    next: "final_good-path_91-description-2"
  },
  {
    id: "final_good-path_91-description-2",
    background: "/assets/backgrounds/finale_good-path/scene-19.png",
   character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Так... Зі мною говорила Агата.",
    next: "final_good-path_91-description-3"
  },
   {
    id: "final_good-path_91-description-3",
    background: "/assets/backgrounds/finale_good-path/scene-19.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Агата?",
    next: "final_good-path_91-description-4"
  },
   {
    id: "final_good-path_91-description-4",
    background: "/assets/backgrounds/finale_good-path/scene-19.png",
   character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Вона показала шлях, як переформувати енергію Тіні у фізичну оболочку. Цей меч.",
    next: "final_good-path_91-description-5"
  },
     {
    id: "final_good-path_91-description-5",
    background: "/assets/backgrounds/finale_good-path/scene-20.png",
   character: "",
    name: "",
    text: "Ліана піднялась, і почала його роздивлятись, обговорюючи стратегію.",
    next: "final_good-path_92"
  },
  {
    id: "final_good-path_92",
    background: "/assets/backgrounds/finale_good-path/scene-20.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Поки ти ще тримаєш Тінь під контролем, спочатку нам потрібно розібратись із Мірою. Вона не знає, що ти можеш контролювати сили Тіні. Ми можемо це використати.",
    next: "final_good-path_93"
  },
  {
    id: "final_good-path_93",
    background: "/assets/backgrounds/finale_good-path/scene-20.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Ти маєш на увазі, щоб я зв'язався із її нею від імені Тіні, використавши його магію.",
    next: "final_good-path_94"
  },
  {
    id: "final_good-path_94",
    background: "/assets/backgrounds/finale_good-path/scene-20.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Саме так, ти зробиш це через закляття перенесення свідомості, я навчу тебе. Покличиш її у башту.",
    next: "final_good-path_95"
  },
  {
    id: "final_good-path_95",
    background: "/assets/backgrounds/finale_good-path/scene-20.png",
    character: "/assets/characters/kael-withoutBg.png",
    name: "Каель",
    text: "Ти хочеш створити їй пастку?",
    next: "final_good-path_96"
  },
  {
    id: "final_good-path_96",
    background: "/assets/backgrounds/finale_good-path/scene-20.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: " Мг, я намалюю магічне коло, підсилю його з-за допомогою амулету, щоб воно змогло втримати її на одному місці. Як тільки вона переступить поріг центральної зали - коло замкнеться. Ти стримаєш її магію силою Тіні, а я використаю меч.",
    next: "final_good-path_97"
  },
  {
    id: "final_good-path_97",
    background: "/assets/backgrounds/finale_good-path/scene-20.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Це може вбити нас обох.",
    next: "final_good-path_98"
  },
  {
    id: "final_good-path_98",
    background: "/assets/backgrounds/finale_good-path/scene-20.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "А може врятувати всіх. Дивитись на події зі сторони надії деколи дуже допомагає приймати важливі рішення.",
    next: "final_good-path_99"
  },
  {
    id: "final_good-path_99",
    background: "/assets/backgrounds/finale_good-path/scene-20.png",
    character: "/assets/characters/kael-withoutBg.png",
    name: "Каель",
    text: "У цьому є сенс.",
    next: "final_good-path_100"
  },
  {
    id: "final_good-path_100",
    background: "/assets/backgrounds/finale_good-path/scene-20.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Так легше стояти, навіть не зважаючи на те, що хочеться втекти",
    next: "final_good-path_101"
  },
  {
    id: "final_good-path_101",
    background: "/assets/backgrounds/finale_good-path/scene-21.png",
    character: "",
    name: "",
    text: "Вони почали готуватися. У залі, де раніше стояла тиша, тепер лунали кроки, удари і короткі команди.",
    next: "final_good-path_102"
  },
  {
    id: "final_good-path_102",
    background: "/assets/backgrounds/finale_good-path/scene-21.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Не тримай меч так, ніби тримаєш парасольку.",
    next: "final_good-path_103"
  },
  {
    id: "final_good-path_103",
    background: "/assets/backgrounds/finale_good-path/scene-21.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Ну перепрошую! В академії нас не вчили фехтувати зброєю, зробленою з переробленої темряви.",
    next: "final_good-path_104"
  },
  {
    id: "final_good-path_104",
    background: "/assets/backgrounds/finale_good-path/scene-21.png",
    character: "/assets/characters/kael-withoutBg.png",
    name: "Каель",
    text: "Тоді вважай, що це прискорений курс.",
    next: "final_good-path_105"
  },
  {
    id: "final_good-path_105",
    background: "/assets/backgrounds/finale_good-path/scene-22.png",
    character: "",
    name: "",
    text: "Каель став позаду неї, обережно поправив положення її рук на руків'ї меча.",
    next: "final_good-path_106"
  },
  {
    id: "final_good-path_106",
    background: "/assets/backgrounds/finale_good-path/scene-22.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Не бий силою. Веди лезо так перед тобою не перешкода, а повітря.",
    next: "final_good-path_107"
  },
  {
    id: "final_good-path_107",
    background: "/assets/backgrounds/finale_good-path/scene-22.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Звідки ти знаєш основи фехтування?",
    next: "final_good-path_108"
  },
  {
    id: "final_good-path_108",
    background: "/assets/backgrounds/finale_good-path/scene-22.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Після трагедії із сестрою. У кожному місці в якому я був, шукаючи її, я опановував мистецтво меча.",
    next: "final_good-path_109"
  },
  {
    id: "final_good-path_109",
    background: "/assets/backgrounds/finale_good-path/scene-23.png",
    character: "",
    name: "",
    text: "Пізніше Ліана сиділа навпроти Каеля і вчила його не підкорятися темряві, а змушувати її слухати.",
    next: "final_good-path_110"
  },
  {
    id: "final_good-path_110",
    background: "/assets/backgrounds/finale_good-path/scene-23.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Не тисни на неї. Спершу дай їй думати, що вона сильніша, а потім зміни порядок, підкоривши її волю.",
    next: "final_good-path_111"
  },
  {
    id: "final_good-path_111",
    background: "/assets/backgrounds/finale_good-path/scene-23.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Ти говориш про Тінь чи про себе?",
    next: "final_good-path_112"
  },
  {
    id: "final_good-path_112",
    background: "/assets/backgrounds/finale_good-path/scene-23.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Про магію. Але якщо тобі стало страшно - значить, метод працює.",
    next: "final_good-path_113"
  },
  {
    id: "final_good-path_113",
    background: "/assets/backgrounds/finale_good-path/scene-23.png",
    character: "",
    name: "",
    text: "Каель усміхнувся вперше без холодної зверхності. Ліана помітила це, і чомусь не відвела погляду.",
    next: "final_good-path_114"
  },
  {
    id: "final_good-path_114",
    background: "/assets/backgrounds/finale_good-path/scene-23.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Ти справді збираєшся допомогти мені знайти сестру? Чи ти сказала це, лише щоб витягнути мене із лап Морока.",
    next: "final_good-path_115"
  },
  {
    id: "final_good-path_115",
    background: "/assets/backgrounds/finale_good-path/scene-23.png",
    character: "",
    name: "",
    text: "Ліана зашарілась і відвела погляд.",
    next: "final_good-path_116"
  },
  {
    id: "final_good-path_116",
    background: "/assets/backgrounds/finale_good-path/scene-23.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Все що я сказала... Правда. Я.. Я просто зрозуміла, що не хочу щоб ти дізнався як це - втрачати когось. Але спершу ти повинен допомогти мені знищити Білу Відьму.",
    next: "final_good-path_116-description"
  },
  {
    id: "final_good-path_116-description",
    background: "/assets/backgrounds/finale_good-path/scene-24.png",
    character: "",
    name: "Ліана",
    text: "Каель приблизився ближче. Він уважно дивився Ліані у вічі, наче шукаючи підтвердження її словам.",
    next: "final_good-path_117"
  },
  {
    id: "final_good-path_117",
    background: "/assets/backgrounds/finale_good-path/scene-24.png",
    character: "/assets/characters/kael-withoutBg.png",
    name: "Каель",
    text: "Домовились. І ще одне... Дякую.",
    next: "final_good-path_118"
  },
  {
    id: "final_good-path_118",
    background: "/assets/backgrounds/finale_good-path/scene-25.png",
    character: "",
    name: "",
    text: "Вони стояли серед синього світла меча і темряви, яку поки вдалось підкорити. Попереду була пастка і битва.",
    next: "final_good-path_119"
  },
  {
    id: "final_good-path_119",
    background: "/assets/backgrounds/finale_good-path/scene-25.png",
    character: "",
    name: "",
    text: "Але вперше за довгий час Ліана відчула не тільки страх.",
    next: "final_good-path_120"
  },
  {
    id: "final_good-path_120",
    background: "/assets/backgrounds/finale_good-path/scene-25.png",
    character: "",
    name: "",
    text: "Вона відчула, що поруч із нею стоїть не чудовисько. А людина, яка теж намагається повернути собі життя.",
    next: "final_good-path_120-description"
  },
   {
    id: "final_good-path_120-description",
    background: "/assets/backgrounds/finale_good-path/scene-23.png",
    character: "",
    name: "",
    text: "Після завершення тренувань, Ліана вчила Каеля як з'єднувати свідомість.",
    next: "final_good-path_121"
  },
  {
    id: "final_good-path_121",
    background: "/assets/backgrounds/finale_good-path/scene-23.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Щоб зв'язатися з Мірою, тобі потрібно не просто покликати її. Ти маєш побудувати міст між своєю свідомістю і її.",
    next: "final_good-path_122"
  },
  {
    id: "final_good-path_122",
    background: "/assets/backgrounds/finale_good-path/scene-23.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Зрозумів, тобто я маю уявити міст у голові?...",
    next: "final_good-path_123"
  },
  {
    id: "final_good-path_123",
    background: "/assets/backgrounds/finale_good-path/scene-23.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Ти повинен зібрати всю магічну енергію, яку відчуваєш. Сконцентрувати її в собі, а потім уявити Міру так чітко, ніби вона стоїть перед тобою.",
    next: "final_good-path_124"
  },
  {
    id: "final_good-path_124",
    background: "/assets/backgrounds/finale_good-path/scene-23.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "І якщо замість Міри озветься Тінь?",
    next: "final_good-path_125"
  },
  {
    id: "final_good-path_125",
    background: "/assets/backgrounds/finale_good-path/scene-23.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Тоді нагадай їй, що тепер вона не господар. Вона лише ключ, який ти тимчасово тримаєш у руці.",
    next: "final_good-path_126"
  },
  {
    id: "final_good-path_126",
    background: "/assets/backgrounds/finale_good-path/scene-23.png",
    character: "",
    name: "",
    text: "Каель заплющив очі. Темрява поглинула звук зали, свічки, камінь і навіть власне дихання.",
    next: "final_good-path_127"
  },
  {
    id: "final_good-path_127",
    background: "/assets/backgrounds/finale_good-path/kael-mind-darkness.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Відьмо.",
    next: "final_good-path_128"
  },
  {
    id: "final_good-path_128",
    background: "/assets/backgrounds/finale_good-path/mira-mind-link.png",
    character: "/assets/characters/mira-withoutBg.png",
    name: "Міра",
    text: "Тінь? Ти сам мене кличеш?",
    next: "final_good-path_129"
  },
  {
    id: "final_good-path_129",
    background: "/assets/backgrounds/finale_good-path/mira-mind-link.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Завтра на світанку. У башта. Ми обговоримо амулет і наш договір.",
    next: "final_good-path_130"
  },
  {
    id: "final_good-path_130",
    background: "/assets/backgrounds/finale_good-path/mira-mind-link.png",
    character: "/assets/characters/mira-withoutBg.png",
    name: "Міра",
    text: "Ти звучиш інакше.",
    next: "final_good-path_131"
  },
  {
    id: "final_good-path_131",
    background: "/assets/backgrounds/finale_good-path/mira-mind-link.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Я звучатиму так, як захочу. Прийди, якщо не боїшся втратити те, заради чого все затіяла.",
    next: "final_good-path_132"
  },
  {
    id: "final_good-path_132",
    background: "/assets/backgrounds/finale_good-path/scene-26.png",
    character: "",
    name: "",
    text: "Поки Каель тримав зв'язок, Ліана готувала невидиме коло. Як тільки Каель закінчив, він підвівся, підійшов до Ліани.",
    next: "final_good-path_133"
  },
  {
    id: "final_good-path_133",
    background: "/assets/backgrounds/finale_good-path/scene-26.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Якщо вона зробить хоча б крок у центр, коло замкнеться.",
    next: "final_good-path_134"
  },
  {
    id: "final_good-path_134",
    background: "/assets/backgrounds/finale_good-path/scene-26.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "А якщо вона відчує пастку раніше?",
    next: "final_good-path_135"
  },
  {
    id: "final_good-path_135",
    background: "/assets/backgrounds/finale_good-path/scene-26.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Тоді зробимо вигляд, що імпровізація - це теж план.",
    next: "final_good-path_136"
  },
  {
    id: "final_good-path_136",
    background: "/assets/backgrounds/finale_good-path/scene-27.png",
    character: "",
    name: "",
    text: "На світанку башта була майже тиха. Холодне ранкове світло торкалося підлоги, де ховалося невидиме коло.",
    next: "final_good-path_137"
  },
  {
    id: "final_good-path_137",
    background: "/assets/backgrounds/finale_good-path/scene-27.png",
    character: "",
    name: "",
    text: "Ліана сховалася за колоною, Каель стояв у центрі зали, нерухомий, наче сам став частиною пастки. Раптом, двері розпахнулись.",
    next: "final_good-path_138"
  },
  {
    id: "final_good-path_138",
    background: "/assets/backgrounds/finale_good-path/scene-28.png",
    character: "/assets/characters/mira-withoutBg.png",
    name: "Міра",
    text: "Я прийшла. То що стало настільки важливим, що Тінь раптом захотіла говорити?",
    next: "final_good-path_139"
  },
  {
    id: "final_good-path_139",
    background: "/assets/backgrounds/finale_good-path/scene-29.png",
    character: "",
    name: "",
    text: "Міра зробила крок уперед. Підлога спалахнула синім, і з кола вирвалися ланцюги світла.",
    next: "final_good-path_140"
  },
  {
    id: "final_good-path_140",
    background: "/assets/backgrounds/finale_good-path/scene-29.png",
    character: "/assets/characters/mira-withoutBg.png",
    name: "Міра",
    text: "Неможливо...",
    next: "final_good-path_141"
  },
  {
    id: "final_good-path_141",
    background: "/assets/backgrounds/finale_good-path/scene-29.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Насправді можливо. Просто дуже неприємно, коли тебе ловлять твоїм же стилем.",
    next: "final_good-path_142"
  },
  {
    id: "final_good-path_142",
    background: "/assets/backgrounds/finale_good-path/scene-29.png",
    character: "/assets/characters/mira-withoutBg.png",
    name: "Міра",
    text: "Ти... Ти взяв під контроль Тінь?",
    next: "final_good-path_143"
  },
  {
    id: "final_good-path_143",
    background: "/assets/backgrounds/finale_good-path/scene-29.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Не всю, але достатньо, щоб зіпсувати тобі ранок.",
    next: "final_good-path_144"
  },
  {
    id: "final_good-path_144",
    background: "/assets/backgrounds/finale_good-path/scene-30.png",
    character: "",
    name: "",
    text: "Каель підняв руки. Темна енергія зібралася в згустки й полетіла в Міру.",
    next: "final_good-path_145"
  },
  {
    id: "final_good-path_145",
    background: "/assets/backgrounds/finale_good-path/scene-30.png",
    character: "/assets/characters/mira-withoutBg.png",
    name: "Міра",
    text: "Ти думаєш, цього досить?",
    next: "final_good-path_146"
  },
  {
    id: "final_good-path_146",
    background: "/assets/backgrounds/finale_good-path/scene-30.png",
    character: "",
    name: "",
    text: "Міра створила темний щит. Удар розбився об нього, розсипавшись фіолетовими іскрами.",
    next: "final_good-path_147"
  },
  {
    id: "final_good-path_147",
    background: "/assets/backgrounds/finale_good-path/scene-31.png",
    character: "",
    name: "",
    text: "Ліана кинулася вперед із синім мечем. Та Міра різко змахнула рукою, і хвиля сили відкинула її до стіни.",
    next: "final_good-path_148"
  },
  {
    id: "final_good-path_148",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-12.png",    
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Ліано!",
    next: "final_good-path_149"
  },
  {
    id: "final_good-path_149",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-13.png",    
    character: "",
    name: "",
    text: "Каель підбіг до неї й допоміг піднятися. Ліана важко вдихнула, але в її очах не було поразки.",
    next: "final_good-path_150"
  },
  {
    id: "final_good-path_150",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-13.png",    
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Другий етап.",
    next: "final_good-path_151"
  },
  {
    id: "final_good-path_151",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-13.png",    
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Зрозумів.",
    next: "final_good-path_152"
  },
  {
    id: "final_good-path_152",
    background: "/assets/backgrounds/finale_good-path/scene-32.png",
    character: "",
    name: "",
    text: "Каель прикрив собою поранену Ліану, і почав збирати енергію у закляття. Навколо Міри закрутилися темні форми, вони впивалися в її захист, не торкаючись тіла, але висмоктуючи магію з її щита.",
    next: "final_good-path_153"
  },
  {
    id: "final_good-path_153",
    background: "/assets/backgrounds/finale_good-path/scene-32.png",
    character: "/assets/characters/mira-withoutBg.png",
    name: "Міра",
    text: "Геть від мене!",
    next: "final_good-path_154"
  },
  {
    id: "final_good-path_154",
    background: "/assets/backgrounds/finale_good-path/scene-32.png",
    character: "",
    name: "",
    text: "Поки Міра намагалася втримати захист, Ліана кинула в неї згусток білого світла.",
    next: "final_good-path_155"
  },
  {
    id: "final_good-path_155",
    background: "/assets/backgrounds/finale_good-path/scene-32.png",
    character: "",
    name: "",
    text: "Міра відбила удар, але не помітила, як Ліана зникла з її поля зору.",
    next: "final_good-path_156"
  },
  {
    id: "final_good-path_156",
    background: "/assets/backgrounds/finale_good-path/scene-32.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Це помста тих кого ти прирікла на страждання.",
    next: "final_good-path_157"
  },
  {
    id: "final_good-path_157",
    background: "/assets/backgrounds/finale_good-path/scene-33.png",
    character: "",
    name: "",
    text: "Синій меч пройшов крізь захист Міри й спалахнув усередині неї. Світло почало випалювати темряву з її сили.",
    next: "final_good-path_158"
  },
  {
    id: "final_good-path_158",
    background: "/assets/backgrounds/finale_good-path/scene-33.png",
    character: "/assets/characters/mira-withoutBg.png",
    name: "Міра",
    text: "Ні... Все мусило не так закінчитись! Проклятий твій рід, Агато!",
    next: "final_good-path_159"
  },
  {
    id: "final_good-path_159",
    background: "/assets/backgrounds/finale_good-path/scene-33.png",
    character: "",
    name: "",
    text: "На останньому подиху сили Міра змахнула рукою. Темна хвиля зірвалася з її пальців і полетіла в Каеля.",
    next: "final_good-path_159-description"
  },
  {
    id: "final_good-path_159-description",
    background: "/assets/backgrounds/finale_good-path/scene-33.png",
    character: "",
    name: "",
    text: "Ліана секунду перевела дихання, і повернулась до зали шукаючи Каеля очима. ",
    next: "final_good-path_160"
  },
  {
    id: "final_good-path_160",
    background: "/assets/backgrounds/finale_good-path/scene-34.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Каелю! Ми змогли!",
    next: "final_good-path_161"
  },
  {
    id: "final_good-path_161",
    background: "/assets/backgrounds/finale_good-path/scene-35.png",
    character: "",
    name: "",
    text: "Зверху почувся глухий тріск. Біля склепіння башти розгортався величезний шар чорної енергії.",
    next: "final_good-path_162"
  },
  {
    id: "final_good-path_162",
    background: "/assets/backgrounds/finale_good-path/scene-35.png",
    character: "/assets/characters/shadow-withoutBg.png",
    name: "Тінь",
    text: "Я ж казав. Я вб'ю всіх.",
    next: "final_good-path_163"
  },
  {
    id: "final_good-path_163",
    background: "/assets/backgrounds/finale_good-path/scene-36.png",
    character: "",
    name: "",
    text: "Каель вийшов із тіні колонни, його очі світилися темрявою, а голос більше не був його голосом.",
    next: "final_good-path_164"
  },
  {
    id: "final_good-path_164",
    background: "/assets/backgrounds/finale_good-path/scene-36.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Ні...",
    next: "final_good-path_165"
  },
  {
    id: "final_good-path_165",
    background: "/assets/backgrounds/finale_good-path/scene-36.png",
    character: "",
    name: "",
    text: "Ліана відступила. Її руки тремтіли, вона побігла у сторону де лежав меч, щоб підібрати його.",
    next: "final_good-path_166"
  },
  {
    id: "final_good-path_166",
    background: "/assets/backgrounds/finale_good-path/scene-37.png",
    character: "",
    name: "",
    text: "З темного шару зверху почали падати маленькі кола енергії, одне за одним цілячись у неї.",
    next: "final_good-path_167"
  },
  {
    id: "final_good-path_167",
    background: "/assets/backgrounds/finale_good-path/scene-38.png",
    character: "",
    name: "",
    text: "Ліана відскочила вбік, потім ще раз. Одне коло вдарило поруч із ногою, і вона впала на підлогу.",
    next: "final_good-path_168"
  },
  {
    id: "final_good-path_168",
    background: "/assets/backgrounds/finale_good-path/scene-38.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Каелю... Прошу...",
    next: "final_good-path_169"
  },
  {
    id: "final_good-path_169",
    background: "/assets/backgrounds/finale_good-path/scene-39.png",
    character: "",
    name: "",
    text: "Тінь наблизилася. Вона підняла руку, і величезний згусток енергії почав падати прямо на Ліану.",
    next: "final_good-path_170"
  },
  {
    id: "final_good-path_170",
    background: "/assets/backgrounds/finale_good-path/scene-39.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Ліано...",
    next: "final_good-path_171"
  },
  {
    id: "final_good-path_171",
    background: "/assets/backgrounds/finale_good-path/scene-39.png",
    character: "",
    name: "",
    text: "Згусток завмер у повітрі. На мить у погляді Каеля знову з'явився він сам.",
    next: "final_good-path_172"
  },
  {
    id: "final_good-path_172",
    background: "/assets/backgrounds/finale_good-path/scene-39.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Йди крізь темряву. Навіть якщо боїшся.",
    next: "final_good-path_173"
  },
  {
    id: "final_good-path_173",
    background: "/assets/backgrounds/finale_good-path/scene-39.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Якщо доведеться вбити мене, щоб знищити Тінь... не вагайся.",
    next: "final_good-path_174"
  },
  {
    id: "final_good-path_174",
    background: "/assets/backgrounds/finale_good-path/scene-39.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Тільки знайди мою сестру замість мене.",
    next: "final_good-path_175"
  },
  {
    id: "final_good-path_175",
    background: "/assets/backgrounds/finale_good-path/scene-39.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Ніколи! Чуєш? Я не хочу втрачати і тебе!",
    next: "final_good-path_176"
  },
  {
    id: "final_good-path_176",
    background: "/assets/backgrounds/finale_good-path/scene-39.png",
    character: "",
    name: "",
    text: "Ліана заплющила очі на одну коротку мить.",
    next: "final_good-path_177"
  },
  {
    id: "final_good-path_177",
    background: "/assets/backgrounds/finale_good-path/tower-main-hall-shadow-return.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Агато... Якщо від твоєї сили лишилась хоча б іскра - дай її мені зараз.",
    next: "final_good-path_178"
  },
  {
    id: "final_good-path_178",
    background: "/assets/backgrounds/finale_good-path/scene-40.png",
    character: "",
    name: "",
    text: "Амулет на грудях Ліани засяяв. Її рука стала майже прозорою, наповненою синім світлом.",
    next: "final_good-path_179"
  },
  {
    id: "final_good-path_179",
    background: "/assets/backgrounds/finale_good-path/scene-40.png",
    character: "",
    name: "",
    text: "Коли темрява знову опустилася вниз, Ліана піднялася їй назустріч.",
    next: "final_good-path_180"
  },
  {
    id: "final_good-path_180",
    background: "/assets/backgrounds/finale_good-path/scene-40.png",
    character: "",
    name: "",
    text: "Вона торкнулася грудей Каеля магічною рукою і вирвала з нього Тінь, відділяючи її від його тіла.",
    next: "final_good-path_181"
  },
  {
    id: "final_good-path_181",
    background: "/assets/backgrounds/finale_good-path/scene-41.png",
    character: "",
    name: "",
    text: "Ліана схопила справжнього Каеля і створила навколо них захисний купол.",
    next: "final_good-path_182"
  },
  {
    id: "final_good-path_182",
    background: "/assets/backgrounds/finale_good-path/scene-41.png",
    character: "",
    name: "",
    text: "Величезний згусток упав на купол. Башта здригнулася, камінь тріскався, колони сипалися, але купол вистояв.",
    next: "final_good-path_183"
  },
  {
    id: "final_good-path_183",
    background: "/assets/backgrounds/finale_good-path/scene-42.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Каелю? Каелю, дихай...",
    next: "final_good-path_184"
  },
  {
    id: "final_good-path_184",
    background: "/assets/backgrounds/finale_good-path/scene-42.png",
    character: "",
    name: "",
    text: "Вона приклала вухо до його грудей. Серце билося, cлабко, але вперто.",
    next: "final_good-path_185"
  },
  {
    id: "final_good-path_185",
    background: "/assets/backgrounds/finale_good-path/scene-42.png",
    character: "/assets/characters/shadow-withoutBg.png",
    name: "Тінь",
    text: "Ви забрали в мене тіло. Але не моє існування.",
    next: "final_good-path_186"
  },
  {
    id: "final_good-path_186",
    background: "/assets/backgrounds/finale_good-path/scene-42.png",
    character: "",
    name: "",
    text: "Тінь кинулася на Ліану. Але розбилася об синє світло захисту, зведене раніше.",
    next: "final_good-path_187"
  },
  {
    id: "final_good-path_187",
    background: "/assets/backgrounds/finale_good-path/scene-42.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Ти вже програла. Просто ще не зрозуміла цього.",
    next: "final_good-path_188"
  },
  {
    id: "final_good-path_188",
    background: "/assets/backgrounds/finale_good-path/scene-43.png",
    character: "",
    name: "",
    text: "Ліана стала у стійку. Синій меч у її руках спалахнув так яскраво, що темрява навколо відступила.",
    next: "final_good-path_189"
  },
  {
    id: "final_good-path_189",
    background: "/assets/backgrounds/finale_good-path/scene-43.png",
    character: "",
    name: "",
    text: "Тінь атакувала з усіх боків. Ліана ухилялася, падала, знову підіймалася і відповідала ударами меча.",
    next: "final_good-path_190"
  },
  {
    id: "final_good-path_190",
    background: "/assets/backgrounds/finale_good-path/scene-43.png",
    character: "",
    name: "",
    text: "Кожен удар розсікав не тіло, а саму силу Тіні, повертаючи проти неї те, що вона колись вкрала.",
    next: "final_good-path_191"
  },
  {
    id: "final_good-path_191",
    background: "/assets/backgrounds/finale_good-path/scene-43.png",
    character: "/assets/characters/shadow-withoutBg.png",
    name: "Тінь",
    text: "Я була до вас. Я буду після вас!",
    next: "final_good-path_192"
  },
  {
    id: "final_good-path_192",
    background: "/assets/backgrounds/finale_good-path/scene-43.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Ні, ти була страхом. І цей страх закінчиться сьогодні!",
    next: "final_good-path_193"
  },
  {
    id: "final_good-path_193",
    background: "/assets/backgrounds/finale_good-path/scene-44.png",
    character: "",
    name: "",
    text: "Ліана вклала всю силу в останній удар. Меч спалахнув біло-синім світлом і розсіяв ослаблену Тінь на іскри.",
    next: "final_good-path_194"
  },
  {
    id: "final_good-path_194",
    background: "/assets/backgrounds/finale_good-path/scene-44.png",
    character: "",
    name: "",
    text: "У залі стало тихо, настільки смертельна атмосфера випарувалась. Ліана відкинула меч в сторону, і побігла до Каеля.",
    next: "final_good-path_195"
  },
  {
    id: "final_good-path_195",
    background: "/assets/backgrounds/finale_good-path/scene-45.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Каелю!",
    next: "final_good-path_196"
  },
  {
    id: "final_good-path_196",
    background: "/assets/backgrounds/finale_good-path/scene-45.png",
    character: "",
    name: "",
    text: "Вона підбігла до нього, впала на коліна і взяла його за руку.",
    next: "final_good-path_197"
  },
  {
    id: "final_good-path_197",
    background: "/assets/backgrounds/finale_good-path/scene-45.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Отямся, будь ласка. Я ще маю стримати обіцянку, ми ще маємо знайти її.",
    next: "final_good-path_198"
  },
  {
    id: "final_good-path_198",
    background: "/assets/backgrounds/finale_good-path/scene-45.png",
    character: "",
    name: "",
    text: "Каель поворухнув пальцями.",
    next: "final_good-path_199"
  },
  {
    id: "final_good-path_199",
    background: "/assets/backgrounds/finale_good-path/scene-46.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Ти... дуже голосно рятуєш людей.",
    next: "final_good-path_200"
  },
  {
    id: "final_good-path_200",
    background: "/assets/backgrounds/finale_good-path/scene-46.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Ідіот.",
    next: "final_good-path_201"
  },
  {
    id: "final_good-path_201",
    background: "/assets/backgrounds/finale_good-path/scene-47.png",
    character: "",
    name: "",
    text: "Вона прикрила очі руками, продовжуючи плакати. Каель повільно підвівся і сів перед нею.",
    next: "final_good-path_202"
  },
  {
    id: "final_good-path_202",
    background: "/assets/backgrounds/finale_good-path/scene-48.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Ліано.",
    next: "final_good-path_203"
  },
  {
    id: "final_good-path_203",
    background: "/assets/backgrounds/finale_good-path/scene-49.png",
    character: "",
    name: "",
    text: "Вона опустила руки, і підвела погляд. Каель не витримав і поцілував її, так обережно, ніби боявся, що ця мить може зникнути.",
    next: "final_good-path_204"
  },
  {
    id: "final_good-path_204",
    background: "/assets/backgrounds/finale_good-path/scene-49.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Тільки спробуй після цього знову драматично помирати.",
    next: "final_good-path_205"
  },
  {
    id: "final_good-path_205",
    background: "/assets/backgrounds/finale_good-path/scene-49.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Постараюся знайти менш театральне хобі.",
    next: "final_good-path_206"
  },
  {
    id: "final_good-path_206",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-28",
    character: "",
    name: "",
    text: "Коли над Еларією настав ранок, чорна тінь над баштою зникла.",
    next: "final_good-path_207"
  },
  {
    id: "final_good-path_207",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-28",
    character: "",
    name: "",
    text: "Люди почали згадувати свої імена. Діти - голоси матерів. Старі - людей, яких знали все життя.",
    next: "final_good-path_208"
  },
  {
    id: "final_good-path_208",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-28.png",
    character: "",
    name: "",
    text: "Місто отримало не просто ще один день, воно отримало майбутнє.",
    next: "final_good-path_209"
  },
  {
    id: "final_good-path_209",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-28.png",
    character: "",
    name: "",
    text: "Башта залишилась стояти, хоч і зранена. У її стінах більше не шепотіла Тінь.",
    next: "final_good-path_210"
  },
  {
    id: "final_good-path_210",
    background: "/assets/backgrounds/finale_good-path/scene-50.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Ти готовий?",
    next: "final_good-path_211"
  },
  {
    id: "final_good-path_211",
    background: "/assets/backgrounds/finale_good-path/scene-50.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Мене лякає лише той факт, що тінь був правий.",
    next: "final_good-path_212"
  },
  {
    id: "final_good-path_212",
    background: "/assets/backgrounds/finale_good-path/scene-50.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Але якщо ти підеш зі мною - я зроблю перший крок.",
    next: "final_good-path_213"
  },
  {
    id: "final_good-path_213",
    background: "/assets/backgrounds/finale_good-path/scene-50.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Я ж обіцяла, ми знайдемо її.",
    next: "final_good-path_214"
  },
  {
    id: "final_good-path_214",
    background: "/assets/backgrounds/finale_good-path/scene-50.png",
    character: "",
    name: "",
    text: "Вони залишили башту позаду. Попереду чекали чужі дороги, незнайомі міста і пошуки сестри Каеля.",
    next: "final_good-path_215"
  },
  {
    id: "final_good-path_215",
    background: "/assets/backgrounds/finale_good-path/scene-50.png",
    character: "",
    name: "",
    text: "Ліана йшла поруч із ним. Уперше не тому, що мусила рятувати світ.",
    next: "final_good-path_216"
  },
  {
    id: "final_good-path_216",
    background: "/assets/backgrounds/finale_good-path/scene-50.png",
    character: "",
    name: "",
    text: "А тому, що сама обрала цю дорогу.",
    next: null
  },
];
const finalBadPathScenes = [
  {
  id: "eiran-choice-fear-1",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "",
  text: "Ліана відступила ще на крок. Її долоні тремтіли, а в горлі застрягли всі слова, які вона хотіла сказати.",
  next: "eiran-choice-fear-2"
},
{
  id: "eiran-choice-fear-2",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Розумне рішення.",
  next: "eiran-choice-fear-3"
},
{
  id: "eiran-choice-fear-3",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Я… я не хотіла вам нашкодити.",
  next: "eiran-choice-fear-4"
},
{
  id: "eiran-choice-fear-4",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/eiran-withoutBg.png",
  name: "Ейран",
  text: "Тоді йди. І забудь дорогу сюди.",
  next: "eiran-choice-fear-5"
},
{
  id: "eiran-choice-fear-5",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "",
  name: "",
  text: "Ліана повільно розвернулася й пішла назад між деревами. Кожен крок здавався важчим за попередній.",
  next: "eiran-choice-fear-6"
},
{
  id: "eiran-choice-fear-6",
  background: "/assets/backgrounds/scene-eiran/scene-eiran1.png",
  character: "/assets/characters/liana-withoutBackground.png",
  name: "Ліана",
  text: "Пробач, Орвене… Я не змогла.",
  next: "tower-scene_bad-path"
},
{
  id: "tower-scene_bad-path",
  background: "",
  character: "",
  name: "",
  text: "Ліана стояла перед входом до вежі.",
  next: "tower-scene_bad-path_1"
},
{
  id: "tower-scene_bad-path_1",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-1.png",
  character: "",
  name: "",
  text: "Ліана залишилась без жодного плану. Лише страх, провина і вперте бажання зробити хоч щось, поки місто остаточно не провалилося в забуття.",
  next: "tower-scene_bad-path_2"
},
{
  id: "tower-scene_bad-path_2",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-2.png",
  character: "",
  name: "",
  text: "Вона несміливо зайшла всередину.",
  next: "tower-scene_bad-path_3"
},
 {
    id: "tower-scene_bad-path_3",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-2.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Є тут хтось?.. Я прийшла не із поганими намірами. Я хочу зрозуміти, що відбувається з Еларією.",
    next: "tower-scene_bad-path_4"
  },
  {
    id: "tower-scene_bad-path_4",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-2.png",
    character: "",
    name: "",
    text: "Головна зала вежі відповіла лише тишею. Високі склепіння губилися в темряві, а холодне повітря здавалося майже живим.",
    next: "tower-scene_bad-path_5"
  },
  {
    id: "tower-scene_bad-path_5",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-2.png",
    character: "",
    name: "",
    text: "Ліана зробила кілька кроків уперед. Амулет на її грудях раптом ледь помітно засвітився синім.",
    next: "tower-scene_bad-path_6"
  },
  {
    id: "tower-scene_bad-path_6",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-3.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "",
    text: "Ти прийшла сама, без знань, без захисту. Лише з тим, що залишила тобі Агата.",
    next: "tower-scene_bad-path_8"
  },
  {
    id: "tower-scene_bad-path_8",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-3.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Хто ви... Не наближайтесь!",
    next: "tower-scene_bad-path_9"
  },
  {
    id: "tower-scene_bad-path_9",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-3.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "",
    text: "Ти сама відчинила двері, а тепер просиш темряву не підходити?",
    next: "tower-scene_bad-path_10"
  },
  {
    id: "tower-scene_bad-path_10",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-3.png",
    character: "",
    name: "",
    text: "Він зробив крок уперед, його обличчя було спокійним, але в цьому спокої не було нічого людського.",
    next: "tower-scene_bad-path_11"
  },
  {
    id: "tower-scene_bad-path_11",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-3.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Хто... Ні, що ви таке?...",
    next: "tower-scene_bad-path_12"
  },
  {
    id: "tower-scene_bad-path_12",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-3.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "",
    text: "Те що правило, за довго до твого існування.",
    next: "tower-scene_bad-path_13"
  },
  {
    id: "tower-scene_bad-path_13",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-4.png",
    character: "",
    name: "",
    text: "Він підняв руку. Темрява біля його пальців згустилася, наче збиралася одним ударом обірвати розмову.",
    next: "tower-scene_bad-path_14"
  },
  {
    id: "tower-scene_bad-path_14",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-5.png",
    character: "",
    name: "",
    text: "Та саме в цю мить амулет на грудях Ліани спалахнув синім світлом.",
    next: "tower-scene_bad-path_15"
  },
  {
    id: "tower-scene_bad-path_15",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-5.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "",
    text: "Ні... не зараз...",
    next: "tower-scene_bad-path_16"
  },
  {
    id: "tower-scene_bad-path_16",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-6.png",
    character: "",
    name: "",
    text: "Він різко відступив. Темрява навколо нього затремтіла, ніби щось усередині намагалося вирватися з-під її влади.",
    next: "tower-scene_bad-path_17"
  },
   {
    id: "tower-scene_bad-path_17",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-6.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Що... що з вами відбувається?",
    next: "tower-scene_bad-path_18"
  },
  {
    id: "tower-scene_bad-path_18",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-7.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "",
    text: "Слухай мене! У мене мало часу.",
    next: "tower-scene_bad-path_19"
  },
  {
    id: "tower-scene_bad-path_19",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-7.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Хто... ",
    next: "tower-scene_bad-path_20"
  },
  {
    id: "tower-scene_bad-path_20",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-7.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Моє ім'я Каель. Це не я забрав місто, і не я створив цю тінь.",
    next: "tower-scene_bad-path_21"
  },
  {
    id: "tower-scene_bad-path_21",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-7.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Тоді хто?",
    next: "tower-scene_bad-path_22"
  },
   {
    id: "tower-scene_bad-path_22",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-7.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Міра.",
    next: "tower-scene_bad-path_23"
  },
   {
    id: "tower-scene_bad-path_23",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-7.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Вона називає себе хранителькою. Білою відьмою, рятівницею. Але саме вона уклала угоду з Мороком і привела мене сюди як оболонку.",
    next: "tower-scene_bad-path_24"
  },
    {
    id: "tower-scene_bad-path_24",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-7.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Ні... Орвен казав про чорні сили, але...",
    next: "tower-scene_bad-path_25"
  },
   {
    id: "tower-scene_bad-path_25",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-7.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Вона дуже добре вміє виглядати світлом. Саме тому їй вірять.",
    next: "tower-scene_bad-path_26"
  },
 {
  id: "tower-scene_bad-path_26",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-7.png",
  character: "",
  name: "",
  text: "Двері головної зали різко відчинилися.",
  next: "tower-scene_bad-path_27"
},
 {
  id: "tower-scene_bad-path_27",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-8.png",
  character: "/assets/characters/mira-withoutBg.png",
  name: "Міра",
  text: "Відійди від нього, дитино.",
  next: "tower-scene_bad-path_28"
},
  {
    id: "tower-scene_bad-path_28",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-8.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Біла Відьмо?",
    next: "tower-scene_bad-path_29"
  },
  {
  id: "tower-scene_bad-path_29",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-8.png",
  character: "/assets/characters/mira-withoutBg.png",
  name: "Міра",
  text: "Він уже почав говорити, так? Саме так тінь і виживає. Вона не нападає одразу, вона просить, щоб їй повірили.",  
  next: "tower-scene_bad-path_30"
},
{
    id: "tower-scene_bad-path_30",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-9.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "А ти досі ховаєшся за білим вбранням.",
    next: "tower-scene_bad-path_31"
  },
   {
  id: "tower-scene_bad-path_31",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-8.png",
  character: "/assets/characters/mira-withoutBg.png",
  name: "Міра",
  text: "Мовчи.",  
  next: "tower-scene_bad-path_32"
},
  {
    id: "tower-scene_bad-path_32",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-9.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Досить. Я хочу правду.",
    next: "tower-scene_bad-path_33"
  },
   {
  id: "tower-scene_bad-path_33",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-9.png",
  character: "/assets/characters/mira-withoutBg.png",
  name: "Міра",
  text: "Правда перед тобою. Каель - це зло, якому вдалося прийняти людське обличчя.",
  next: "tower-scene_bad-path_34"
},
  {
    id: "tower-scene_bad-path_34",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-9.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Якщо я брехав, твій амулет не засвітився б, розбудивши справжнього мене.",
    next: "tower-scene_bad-path_35"
  },
{
  id: "tower-scene_bad-path_35",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-9.png",
  character: "",
  name: "",
  text: "Ліана стиснула амулет. Його синє світло не згасало поруч із Каелем, навпаки наче світило яскравіше.",
  next: "tower-scene_bad-path_36"
},
  {
    id: "tower-scene_bad-path_36",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-9.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Я... Я вірю йому.",
    next: "tower-scene_bad-path_37"
  },
   {
  id: "tower-scene_bad-path_37",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-9.png",
  character: "/assets/characters/mira-withoutBg.png",
  name: "Міра",
  text: "Тоді ти обрала неправильно.",
  next: "tower-scene_bad-path_38"
},
{
  id: "tower-scene_bad-path_38",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-8.png",
  character: "",
  name: "",
  text: "Міра підняла руку. Чорна тінь навколо неї стала різкою і холодною, наче лезо.",
  next: "tower-scene_bad-path_39"
},
  {
    id: "tower-scene_bad-path_39",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-10.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Я витратила стільки часу в академії, і теж маю магію! Я не відступлю.",
    next: "tower-scene_bad-path_40"
  },
  {
  id: "tower-scene_bad-path_40",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-10.png",
  character: "",
  name: "",
  text: "Ліана зібрала в долонях усю енергію, які могла. Вона була недосконала, слабша за силу Міри, але тепер іншого захисту в неї не було.",
  next: "tower-scene_bad-path_41"
},
  {
  id: "tower-scene_bad-path_41",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-12.png",
  character: "",
  name: "",
  text: "Перше закляття Міри розбило захисний бар’єр Ліани майже одразу. Друге відкинуло її в стіну.",
  next: "tower-scene_bad-path_42"
},
  {
    id: "tower-scene_bad-path_42",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-12.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Ліано, відійди!",
    next: "tower-scene_bad-path_43"
  },
   {
    id: "tower-scene_bad-path_43",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-13.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Ні! Я вже втекла один раз. Більше не буду!",
    next: "tower-scene_bad-path_44"
  },
    {
  id: "tower-scene_bad-path_44",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-13.png",
  character: "",
  name: "",
  text: "Міра спрямувала нове закляття просто в Ліану.",
  next: "tower-scene_bad-path_45"
},
 {
  id: "tower-scene_bad-path_45",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-14.png",
  character: "",
  name: "",
  text: "Каель кинувся перед нею.",
  next: "tower-scene_bad-path_46"
},
 {
    id: "tower-scene_bad-path_46",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-14.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
    text: "Каель!",
  next: "tower-scene_bad-path_47"
 },
  {
  id: "tower-scene_bad-path_47",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-14.png",
  character: "/assets/characters/mira-withoutBg.png",
  name: "Міра",
  text: "Ні! Що ти наробив!...",
  next: "tower-scene_bad-path_48"
},
 {
    id: "tower-scene_bad-path_48",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-15.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
   text: "Тепер... ти поранила тінь.",
    next: "tower-scene_bad-path_49"
  },
    {
    id: "tower-scene_bad-path_49",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-15.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "О ні, тримайтесь будь ласка!",
    next: "tower-scene_bad-path_50"
  },
   {
    id: "tower-scene_bad-path_50",
    background: "/assets/backgrounds/scene-tower_bad-path/scene-15.png",
    character: "/assets/characters/cael-withoutBg.png",
    name: "Каель",
   text: "Ти все ж... Повірила мені, дякую.",
    next: "tower-scene_bad-path_51"
  },
   {
  id: "tower-scene_bad-path_51",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-15.png",
  character: "",
  name: "",
  text: "Його голос стих. Темрява навколо нього розірвалася, втрачаючи форму.",
  next: "tower-scene_bad-path_52"
},
   {
  id: "tower-scene_bad-path_52",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-16.png",
  character: "",
  name: "",
  text: "Із тіла Каеля вирвалася поранена тінь. Вона кинулася вгору, намагаючись утекти.",
  next: "tower-scene_bad-path_53"
},
  {
  id: "tower-scene_bad-path_53",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-16.png",
  character: "/assets/characters/mira-withoutBg.png",
  name: "Міра",
  text: "До мене, швидше!",
  next: "tower-scene_bad-path_54"
},
   {
  id: "tower-scene_bad-path_54",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-17.png",
  character: "",
  name: "",
  text: "В очах Ліани раптом потемніло, у голові завівся гул бджіл. І чийсь голос ехом пройшовся в голові.",
  next: "tower-scene_bad-path_55"
},
   {
  id: "tower-scene_bad-path_55",
  background: "",
  character: "",
  name: "Голос із амулету",
  text: "Ліано...",
  next: "tower-scene_bad-path_56"
},
   {
  id: "tower-scene_bad-path_56",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-17.png",
  character: "",
  name: "Голос із амулету",
  text: "Ліано...",
  next: "tower-scene_bad-path_57"
},
 {
    id: "tower-scene_bad-path_57",
  background: "",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Хто це?",
    next: "tower-scene_bad-path_58"
  },
     {
  id: "tower-scene_bad-path_58",
  background: "",
  character: "",
  name: "Голос із амулету",
  text: "Ти чула моє ім'я в легендах, і не раз.",
  next: "tower-scene_bad-path_59"
},
   {
  id: "tower-scene_bad-path_59",
  background: "",
  character: "",
  name: "Голос із амулету",
  text: "Я Агата.",
  next: "tower-scene_bad-path_60"
},
 {
    id: "tower-scene_bad-path_60",
  background: "",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Агата? Яким чином я пов'язана із легендарною магинею-воїтелькою?",
    next: "tower-scene_bad-path_61"
  },
    {
  id: "tower-scene_bad-path_61",
  background: "",
  character: "",
  name: "Агата",
  text: "Ти звернулась по мою допомогу сама. Частина моїх сил та свідомості століттями спали у цьому кристалі.",
  next: "tower-scene_bad-path_62"
},
{
    id: "tower-scene_bad-path_62",
  background: "",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Чому моя мати мала таку важливу річ...",
    next: "tower-scene_bad-path_63"
  },
  {
  id: "tower-scene_bad-path_63",
  background: "",
  character: "",
  name: "Агата",
  text: "Бо ти мій нащадок. Боячись повторення історії із Мороком, перед смертю, я заповіла своїм дітям берегти цей амулет, та передавати його нуступникам.",
  next: "tower-scene_bad-path_64"
},
{
  id: "tower-scene_bad-path_64",
  background: "",
  character: "",
  name: "Агата",
  text: "Ти вже бачила події того часу моїми очима, тоді як доторкнулась до амулету.",
  next: "tower-scene_bad-path_65"
},
{
    id: "tower-scene_bad-path_65",
    background: "",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Чому ця доля випала мені, я занадто слабка для того щоб перемогти її. ",
    next: "tower-scene_bad-path_66"
  },
  {
    id: "tower-scene_bad-path_66",
  background: "",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Вони вбили Каеля... І я знову не змогла нічого вдіяти. ",
    next: "tower-scene_bad-path_67"
  },
  {
  id: "tower-scene_bad-path_67",
  background: "",
  character: "",
  name: "Агата",
  text: "Деколи горе пережити набагато важче, аніж здавалось... Тому, якщо ти зараз обереш вічний спокій, я не стану відмовляти.",
  next: "tower-scene_bad-path_68"
},
{
  id: "tower-scene_bad-path_68",
  background: "",
  character: "",
  name: "Агата",
  text: "Але, чи зможеш ти спочивати із миром, знаючи скільки людей поглине темрява.",
  next: "tower-scene_bad-path_69"
},
{
    id: "tower-scene_bad-path_69",
  background: "",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Звичайно, що ні! Але що я можу зробити зараз, якщо мені просто бракує сил.",
    next: "tower-scene_bad-path_70"
  },
  {
  id: "tower-scene_bad-path_70",
  background: "",
  character: "",
  name: "Агата",
  text: "Якщо ти вирішиш боротись, я допоможу тобі.",
  next: "tower-scene_bad-path_71"
},
{
  id: "tower-scene_bad-path_71",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-18.png",
  character: "",
  name: "",
  text: "Раптом, амулет на грудях почав пекти, стимулюючи Ліану до дій. Його синє світло заповнило цілу залу.",
  next: "tower-scene_bad-path_72"
},
{
  id: "tower-scene_bad-path_72",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-18.png",
  character: "",
  name: "",
  text: "Чиста енергія почала випалювати всю темряву, Міра прикрилась.",
  next: "tower-scene_bad-path_73"
},
{
  id: "tower-scene_bad-path_73",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-18.png",
  character: "",
  name: "Агата",
  text: "Візьми залишок моєї сили. І борись!",
  next: "tower-scene_bad-path_74"
},
{
  id: "tower-scene_bad-path_74",
  character: "",
  name: "Агата",
  text: "В пам'ять тих хто віддав свої життя, і в ім'я тих, хто все ще дихає.",
  next: "tower-scene_bad-path_75"
},
{
  id: "tower-scene_bad-path_75",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-18.png",
  name: "Агата",
  text: "Борись!",
  next: "tower-scene_bad-path_76"
},
{
  id: "tower-scene_bad-path_76",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-19.png",
  character: "",
  name: "",
  text: "Ліана обережно поклала Каеля на землю. І піднялась.",
  next: "tower-scene_bad-path_77"
},
{
    id: "tower-scene_bad-path_77",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-19.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Дякую, Агато. Ти підштовхнула мене до правильного шляху.",
    next: "tower-scene_bad-path_78"
  },
  {
    id: "tower-scene_bad-path_78",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-20.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Я не дозволю ще комусь загинути.",
    next: "tower-scene_bad-path_79"
  },
  {
  id: "tower-scene_bad-path_79",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-20.png",
  character: "/assets/characters/mira-withoutBg.png",
  name: "Міра",
  text: "Агато! Знову ти, мертві повинні залишатись мертвими!",
  next: "tower-scene_bad-path_80"
},
{
  id: "tower-scene_bad-path_80",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-20.png",
  character: "",
  name: "",
  text: "Міра випустила згусток чорної енергії, атакуючи Ліану.",
  next: "tower-scene_bad-path_81"
},
{
  id: "tower-scene_bad-path_81",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-21.png",
  character: "",
  name: "",
  text: "Ліана ухилившись від удару, рушила вперед. У неї був план, атакувати обох одночасно. Поки тінь слабка від печаті, та поранена від удару Міри. Біла Відьма не зможе довго її захищати.",
  next: "tower-scene_bad-path_82"
},
{
  id: "tower-scene_bad-path_82",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-21.png",
  character: "",
  name: "",
  text: "Перший відкритий удар в тінь, Міра різко розкинула руки, створюючи перед ним чорний щит. Другий згусток магії, їй у спину. Вона злісно прокричала.",
  next: "tower-scene_bad-path_83"
},
{
  id: "tower-scene_bad-path_83",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-21.png",
  character: "/assets/characters/mira-withoutBg.png",
  name: "Міра",
  text: "Ти не витримаєш. Ти лише дитина з уламком чужої сили.",
  next: "tower-scene_bad-path_84"
},
{
    id: "tower-scene_bad-path_84",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-21.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Ні, не витримала ти. Якщо піддалась темній магії і перейшла на іншу сторону. Після тієї жертви яку принесла Агата...",
    next: "tower-scene_bad-path_85"
  },
  {
  id: "tower-scene_bad-path_85",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-22.png",
  character: "",
  name: "",
  text: "Ще один пропущений удар. На цей раз Мірі в груди.",
  next: "tower-scene_bad-path_86"
},
 {
  id: "tower-scene_bad-path_86",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-22.png",
  character: "",
  name: "",
  text: "Вона проричала наче загнутий звір. З усіх боків вирвалась темна енергія, вражаючи усе підряд.",
  next: "tower-scene_bad-path_87"
},
 {
  id: "tower-scene_bad-path_87",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-22.png",
  character: "",
  name: "",
  text: "Ліана намагалась ухилитись, але частина магіїї влучила у неї. Проте, вона залишилась стояти.",
  next: "tower-scene_bad-path_88"
},
{
    id: "tower-scene_bad-path_88",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-22.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Пора це закінчувати.",
    next: "tower-scene_bad-path_89"
  },
  {
  id: "tower-scene_bad-path_89",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-23.png",
  character: "",
  name: "",
  text: "Ліана почала зачитувати закляття. ЇЇ здійняло у повітря, а очі засвітились синім.",
  next: "tower-scene_bad-path_90"
},
 {
  id: "tower-scene_bad-path_89",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-23.png",
  character: "",
  name: "",
  text: "Навколо Міри із тінью, сформувалось магічне коло, утворюючи тюрму.",
  next: "tower-scene_bad-path_90"
},
{
  id: "tower-scene_bad-path_90",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-23.png",
  character: "/assets/characters/mira-withoutBg.png",
  name: "Міра",
  text: "Ні... Це було її закляття.",
  next: "tower-scene_bad-path_91"
},
{
  id: "tower-scene_bad-path_91",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-23.png",
  character: "",
  name: "",
  text: "Тінь жаалюгідно почав метатися зі сторони в сторону, шукаючи шлях виходу.",
  next: "tower-scene_bad-path_92"
},
{
  id: "tower-scene_bad-path_92",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-23.png",
  character: "",
  name: "",
  text: "Міра, із останніх сил, створила купол, намагаючись врятуватись.",
  next: "tower-scene_bad-path_93"
},
{
  id: "tower-scene_bad-path_93",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-24.png",
  character: "",
  name: "",
  text: "І світло магічного кола засліпило усе. Лише чути було останній крик Міри.",
  next: "tower-scene_bad-path_94"
},
{
  id: "tower-scene_bad-path_94",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-24.png",
  character: "/assets/characters/mira-withoutBg.png",
  name: "Міра",
  text: "Чорт б тебе побрав, Агато!",
  next: "tower-scene_bad-path_95"
},
{
  id: "tower-scene_bad-path_95",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-24.png",
  character: "",
  name: "",
  text: "Не залишилось нічого... Навіть пороху.",
  next: "tower-scene_bad-path_96"
},
{
  id: "tower-scene_bad-path_96",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-25.png",
  character: "",
  name: "",
  text: "Ліана впала на землю. Кров із її ран почала ростікатись.",
  next: "tower-scene_bad-path_97"
},
{
    id: "tower-scene_bad-path_97",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-25.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Невже... Я змогла?...",
    next: "tower-scene_bad-path_98"
  },
  {
  id: "tower-scene_bad-path_98",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-25.png",
  character: "",
  name: "",
  text: "Вона розвернулась до стіни де лежав Каель, і повільно поповзла, прикриваючи рани рукою.",
  next: "tower-scene_bad-path_99"
},
{
    id: "tower-scene_bad-path_99",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-25.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Тепер.. Люди врятовані....",
    next: "tower-scene_bad-path_100"
  },
  {
    id: "tower-scene_bad-path_100",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-25.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Шкода... Що моє тіло не витримало, і я не зможу побачити їхні лиця знову.",
    next: "tower-scene_bad-path_101"
  },
  {
    id: "tower-scene_bad-path_101",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-26.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Проте... Скоро я зустріну тебе. І маму...",
    next: "tower-scene_bad-path_102"
  },
   {
    id: "tower-scene_bad-path_102",
  background: "",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Дякую...",
    next: "tower-scene_bad-path_103"
  },
   {
    id: "tower-scene_bad-path_103",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-26.png",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Що дав мені шанс врятувати Еларію.",
    next: "tower-scene_bad-path_104"
  },
  {
  id: "tower-scene_bad-path_104",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-27.png",
  character: "",
  name: "",
  text: "Вона взяла Каеля за руку. В момент, їй видалось, що він повернувся до неї та тепло посміхнувся.",
  next: "tower-scene_bad-path_105"
},
{
    id: "tower-scene_bad-path_105",
  background: "",
    character: "/assets/characters/liana-withoutBackground.png",
    name: "Ліана",
    text: "Я йду...",
    next: "tower-scene_bad-path_106"
  },
  {
  id: "tower-scene_bad-path_106",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-28.png",
  character: "",
  name: "",
  text: "Коли над Еларією настав ранок, чорна тінь над баштою зникла.",
  next: "tower-scene_bad-path_107"
},
{
  id: "tower-scene_bad-path_107",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-28.png",
  character: "",
  name: "",
  text: "Люди почали згадувати свої імена. Діти - голоси матерів. Старі - лиця усіх, кого знали за життя.",
  next: "tower-scene_bad-path_108"
},
{
  id: "tower-scene_bad-path_108",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-28.png",
  character: "",
  name: "",
  text: "Місто отримало можливість прожити ще один день. ",
  next: "tower-scene_bad-path_109"
},
{
  id: "tower-scene_bad-path_109",
  background: "/assets/backgrounds/scene-tower_bad-path/scene-29.png",
  character: "",
  name: "",
  text: "Проте, великою ціною.",
  next: "tower-scene_bad-path_110"
},
];



