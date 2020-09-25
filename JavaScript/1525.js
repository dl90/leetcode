'use strict'
const test = require('./test.js').test
/*
  You are given a string s,
  a split is called good if you can split s into 2 non-empty strings p and q where its concatenation is equal to s
  and the number of distinct letters in p and q are the same.

  Return the number of good splits you can make in s.

  Example 1:
    Input: s = "aacaba"
    Output: 2
    Explanation: There are 5 ways to split "aacaba" and 2 of them are good.
    ("a", "acaba") Left string and right string contains 1 and 3 different letters respectively.
    ("aa", "caba") Left string and right string contains 1 and 3 different letters respectively.
    ("aac", "aba") Left string and right string contains 2 and 2 different letters respectively (good split).
    ("aaca", "ba") Left string and right string contains 2 and 2 different letters respectively (good split).
    ("aacab", "a") Left string and right string contains 3 and 1 different letters respectively.

  Example 2:
    Input: s = "abcd"
    Output: 1
    Explanation: Split the string as follows ("ab", "cd").

  Example 3:
    Input: s = "aaaaa"
    Output: 4
    Explanation: All possible splits are good.

  Example 4:
    Input: s = "acbadbaada"
    Output: 2

  Constraints:
    s contains only lowercase English letters.
    1 <= s.length <= 10^5
*/

var numSplits = function (s) {
  let a; let b; let count = 0
  for (let i = 1; i < s.length; i++) {
    a = s.substr(0, i)
    b = s.substr(i)

    if (new Set(a).size == new Set(b).size) count++
  }

  return count
}

function optimized (s) {
  const len = s.length
  const arr = new Int8Array(len)

  const iSet = new Set()
  const jSet = new Set()
  let j

  /*
    two pointers forward && backward to add letter to set
    arr to track set.size
    set the arr with offset b/c [a, |vs| a, c, a, b, a]

      [a, a, c, a, b, a]
       1  1  2  2  3  3
       3  3  3  2  2  1

      [a, a, c, a, b, a]
       1  1  2  2  3  3
    3  3  3  2  2  1
  */
  for (let i = 0; i < len; i++) {
    j = len - 1 - i
    iSet.add(s[i])
    jSet.add(s[j])
    arr[i] += iSet.size
    arr[j - 1] -= jSet.size
    // console.log(arr, iSet.size, jSet.size);
  }
  return arr.filter(ele => ele == 0).length
}

(() => {
  const hrStart = process.hrtime()

  console.log(
    // numSplits("aacaba"), // 2
    // numSplits("abcd"), // 1
    // numSplits("aaaaa"), // 4
    // numSplits("acbadbaada"), // 2
    // numSplits("icahdfbifaefihedbhcibeiigihiggdfcccdbhgeaedggddfdfceachbcehiaidfihagbdbhhciabadifadeceabdchhacfhgecaecifcbhhihcbfddeddheahcaiacgciiicgaficehbicidgchdgiiciidccgheechihbbihhfacabhgfbdgcefehfedcegdbggcgbdihdffdehdhchgcgaabebfdaihhieffbbeedgidcbiachedebgbahgafbbeighggcgdfbbhhdebiefcffacacaibfagbibcegdccahfbbehiiieddibdaedibaecbcgfehffaeccgfdfgbgffgdefhbgbafbhcffbefabeagbcacecbdaicahfehaigegcadfdibheiahcfbehdidbiciegbfefcgdfhibgggdddfifacbaaahggadbibdgfegeebeddechghdgiedbfcfciddhggifaiddbcdgibidhhgiagebeifdcacbigigbicghachcedaaicaiafgbdediibdggaggafahihbhddbhecbffhhhibbhecdbgiefcaiibeagbgafedeechbbifddhgcdcfafgieecfehdaedegdihdbibhficgiaeheecaegcbhcighfdiecficcgfheifbghdgbhfcbfdciffiiggaffbgfddcicgagggfgfaecfdheiafhhabebadhcgccafibaagheaibdigbbfggfiicfighefhfbdehfaiiiacchcfegiiecaaibecebgiefeedgccfcbhchhgieddbeaffgeeeaeifbhicdcfgbeadfeaifcbeahgfcceabagbaediegeaieaiabgdahgbeiebadhchieggcfbffcadebehcdcahaceiaaiaaigacefecdgiadabfiggiabahfeagdgcefahchceggiebaddbifichcibhhbgbadbgcdaegheefffadadbhbifidfdedabaagddbcbifahgbfeehbgbibgabcigcbehbedabfcfiefacdhbahagfaceadegicgbadhffecicgfcffbbiefbegbhddhehggghfegabigiihdfbbehiaaeihdeafcigacefgfigdcdfdhehdgebabfidbhcibiicggcechdaadfccbgfcgdcgedhdebhbceieffegbbhibegegfcicfaggdiihhibeaegeghieiehbebefdhcdbeiibiecddafhaaeaagidiiageccaaaadcebefhbedbicegeeiacfaibaihchgfdiabgchcfagfbefaccedbdihhieehghdgaaiedbdecciiffcdffiafiiidbhccaihbdhefhabgieegficbdfcbcbfebgghhibedbegeegigaddegfhdhbiahhiffbbcdffbfbbdibhgfbbfaheihceadiacchgbhfehhigacgdededdehaiddadihfbiiahhdbaefhhibgibcdedfeggiebdchdbbcehihahcdeddghgiaeghaebigbggfcbcdcgbccbgidaebccffeegicibgdahgdfechiahciadafcfbhdfcebagfbiadaheifbagbbgggcifecegfefibbibdegfhchiaegagegchaecffhgciaadhgiidhhbdcedeeecabaefhebaccdcagcbigedhbhceegdiecdgagdbbegceiiibiaciafffiadccaeabhecaidfbcbccihbgafghfebfeahacgbbhddchhafehaccgdgcegdbabcbiabihbihcfebeaffcggfcbiiaacfegdagfefbaeggheheceeeaiagfbiffdhgagegfcibbghdbfaicaiihcegcdabdcfefhgbagfaffahgeghgccacehbbbbbbhieehhhciehhbgabgdbgahfehidiibihgagfdfiggdafedciaegeeehabfhdghiaigabfdabhgihhbddaacgfedaddfdcheegbcfddifbebbiachcdfddehaehchbaiefcdfgeggeecfdbbgfhbcghddeaeeefaihbdeeeeefiggdgiabadfgiegefibagccaggacedegfggegdebgbgibdfghdidcihfcbcbbhhdbicciabfhiaigfcfcaficgbhidbdfhadgfehhcfdhefigafhfbdcddbbbecfiefecgcgiiifciddcdiidcicbcfgfhaegacahfcdfbcgbedgiehefbddibeefddgdhhiffhhgihhhdcbgehgiecgggecfehiiebdiibabfbchiaifgdddihghcfacgfgcefdeedibfccifaeideceifdhadehdabcfagfccgdgihacaghgdifahehgceebeeaifbhdaihibbifhgcbddabadfaaahifedhgfaaccbhhicccchdgffegaeaaaeaehgacihebecfgagaegbbidfddhagfcaifhgicdfbcaghcgbdhbcahebfdfifageeheggbgfahhifdciicchgeciabhgcgcbdfahfeibbiggaaiadhhedcifidiefihfbfegdbhieghbdacdddbcgbfebfccehccigbcbebdedgdgaahfhfddghfeabadfbgiidgfiifhiafhiedhdhagcfffgeidfhfhabcbcbdcdhbdcgdbefgchahcagfbgcbbeggadfeegccifdfiibcdgdbigbidgegaaccbgdgggcihfiacgiacigeehfdfcedfhhedhbdidegccbcgaadacihcgfcibheiaedefcfdbhcbbcbgcgcabgeiegafgghehcdedigfdhhfaceegbbdeheagheddhbceffhbhhfdhaddcdibbbgegcagdihhhbbifaeciabcggihifbachciaffgaddccdebechhbdceafigfegifggadgdbfgeaghabhidbcbhafhgcghfgbcihifdgdcebhegbffacbcheabidebgaddafihaiaheififgbfgcbicfiaaghbahdgadabfcbibahddechdhddadgaefefbgiahgcefhffehhhhgahihhdcbbcfhiggcbcfbegecfbbdbghbahceaffcbfehifagefcbcdaiaiaaeahiccbghchicaafcbdigbbfaeeaiddbhcdebcdhhbiddhffhhaededgcdaaigfccaddchgfichfeccafgfbadhbdffgcgfffcceefebehcedgfddegidhbfifbidcfffhbegfggfbfbhbfehgghfiigcbfccebddahbagdefidffchaibegigciiiegecchdadieggebchdgifghihfgefhdbegfghbecdfccdffefggbdaiagfbaaahfcicbahaabdiabahgcbcgicgcafccieebceeaihcefgaahegchedceifdbbhdbaheeefffbgedffchiaiaihaafggddebacdihabdfbccfgbhafhiggcabahggehghiceedbebfbceeefhfhaigadafcfgiiiadgeebaeeigibdafcgahhfeahhcghfadiadbbdidcgeghfhbfaicicgafhbeahccdiaidffeiahbgcgdccbhafhiciehgedbabifgciaieehhddefaaicahcfggdidcehfgigdccieahdhfbaefeiieecebbdchdhgcebfeceidcfdfidhhaigfhigadecagffegcabbgiffbfhbhiddchieheaibgagehbigdadhfabegfahagfdbccdggbbdiaeeaebccighcagafdgbfggdhhdchagddcighihefdgbeidiahebiiehdhccbcgdaccgfbahihbcadfgcbcabccdfccaddhdghbffgaebddhicebbefibaeigfagiiafhdbbiffagahiahhegeieeadcecfecbadecdbadigiffbgdehdcbedbiigfidcegfhahchabeidefbadcfbcgdhcfdeeffgdifigcfebgdiaccibbbehadcgieheghebahhiafbbdfehgaiiaadgcaabbdeaacbbfbgigbibeabbfcccgdghabeicdgiecahgahbbfecfbhaeifgdigeeaddggbiffidebfihaecaadcgafaaeehbghbehbgefaibcifbhhgbfcagcdgdgcgieigdahhgcaichaagidfadihhfadgfggfhcaahgggcdhibhcbfdbdecggbffhgdicgeicefiegaccaebccibidfcddibbfdfdebibghbhdccebidifheigabaecicebiffhedgfadcfbbdhhhdbicbchgbffcghdbahbhbegebiccdcdhhgbiciicaebbeccebcddfdefbhiifeecfhdhficdcdhcdaeidifabbaigcbhicaeibfafefchgchchagcagbahghcgaehficeabdieidbifacagcfeefdehiagecaahbahiggahfgageagdecihbedghcegdegfbbiiiigihhgiaaabdidiafdehhiebdcbggihbggiiiafhabaeiceigeebaccbdgdicffefefedghebcgheaidheidifbffaifdddhhccdfciaahaddcdbbdacgfagadiceebfbhihefbcdfhhggdedhiaecdgcebbiibadegccigdhbdeeebbfebgaedcfbfgidgbcfhigahacecdaacihhfcafhfbdadgdgbcggdfcacgbdeaebdafgihaeicaeeiagagcciehdbabchfafahecehbdfcachfabehaaiefdbbaehcigiehbghcdeedbcfcdfgechcgfiiadgdfcideebchcicgdidccgfiaaghhaibeiebfhabhdeeacehgghfaefbhaiefaahibdcagiabgegdeffcdbachdbgdhhbhgfeafdihidhgibihhficabhfeicihebaacbbhicbidiabgaaefgdibhgchdaghagfgiaibedeidbhafiiigibadiccabccecghehdfcfdfgbihiedicadeghbbcaheaiacbbadfcfhgegfihbbgfbhbiihhahfbhfffbihfbbiddifechbahidfiigaifcdfihgacgaebhgeeiigddcheeddcigadcdbibegfcafcdgfibeedicfffaicabggchbibebaidbafhhcgdbdiggigggedheiccbifedgeicfahfdfgeicdgfhedaeicgcfgehibbgaifdgfhaecghhfidhegeihahbghfecagdfcacgfahahhcdcifegfgfcfdbeafbhecfbihecehichheiggaiigeeaeeehagghhafhibibcgdbchiecfheehgcabbbeegibhfddhhcfeeafhchbgcchdfhgcihdggfibdbdidgighichfeiabfggfaggfiddidcahaaaagahdadgegcggicdhahggfbbacaeigfaacfhhebehihbfaedcdbebcagafagbhcfbfaidhgdhefhbieffbaifgabfeacdhbiaggageiiahgiiafhebbbdefebiicbiiggagdcddbcfaafabdfgbchffhdbbeacihehbihgbeihhfdiiedadhfgcccibchdhcefafdggbdhgcccfggbdbbicbbdacdcfccfcfddidcgfbibfighihfafaaghbgbdcacheifgbchagfdcihfhcfacefafhegiagbidcdbbdgcccbabdeaddagcciffgbcbgighbfbaaiahcbefaadffaggicicceedbhbaaeggbibdeegbcdhihhhdgdchdgdiffhfibdbcadecciabagdihgfhgcgadfacgdegafighfhffagghaiifhiiaibffhbhfgdafahiaabaeaaheifgegfffaegbbefacbhchbdifdgcgiacdbffhdbfchbicchcegebefgccedfccdfaegfdhhhefhchehfdfdhaafiifdgddhddadeghhebhidfebhigfbheahcbagcdbhegfadiachdgiahihcfidbceibccafihahdehadcdfcbgdghdbehediiffdbeiiidacfidiififcfcahbdbdfeiddedaedhihdbfabebfgheeghfeaefhgdahiigbcbaehdgedaiedffbehbdfigeiccgcgdifbihdiibgigediehiahfgdhebaghfbgcichfdbeagdbigifbeddihbbgdgaeecidbfgfgfeifbgbcbhdhahdeheaaacbhiceegefidhcdidhiaidhfcbcegccbiidbgafedfaffeiigefifaicagedffefehhahffgaghaeabiaffgdgcdchecebdiddcbgffdgbechbceifiicadbhedaicdcdfhffcaiigfcdeafifbefdgbdfbgdaeigbcfhgibigdcgghdgbhgcbdgfcgfigdifchffcaeahbgcgafhfeeidbdaigciifdgdcgaegdaieiidfhfaecffeacgahfagbbcgbfgghaahfheihdaheihgfiifgeabfbhhagbbaididgbicegdbahbgeffifhdfddeheifhaidcdihfchdaccigffiicdebdgdfdhcfdieghdibaifbddbgfcidaibaeageggfidacfacfgfaeiaifgabddgcfbhacbiaaabcfachgiicfedaeadecdhgabaadgdedfcgiddghaegacddagihbehehhhcfdehehiagcegehighicdbaddhceidihfaihicbdiedgfiecbiieibabbfdhabbcebeadhhbhiaabbcbfehcigcdgaffeifiaccgaichadfifeecdabihfhfhibibeigdiabeibiaacgcdiifefciegigibgbhbdedifccdacdgehhfcdbicgdhafhcfcbegechddieegfghidcgbihcgahficfbdbhcgfgfddaebehgcgfeefcaacbeebhccgcdabaefdichedeeghaidhdiafbaheadccbeigdeeagbbeiiaedifhfcdabfaeicbifagibedaciggcaeahedfbgdcdibbiegbecdcfegbfibgbghbfifdiiafecdhdgaaaibdabbccfdfiaiacgdhchhhahfhicfbaaebefdaegeadecahdcdbahdaibagbehggedhddchgabaigdidedfacdabeedgdfedbffdcidfdehfeffgccagchidaigihgcfcbddbbaccahfdhehdccdcedfeebgfcebgaiahcecddcehgebibieidfecheigecehbfbfefcifbcaeaihbgbgbddceggbihfhfdefhcgaiighbcacfgacagdcchdgaebabcgfehiaehhebbcfbbgcaaihbdhgfbedbiifidfhcdhbdagdihghbehghgidbadebaebachfaeghcadffibiheibeeagdgbceiebfciigighcibdfaeidgbfbiibffabefageeifacaggdgiggfbcagiffhcgiceecfidgfdiihcgahffdhibigafebdhddghagbecgfghcfigdibibiadghgeddichighbciibfbdeieifihcaiibbabghibihhchidcghiabgdehideciechcehaagbgbdchbbafhcdeigdedaafhiiebheehdffaggcgdhececaabbciidhcdbdgcheidbgddbebiieiifcahgfcbdbbachbhihbbiaagfbeheehbffhihiddgggcbciebhcgdaceiaihdgifbcdeciccbfbdcghfeceafhachihcgdaiigccciaegggfbcfdfafidedcdhaaeifhcgfhccbdfcabcigigigggegbdehcfdaiabhabbdbfbaadebgbbehgfbdaghhgiigigdfeecbdhhigdbeiicfefcfeddbeafdicciigcifhfafdbbeibcdghagefaeebgifibaadhaabfaefcegddcabgcbfcfgiehhfgdhdfefgfebiafeeehhadiafaehchccheibcdhiachcciccccdfefhhbiebbcegechcbhahfifbcihbeabicabgeibccgigdidfcedfcfeigiibcdigfecbahgcifgabacgdbcifbeegaeiafagecbcdgdgfigfhheeheefdhaefahbagiifghbicgfhhdaadagfcghdefbdggbaaddhaecdifddiahebaacieiefaahbfifbfgffhdagcihhifcfhdedcgbaacfdhhahhdahhbecceabaedhfaaabdbhfbahbdciiebhdhgcchccieafcgdgefdbfhgicbchiddacdigaddadidegfhggiiddfcfidhgicibdieghchfhecifhafhdefebeidceehddegcicfbdahdcdihbbdghiaecggbbfiegfeehbdcdceddiifgciacaehhdhigfdidbiaheifihffdbaegebhgiggghifhaegefhegbbdhhhidecdbafecgfabdhcabhcgghagfhffifafegdibaaebcegdgciaedfacdgghiihaifaidegcbehhfafgcidbaegcchabhfabdbhifbfhagiidbabiifibfhadeiiiicigigcbbdieafgdcbeiedfdecbaagbiaibhbaheeeceggecbfdieaegccgbfcfceifhhgeadcdhfaecbfbcgfhehdgccgdhhifbbeiedfbhfcfigifhggaffaibaadhbcheiahieaidbhheiecfebiebaicddggibaabeefceggacfdcggebfhghhdbaefdaeggcdbfeeheggigcffcidagehgificbfiededfbhadcdfcabdgcbfbfhiiaidbgbgdifgfdaieiaccafhdfgggbfhehadeddiddadfiigchhhiicfechidiadiffhieghbggfcfaaaacgdgdfbebhecbgdhfcbfcbdgaiaifedfccceacghhefcciahbhbgfdicdhhdeeiadfadfebcbgbhfdhhfifdafibbahacaeheeahaegfadeaigiedcegfdefhhehibhacdgcdceceaaihahfbgadfbaiaedcaedfcgefgaaccahiaebagehiccegfacdeebgdfhbiafechdfeceggdffecafbecfhggcacbebbfbhiieaeieghdcdefegiadhgfdedhaefdadiihichhiacgihfbdhgchgeibfcaacigdeahdcbbciibabbbiifgacfefebicidhbifagadgedaeifciahebcgiddfehgbeidiichaehbgcheifadeicgibbeabcgchgeifegaeagbdffagchaiaecabcfibgahihbicbdgfihedfahibfdicgefbagaghgaghdaiibcfiacdfiaiaecgcgbfdibbcdheccggcggdfghihhhghdbfhaacbfibgehgchgdaeibdiadbicchdcaicfddaciaacdbaadigfadcghcedbbeifaebdafgeechadhfbgagceebacceccffaceghacchgaiicfaaicgiibfdahccidaigcgdiehhcifchabchacfghachicgaifiigcccfcgibfhaihagfddhdgaidchic"), // 9744

    optimized('aacaba'), // 2
    optimized('abcd'), // 1
    optimized('aaaaa'), // 4
    optimized('acbadbaada'), // 2
    optimized('icahdfbifaefihedbhcibeiigihiggdfcccdbhgeaedggddfdfceachbcehiaidfihagbdbhhciabadifadeceabdchhacfhgecaecifcbhhihcbfddeddheahcaiacgciiicgaficehbicidgchdgiiciidccgheechihbbihhfacabhgfbdgcefehfedcegdbggcgbdihdffdehdhchgcgaabebfdaihhieffbbeedgidcbiachedebgbahgafbbeighggcgdfbbhhdebiefcffacacaibfagbibcegdccahfbbehiiieddibdaedibaecbcgfehffaeccgfdfgbgffgdefhbgbafbhcffbefabeagbcacecbdaicahfehaigegcadfdibheiahcfbehdidbiciegbfefcgdfhibgggdddfifacbaaahggadbibdgfegeebeddechghdgiedbfcfciddhggifaiddbcdgibidhhgiagebeifdcacbigigbicghachcedaaicaiafgbdediibdggaggafahihbhddbhecbffhhhibbhecdbgiefcaiibeagbgafedeechbbifddhgcdcfafgieecfehdaedegdihdbibhficgiaeheecaegcbhcighfdiecficcgfheifbghdgbhfcbfdciffiiggaffbgfddcicgagggfgfaecfdheiafhhabebadhcgccafibaagheaibdigbbfggfiicfighefhfbdehfaiiiacchcfegiiecaaibecebgiefeedgccfcbhchhgieddbeaffgeeeaeifbhicdcfgbeadfeaifcbeahgfcceabagbaediegeaieaiabgdahgbeiebadhchieggcfbffcadebehcdcahaceiaaiaaigacefecdgiadabfiggiabahfeagdgcefahchceggiebaddbifichcibhhbgbadbgcdaegheefffadadbhbifidfdedabaagddbcbifahgbfeehbgbibgabcigcbehbedabfcfiefacdhbahagfaceadegicgbadhffecicgfcffbbiefbegbhddhehggghfegabigiihdfbbehiaaeihdeafcigacefgfigdcdfdhehdgebabfidbhcibiicggcechdaadfccbgfcgdcgedhdebhbceieffegbbhibegegfcicfaggdiihhibeaegeghieiehbebefdhcdbeiibiecddafhaaeaagidiiageccaaaadcebefhbedbicegeeiacfaibaihchgfdiabgchcfagfbefaccedbdihhieehghdgaaiedbdecciiffcdffiafiiidbhccaihbdhefhabgieegficbdfcbcbfebgghhibedbegeegigaddegfhdhbiahhiffbbcdffbfbbdibhgfbbfaheihceadiacchgbhfehhigacgdededdehaiddadihfbiiahhdbaefhhibgibcdedfeggiebdchdbbcehihahcdeddghgiaeghaebigbggfcbcdcgbccbgidaebccffeegicibgdahgdfechiahciadafcfbhdfcebagfbiadaheifbagbbgggcifecegfefibbibdegfhchiaegagegchaecffhgciaadhgiidhhbdcedeeecabaefhebaccdcagcbigedhbhceegdiecdgagdbbegceiiibiaciafffiadccaeabhecaidfbcbccihbgafghfebfeahacgbbhddchhafehaccgdgcegdbabcbiabihbihcfebeaffcggfcbiiaacfegdagfefbaeggheheceeeaiagfbiffdhgagegfcibbghdbfaicaiihcegcdabdcfefhgbagfaffahgeghgccacehbbbbbbhieehhhciehhbgabgdbgahfehidiibihgagfdfiggdafedciaegeeehabfhdghiaigabfdabhgihhbddaacgfedaddfdcheegbcfddifbebbiachcdfddehaehchbaiefcdfgeggeecfdbbgfhbcghddeaeeefaihbdeeeeefiggdgiabadfgiegefibagccaggacedegfggegdebgbgibdfghdidcihfcbcbbhhdbicciabfhiaigfcfcaficgbhidbdfhadgfehhcfdhefigafhfbdcddbbbecfiefecgcgiiifciddcdiidcicbcfgfhaegacahfcdfbcgbedgiehefbddibeefddgdhhiffhhgihhhdcbgehgiecgggecfehiiebdiibabfbchiaifgdddihghcfacgfgcefdeedibfccifaeideceifdhadehdabcfagfccgdgihacaghgdifahehgceebeeaifbhdaihibbifhgcbddabadfaaahifedhgfaaccbhhicccchdgffegaeaaaeaehgacihebecfgagaegbbidfddhagfcaifhgicdfbcaghcgbdhbcahebfdfifageeheggbgfahhifdciicchgeciabhgcgcbdfahfeibbiggaaiadhhedcifidiefihfbfegdbhieghbdacdddbcgbfebfccehccigbcbebdedgdgaahfhfddghfeabadfbgiidgfiifhiafhiedhdhagcfffgeidfhfhabcbcbdcdhbdcgdbefgchahcagfbgcbbeggadfeegccifdfiibcdgdbigbidgegaaccbgdgggcihfiacgiacigeehfdfcedfhhedhbdidegccbcgaadacihcgfcibheiaedefcfdbhcbbcbgcgcabgeiegafgghehcdedigfdhhfaceegbbdeheagheddhbceffhbhhfdhaddcdibbbgegcagdihhhbbifaeciabcggihifbachciaffgaddccdebechhbdceafigfegifggadgdbfgeaghabhidbcbhafhgcghfgbcihifdgdcebhegbffacbcheabidebgaddafihaiaheififgbfgcbicfiaaghbahdgadabfcbibahddechdhddadgaefefbgiahgcefhffehhhhgahihhdcbbcfhiggcbcfbegecfbbdbghbahceaffcbfehifagefcbcdaiaiaaeahiccbghchicaafcbdigbbfaeeaiddbhcdebcdhhbiddhffhhaededgcdaaigfccaddchgfichfeccafgfbadhbdffgcgfffcceefebehcedgfddegidhbfifbidcfffhbegfggfbfbhbfehgghfiigcbfccebddahbagdefidffchaibegigciiiegecchdadieggebchdgifghihfgefhdbegfghbecdfccdffefggbdaiagfbaaahfcicbahaabdiabahgcbcgicgcafccieebceeaihcefgaahegchedceifdbbhdbaheeefffbgedffchiaiaihaafggddebacdihabdfbccfgbhafhiggcabahggehghiceedbebfbceeefhfhaigadafcfgiiiadgeebaeeigibdafcgahhfeahhcghfadiadbbdidcgeghfhbfaicicgafhbeahccdiaidffeiahbgcgdccbhafhiciehgedbabifgciaieehhddefaaicahcfggdidcehfgigdccieahdhfbaefeiieecebbdchdhgcebfeceidcfdfidhhaigfhigadecagffegcabbgiffbfhbhiddchieheaibgagehbigdadhfabegfahagfdbccdggbbdiaeeaebccighcagafdgbfggdhhdchagddcighihefdgbeidiahebiiehdhccbcgdaccgfbahihbcadfgcbcabccdfccaddhdghbffgaebddhicebbefibaeigfagiiafhdbbiffagahiahhegeieeadcecfecbadecdbadigiffbgdehdcbedbiigfidcegfhahchabeidefbadcfbcgdhcfdeeffgdifigcfebgdiaccibbbehadcgieheghebahhiafbbdfehgaiiaadgcaabbdeaacbbfbgigbibeabbfcccgdghabeicdgiecahgahbbfecfbhaeifgdigeeaddggbiffidebfihaecaadcgafaaeehbghbehbgefaibcifbhhgbfcagcdgdgcgieigdahhgcaichaagidfadihhfadgfggfhcaahgggcdhibhcbfdbdecggbffhgdicgeicefiegaccaebccibidfcddibbfdfdebibghbhdccebidifheigabaecicebiffhedgfadcfbbdhhhdbicbchgbffcghdbahbhbegebiccdcdhhgbiciicaebbeccebcddfdefbhiifeecfhdhficdcdhcdaeidifabbaigcbhicaeibfafefchgchchagcagbahghcgaehficeabdieidbifacagcfeefdehiagecaahbahiggahfgageagdecihbedghcegdegfbbiiiigihhgiaaabdidiafdehhiebdcbggihbggiiiafhabaeiceigeebaccbdgdicffefefedghebcgheaidheidifbffaifdddhhccdfciaahaddcdbbdacgfagadiceebfbhihefbcdfhhggdedhiaecdgcebbiibadegccigdhbdeeebbfebgaedcfbfgidgbcfhigahacecdaacihhfcafhfbdadgdgbcggdfcacgbdeaebdafgihaeicaeeiagagcciehdbabchfafahecehbdfcachfabehaaiefdbbaehcigiehbghcdeedbcfcdfgechcgfiiadgdfcideebchcicgdidccgfiaaghhaibeiebfhabhdeeacehgghfaefbhaiefaahibdcagiabgegdeffcdbachdbgdhhbhgfeafdihidhgibihhficabhfeicihebaacbbhicbidiabgaaefgdibhgchdaghagfgiaibedeidbhafiiigibadiccabccecghehdfcfdfgbihiedicadeghbbcaheaiacbbadfcfhgegfihbbgfbhbiihhahfbhfffbihfbbiddifechbahidfiigaifcdfihgacgaebhgeeiigddcheeddcigadcdbibegfcafcdgfibeedicfffaicabggchbibebaidbafhhcgdbdiggigggedheiccbifedgeicfahfdfgeicdgfhedaeicgcfgehibbgaifdgfhaecghhfidhegeihahbghfecagdfcacgfahahhcdcifegfgfcfdbeafbhecfbihecehichheiggaiigeeaeeehagghhafhibibcgdbchiecfheehgcabbbeegibhfddhhcfeeafhchbgcchdfhgcihdggfibdbdidgighichfeiabfggfaggfiddidcahaaaagahdadgegcggicdhahggfbbacaeigfaacfhhebehihbfaedcdbebcagafagbhcfbfaidhgdhefhbieffbaifgabfeacdhbiaggageiiahgiiafhebbbdefebiicbiiggagdcddbcfaafabdfgbchffhdbbeacihehbihgbeihhfdiiedadhfgcccibchdhcefafdggbdhgcccfggbdbbicbbdacdcfccfcfddidcgfbibfighihfafaaghbgbdcacheifgbchagfdcihfhcfacefafhegiagbidcdbbdgcccbabdeaddagcciffgbcbgighbfbaaiahcbefaadffaggicicceedbhbaaeggbibdeegbcdhihhhdgdchdgdiffhfibdbcadecciabagdihgfhgcgadfacgdegafighfhffagghaiifhiiaibffhbhfgdafahiaabaeaaheifgegfffaegbbefacbhchbdifdgcgiacdbffhdbfchbicchcegebefgccedfccdfaegfdhhhefhchehfdfdhaafiifdgddhddadeghhebhidfebhigfbheahcbagcdbhegfadiachdgiahihcfidbceibccafihahdehadcdfcbgdghdbehediiffdbeiiidacfidiififcfcahbdbdfeiddedaedhihdbfabebfgheeghfeaefhgdahiigbcbaehdgedaiedffbehbdfigeiccgcgdifbihdiibgigediehiahfgdhebaghfbgcichfdbeagdbigifbeddihbbgdgaeecidbfgfgfeifbgbcbhdhahdeheaaacbhiceegefidhcdidhiaidhfcbcegccbiidbgafedfaffeiigefifaicagedffefehhahffgaghaeabiaffgdgcdchecebdiddcbgffdgbechbceifiicadbhedaicdcdfhffcaiigfcdeafifbefdgbdfbgdaeigbcfhgibigdcgghdgbhgcbdgfcgfigdifchffcaeahbgcgafhfeeidbdaigciifdgdcgaegdaieiidfhfaecffeacgahfagbbcgbfgghaahfheihdaheihgfiifgeabfbhhagbbaididgbicegdbahbgeffifhdfddeheifhaidcdihfchdaccigffiicdebdgdfdhcfdieghdibaifbddbgfcidaibaeageggfidacfacfgfaeiaifgabddgcfbhacbiaaabcfachgiicfedaeadecdhgabaadgdedfcgiddghaegacddagihbehehhhcfdehehiagcegehighicdbaddhceidihfaihicbdiedgfiecbiieibabbfdhabbcebeadhhbhiaabbcbfehcigcdgaffeifiaccgaichadfifeecdabihfhfhibibeigdiabeibiaacgcdiifefciegigibgbhbdedifccdacdgehhfcdbicgdhafhcfcbegechddieegfghidcgbihcgahficfbdbhcgfgfddaebehgcgfeefcaacbeebhccgcdabaefdichedeeghaidhdiafbaheadccbeigdeeagbbeiiaedifhfcdabfaeicbifagibedaciggcaeahedfbgdcdibbiegbecdcfegbfibgbghbfifdiiafecdhdgaaaibdabbccfdfiaiacgdhchhhahfhicfbaaebefdaegeadecahdcdbahdaibagbehggedhddchgabaigdidedfacdabeedgdfedbffdcidfdehfeffgccagchidaigihgcfcbddbbaccahfdhehdccdcedfeebgfcebgaiahcecddcehgebibieidfecheigecehbfbfefcifbcaeaihbgbgbddceggbihfhfdefhcgaiighbcacfgacagdcchdgaebabcgfehiaehhebbcfbbgcaaihbdhgfbedbiifidfhcdhbdagdihghbehghgidbadebaebachfaeghcadffibiheibeeagdgbceiebfciigighcibdfaeidgbfbiibffabefageeifacaggdgiggfbcagiffhcgiceecfidgfdiihcgahffdhibigafebdhddghagbecgfghcfigdibibiadghgeddichighbciibfbdeieifihcaiibbabghibihhchidcghiabgdehideciechcehaagbgbdchbbafhcdeigdedaafhiiebheehdffaggcgdhececaabbciidhcdbdgcheidbgddbebiieiifcahgfcbdbbachbhihbbiaagfbeheehbffhihiddgggcbciebhcgdaceiaihdgifbcdeciccbfbdcghfeceafhachihcgdaiigccciaegggfbcfdfafidedcdhaaeifhcgfhccbdfcabcigigigggegbdehcfdaiabhabbdbfbaadebgbbehgfbdaghhgiigigdfeecbdhhigdbeiicfefcfeddbeafdicciigcifhfafdbbeibcdghagefaeebgifibaadhaabfaefcegddcabgcbfcfgiehhfgdhdfefgfebiafeeehhadiafaehchccheibcdhiachcciccccdfefhhbiebbcegechcbhahfifbcihbeabicabgeibccgigdidfcedfcfeigiibcdigfecbahgcifgabacgdbcifbeegaeiafagecbcdgdgfigfhheeheefdhaefahbagiifghbicgfhhdaadagfcghdefbdggbaaddhaecdifddiahebaacieiefaahbfifbfgffhdagcihhifcfhdedcgbaacfdhhahhdahhbecceabaedhfaaabdbhfbahbdciiebhdhgcchccieafcgdgefdbfhgicbchiddacdigaddadidegfhggiiddfcfidhgicibdieghchfhecifhafhdefebeidceehddegcicfbdahdcdihbbdghiaecggbbfiegfeehbdcdceddiifgciacaehhdhigfdidbiaheifihffdbaegebhgiggghifhaegefhegbbdhhhidecdbafecgfabdhcabhcgghagfhffifafegdibaaebcegdgciaedfacdgghiihaifaidegcbehhfafgcidbaegcchabhfabdbhifbfhagiidbabiifibfhadeiiiicigigcbbdieafgdcbeiedfdecbaagbiaibhbaheeeceggecbfdieaegccgbfcfceifhhgeadcdhfaecbfbcgfhehdgccgdhhifbbeiedfbhfcfigifhggaffaibaadhbcheiahieaidbhheiecfebiebaicddggibaabeefceggacfdcggebfhghhdbaefdaeggcdbfeeheggigcffcidagehgificbfiededfbhadcdfcabdgcbfbfhiiaidbgbgdifgfdaieiaccafhdfgggbfhehadeddiddadfiigchhhiicfechidiadiffhieghbggfcfaaaacgdgdfbebhecbgdhfcbfcbdgaiaifedfccceacghhefcciahbhbgfdicdhhdeeiadfadfebcbgbhfdhhfifdafibbahacaeheeahaegfadeaigiedcegfdefhhehibhacdgcdceceaaihahfbgadfbaiaedcaedfcgefgaaccahiaebagehiccegfacdeebgdfhbiafechdfeceggdffecafbecfhggcacbebbfbhiieaeieghdcdefegiadhgfdedhaefdadiihichhiacgihfbdhgchgeibfcaacigdeahdcbbciibabbbiifgacfefebicidhbifagadgedaeifciahebcgiddfehgbeidiichaehbgcheifadeicgibbeabcgchgeifegaeagbdffagchaiaecabcfibgahihbicbdgfihedfahibfdicgefbagaghgaghdaiibcfiacdfiaiaecgcgbfdibbcdheccggcggdfghihhhghdbfhaacbfibgehgchgdaeibdiadbicchdcaicfddaciaacdbaadigfadcghcedbbeifaebdafgeechadhfbgagceebacceccffaceghacchgaiicfaaicgiibfdahccidaigcgdiehhcifchabchacfghachicgaifiigcccfcgibfhaihagfddhdgaidchic') // 9744
  )

  const used = process.memoryUsage()
  const hrEnd = process.hrtime(hrStart)

  console.log('\n-----------------------------')
  console.log('=>', hrEnd[1] / 1000000, 'ms')
  console.log('-----------------------------')
  for (const key in used) { console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`) }
  console.log('-----------------------------\n')
})()
