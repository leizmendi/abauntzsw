import { Language } from './types';
import { NavItems } from './types';

export interface LegalTranslations {
    nav: NavItems;
    title: string;
    content: string;
}

export const legalTranslations: Record<Language, LegalTranslations> = {
  es: {
    nav: {
        home: "Inicio",
        products: "Productos",
        services: "Servicios",
        contact: "Contacto",
      },
    title: "Aviso Legal",
    content: `
    <h1>Aviso legal</h1>

    <p>El acceso a la web www.abauntzsoftware.com es libre y sin restricciones, si bien la navegación y uso de estas páginas le otorga la condición de USUARIO, sometiéndose a las presentes CONDICIONES DE USO.</p>

    <h2>Datos identificativos:</h2>

    <p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se exponen los siguientes datos:</p>

    <p>El titular de esta web es Lorenzo Eizmendi Apellaniz, con domicilio en C/ La Asunción 41-A. 31797 Arraitz, Ultzama (Navarra), con CIF 15962011-B (en adelante, ABAUNTZ S.), cuyo correo electrónico de contacto es info@abauntzsoftware.com y teléfono de contacto seis-siete-siete, cuarenta y cinco, treinta y cuatro, treinta.</p>

    <h2>Propiedad Intelectual:</h2>

    <p>Los contenidos de esta web, incluyendo, entre otros, imágenes, logotipos, gráficos, animaciones, textos o aplicaciones informáticas, cualesquiera que sea su formato, lenguaje de programación y forma de representación, así como el nombre de dominio www.abauntzsoftware.com son propiedad de ABAUNTZ S. (con la excepción de las imágenes de marcas comerciales, con las cuales trabajamos habitualmente como partners, ofreciendo sus productos y/o servicios) y están protegidos por las leyes y tratados internacionales en materia de propiedad intelectual y, en su caso, industrial, así como por la normativa reguladora de los nombres de dominio.</p>

    <p>Todos los derechos derivados de la propiedad intelectual están expresamente reservados por ABAUNTZ S. El usuario, única y exclusivamente, puede utilizar el material que aparezca en este sitio web para su uso personal y privado, quedando prohibido su uso con fines comerciales o para incurrir en actividades ilícitas.</p>

    <p>ABAUNTZ S. velará por el cumplimiento de las anteriores condiciones como por la debida utilización de los contenidos presentados en su página web, ejercitando todas las acciones civiles y penales que le correspondan en el caso de infracción o incumplimiento de estos derechos por parte del usuario.</p>

    <h2>Privacidad y Protección de Datos:</h2>

    <p>ABAUNTZ S. no utiliza cookies que se queden almacenadas en el ordenador. Las cookies son pequeños archivos que nuestro ordenador envía al suyo, pero que no nos proporcionan información ni sobre su nombre, ni sobre cualquier dato de carácter personal suyo. Al navegar por estas páginas, de forma automática usted facilita al servidor de la web información relativa a su dirección IP (identificador único para la transmisión de paquetes entre ordenadores conectados a Internet), fecha y hora de acceso, el hipervínculo que le ha reenviado a éstas, su sistema operativo y el navegador utilizado. Sin perjuicio de que la Agencia Española de Protección de Datos (en adelante, APD) considera la IP como dato de carácter personal, ABAUNTZ S. no puede obtener por si sola, ni tiene intención de hacerlo a menos que se le cause algún perjuicio, información alguna acerca del titular de la conexión a Internet a la que corresponde. Estos datos serán guardados y utilizados únicamente para el control y realización de estadísticas de acceso y visitas a la web, y en ningún caso serán comunicados o cedidos a terceros.</p>

    <p>En caso de que Ud. establezca algún tipo de comunicación con ABAUNTZ S. ya sea por teléfono, correo ordinario o electrónico, o en el formulario de contacto, sus datos serán guardados e incluidos en un fichero propiedad de ABAUNTZ S., con la finalidad de responder a su consulta, sugerencia o queja, informar o prestar el servicio solicitado. Fuera de los casos legalmente establecidos, sus datos no serán comunicados ni cedidos a terceros sin su consentimiento expreso.</p>

    <p>Tiene Ud. derecho a acceder a dicho fichero para consultar sus datos, rectificarlos o cancelarlos, así como a oponerse a todo tratamiento respecto de los mismos, con las excepciones y límites establecidos en la legislación aplicable. En caso de que desee ejercer dichos derechos, dirija una solicitud firmada a la atención de Lorenzo Eizmendi Apellaniz (Abauntz Software): C/ La Asunción 41-A. 31797 Arraitz, Ultzama (Navarra), acompañando fotocopia de su D.N.I. o documento equivalente.</p>

    <h2>Limitación de Responsabilidad:</h2>

    <p>Los contenidos de este sitio web se ofrecen con una finalidad comercial, informativa y divulgativa. No constituyen ni sustituyen un asesoramiento profesional, por lo que ABAUNTZ S. se exime de cualquier responsabilidad, directa o indirecta, que pudiera derivarse del uso o aplicación de la información de esta web fuera de sus propósitos.</p>

    <p>Los enlaces (hipervínculos) o contenidos de terceros que aparecen en esta web se facilitan con la finalidad de ampliar información sobre productos y/o servicios asociados a nuestra empresa y también como servicio de información de interés. Su inclusión no implica la aceptación de dichos contenidos, ni la asociación de (empresa) con los responsables de dichas páginas web, por lo que rechaza toda responsabilidad en relación con los mismos, así como por los daños que pudieran causarse por cualquier motivo en su sistema informático (equipo y aplicaciones), documentos o ficheros. El Titular sólo podrá ser responsable por dichos contenidos conforme a lo establecido en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, en caso de que, habiendo tenido conocimiento efectivo de su ilicitud o de que lesiona los bienes o intereses de un tercero, no suprima o inutilice el enlace a los mismos.</p>

    <p>ABAUNTZ S. no garantiza la fiabilidad, disponibilidad o continuidad de este sitio web ni de sus contenidos por motivos técnicos, de seguridad, control o mantenimiento del servicio, por fallos debidos al servidor que aloja los contenidos o de otros intermediarios o proveedores, por ataques contra el sistema informático, ni por cualesquiera otros motivos que se deriven de causas que escapen a su control, por lo que se exime de cualquier responsabilidad, directa o indirecta, por los mismos.</p>

    <p>ABAUNTZ S. no se hace responsable de los fallos, errores o daños, directos o indirectos, que puedan causarse al sistema informático del usuario o a los ficheros o documentos almacenados en el mismo, que sean causados o se deriven de la capacidad o calidad de su sistema informático o de la presencia de un virus o cualquier otra aplicación informática dañina en el ordenador que sea utilizado para la conexión a los contenidos de la web, de la calidad de su conexión o acceso a Internet, por un mal funcionamiento de su navegador, o por el uso de aplicaciones informáticas cuyas versiones no estén actualizadas o no se obtenga la correspondiente licencia de usuario.</p>

    <h2>Aspectos generales:</h2>

    <p>ABAUNTZ S. se compromete a través de este medio a NO REALIZAR PUBLICIDAD ENGAÑOSA. A estos efectos, por lo tanto, no serán considerados como publicidad engañosa los errores formales o numéricos que puedan encontrarse a lo largo del contenido de las distintas secciones del Site producidos como consecuencia de un mantenimiento y/o actualización incompleta o defectuosa de la información contenida es estas secciones. ABAUNTZ S., como consecuencia de lo dispuesto en este apartado, se compromete a corregirlo tan pronto como tenga conocimiento de dichos errores.</p>

    <p>ABAUNTZ S. se compromete a NO REMITIR COMUNICACIONES COMERCIALES SIN IDENTIFICARLAS COMO TALES, conforme a lo dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y de comercio electrónico. A estos efectos no será considerado como comunicación comercial toda la información que se envíe A LOS CLIENTES de ABAUNTZ S. siempre que tenga por finalidad el mantenimiento de la relación contractual existente entre cliente y ABAUNTZ S., así como el desempeño de las tareas de información, formación y otras actividades propias del servicio que el cliente tiene contratado con la empresa.</p>

    <p>ABAUNTZ S. no se hace responsable del incumplimiento de cualquier norma aplicable en que pueda incurrir el usuario en su acceso al sitio web el presente sitio web y/o en el uso de las informaciones contenidas en el mismo.</p>

    <h2>Política de Cookies</h2>
    <p>En www.abauntzsoftware.com utilizamos diversas cookies con la intención de analizar y mejorar la experiencia de navegación de nuestros usuarios. Ver información ampliada sobre qué son exactamente las cookies y sobre nuestra política de cookies.</p>

    <h2>Modificaciones y Actualizaciones:</h2>

    <p>ABAUNTZ S. se reserva la facultad de efectuar, en cualquier momento y sin necesidad de previo aviso, modificaciones y actualizaciones de la información contenida en la web, de la configuración, disponibilidad y presentación de ésta, así como de las presentes Condiciones de Uso.</p>

    <h2>Leyes aplicables y jurisdicción:</h2>

    <p>Las presentes condiciones se regirán por las leyes españolas. En el supuesto de que se produzca cualquier discrepancia o controversia, con motivo de la interpretación o aplicación de las presentes condiciones, o bien que tengan relación con el uso del Sitio web, ABAUNTZ S. y el USUARIO, acuerdan, renunciando a su fuero propio si lo tuviesen, resolverla definitivamente, mediante Arbitraje de Derecho, que se celebrará en la ciudad de Pamplona, conforme a la Ley de Arbitraje de 5 de Diciembre de 1988.</p>

    <p>Ambas partes se comprometen a aceptar y cumplir el laudo arbitral y, de resultar precisa la formalización o ejecución judicial del laudo, o en el supuesto de que el arbitraje no se llevara a efecto, por mutuo acuerdo de las partes, o bien fuera declarado nulo, ambas partes, con renuncia a su propio fuero, si lo tuviesen, se someten a los Juzgados y Tribunales, competentes en el domicilio de ABAUNTZ S.</p>

    <p>Arraitz, 1 de Octubre de 2013.</p>
    <p>© Abauntz Software. 2013.</p>
    `
  },
  eu: {
    nav: {
        home: "Hasiera",
        products: "Produktuak",
        services: "Zerbitzuak",
        contact: "Kontaktua",
      },   
    title: "Lege Oharra",
    content: `
    <h1>Lege Oharra</h1>

    <p>www.abauntzsoftware.com webgunera sartzea librea eta murrizketarik gabekoa da, baina orri hauetan nabigatzeak eta erabiltzeak ERABILTZAILE izaera ematen dizu, ERABILERA BALDINTZA hauek onartuz.</p>

    <h2>Identifikazio datuak:</h2>

    <p>Informazioaren Gizartearen Zerbitzuei eta Merkataritza Elektronikoari buruzko uztailaren 11ko 34/2002 Legearen 10. artikuluan jasotako informazio betebeharra betez, honako datu hauek azaltzen dira:</p>

    <p>Web honen titularra Lorenzo Eizmendi Apellaniz da, helbidea C/ La Asunción 41-A. 31797 Arraitz, Ultzama (Nafarroa), IFZ 15962011-B (aurrerantzean, ABAUNTZ S.), harremanetarako helbide elektronikoa info@abauntzsoftware.com eta harremanetarako telefonoa sei zazpi zazpi, lau bost, hiru lau, hiru zero.</p>

    <h2>Jabetza Intelektuala:</h2>

    <p>Web honetako edukiak, besteak beste, irudiak, logotipoak, grafikoak, animazioak, testuak edo aplikazio informatikoak, edozein formatu, programazio-hizkuntza eta irudikapen-modu izanda ere, baita www.abauntzsoftware.com domeinua ere, ABAUNTZ S.-ren jabetzakoak dira (ohiko partner gisa lan egiten dugun marka komertzialen irudiak izan ezik, haien produktuak eta/edo zerbitzuak eskainiz) eta jabetza intelektualari buruzko nazioarteko lege eta itunek babesten dituzte, eta, hala badagokio, industrialak, baita domeinu-izenen araudiak ere.</p>

    <p>Jabetza intelektualetik eratorritako eskubide guztiak berariaz ABAUNTZ S.-k gordetzen ditu. Erabiltzaileak, soil-soilik, webgune honetan agertzen den materiala erabilera pertsonal eta pribaturako erabil dezake, debekatuta dagoelarik merkataritza-helburuetarako edo jarduera ilegaletan erabiltzea.</p>

    <p>ABAUNTZ S.-k aurreko baldintzak betetzeaz eta bere webgunean aurkeztutako edukien erabilera egokiaz arduratuko da, erabiltzaileak eskubide horiek urratuz gero edo betetzen ez baditu, dagozkion akzio zibil eta penal guztiak gauzatuz.</p>

    <h2>Pribatutasuna eta Datuen Babesa:</h2>

    <p>ABAUNTZ S.-k ez du ordenagailuan gordetzen diren cookierik erabiltzen. Cookieak gure ordenagailuak zureari bidaltzen dizkion fitxategi txikiak dira, baina ez digute zure izenari edo zure izaera pertsonaleko beste edozein daturi buruzko informaziorik ematen. Orri hauetan nabigatzerakoan, automatikoki,  webgunearen zerbitzariari informazioa ematen diozu zure IP helbideari buruz (Internetera konektatutako ordenagailuen artean paketeak transmititzeko identifikatzaile bakarra), sarbide-data eta -orduari buruz, birbidalitako estekari buruz, zure sistema eragileari eta erabilitako nabigatzaileari buruz. Datuak Babesteko Espainiako Agentziak (aurrerantzean, DBE) IP helbidea datu pertsonaltzat jotzen duen arren, ABAUNTZ S.-k ezin du berez lortu, eta ez du asmorik, kalterik eragiten ez bazaio behintzat, dagokion Interneteko konexioaren titularrari buruzko informaziorik. Datu hauek webgunera sarbidea eta bisitak kontrolatzeko eta estatistikak egiteko soilik gordeko eta erabiliko dira, eta inola ere ez zaizkie hirugarrenei jakinaraziko edo lagako.</p>

    <p>ABAUNTZ S.-rekin edozein komunikazio mota ezartzen baduzu, telefonoz, posta arruntez edo elektronikoz, edo harremanetarako inprimakian, zure datuak gorde egingo dira eta ABAUNTZ S.-ren jabetzako fitxategi batean sartuko dira, zure kontsulta, iradokizun edo kexari erantzuteko, informatzeko edo eskatutako zerbitzua emateko helburuarekin. Legez ezarritako kasuetan izan ezik, zure datuak ez zaizkie hirugarrenei jakinaraziko edo lagako zure berariazko baimenik gabe.</p>

    <p>Eskubidea duzu fitxategi horretara sartzeko zure datuak kontsultatzeko, zuzentzeko edo ezeztatzeko, baita horien tratamenduari uko egiteko ere, aplikagarria den legerian ezarritako salbuespen eta mugekin. Eskubide horiek baliatu nahi badituzu, bidali eskaera sinatua Lorenzo Eizmendi Apellanizi (Abauntz Software): C/ La Asunción 41-A. 31797 Arraitz, Ultzama (Nafarroa), zure NANaren edo agiri baliokidearen fotokopia erantsiz.</p>

    <h2>Erantzukizunaren Mugaketa:</h2>

    <p>Webgune honetako edukiak helburu komertzial, informatibo eta dibulgatiboarekin eskaintzen dira. Ez dute aholkularitza profesionalik osatzen edo ordezkatzen, beraz, ABAUNTZ S.-k ez du bere gain hartzen webgune honetako informazioaren erabilera edo aplikaziotik erator daitekeen erantzukizun zuzen edo zeharkakorik, bere helburuetatik kanpo.</p>

    <p>Webgune honetan agertzen diren hirugarrenen estekak (hiperestekak) edo edukiak gure enpresarekin lotutako produktu eta/edo zerbitzuei buruzko informazioa zabaltzeko helburuarekin eta interes-informazio zerbitzu gisa eskaintzen dira. Haien barneratzeak ez du esan nahi eduki horiek onartzen direnik, ezta (enpresa) webgune horien arduradunekin lotzen denik ere, beraz, horiekin lotutako erantzukizun oro ukatzen du, baita zure sistema informatikoan (ekipoa eta aplikazioak), dokumentuetan edo fitxategietan edozein arrazoirengatik eragin daitezkeen kalteengatik ere. Titularra eduki horiengatik soilik izango da erantzule Informazioaren Gizartearen Zerbitzuei eta Merkataritza Elektronikoari buruzko uztailaren 11ko 34/2002 Legean ezarritakoaren arabera, baldin eta, haien legez kanpokotasunaren edo hirugarren baten ondasun edo interesak kaltetzen dituztela jakinda, ez baditu ezabatzen edo desgaitzen horietarako estekak.</p>

    <p>ABAUNTZ S.-k ez du bermatzen webgune honen edo bere edukien fidagarritasuna, erabilgarritasuna edo jarraitutasuna arrazoi teknikoengatik, segurtasunagatik, zerbitzuaren kontrolagatik edo mantentze-lanagatik, edukiak ostatatzen dituen zerbitzariaren edo beste bitartekari edo hornitzaileen hutsegiteengatik, sistema informatikoaren aurkako erasoengatik, edo bere kontroletik kanpo dauden arrazoiengatik, beraz, horiengatik erantzukizun zuzen edo zeharkako oro saihesten du.</p>

    <p>ABAUNTZ S. ez da erabiltzailearen sistema informatikoan edo bertan gordetako fitxategi edo dokumentuetan eragin daitezkeen hutsegite, akats edo kalte zuzen edo zeharkakoez arduratzen, baldin eta horiek erabiltzailearen sistema informatikoaren gaitasun edo kalitateak eragindakoak badira, edo webguneko edukietara konektatzeko erabilitako ordenagailuan birus edo beste edozein aplikazio informatiko kaltegarri egoteagatik, Interneteko konexioaren edo sarbidearen kalitateagatik, nabigatzailearen funtzionamendu txarragatik, edo bertsio eguneratu gabeko aplikazio informatikoak erabiltzeagatik edo erabiltzaile-lizentzia egokia ez izateagatik eragindakoak badira.</p>

    <h2>Alderdi orokorrak:</h2>

    <p>ABAUNTZ S.-k konpromisoa hartzen du medio honen bidez PUBLIZITATE ENGAINAGARRIRIK EZ EGITEKO. Ondorioz, ez dira publizitate engainagarritzat hartuko Webgunearen atal desberdinetako edukian zehar aurkitu daitezkeen akats formal edo zenbakizkoak, atal hauetan dagoen informazioaren mantentze eta/edo eguneratze osatugabe edo akastun baten ondorioz sortutakoak. ABAUNTZ S.-k, atal honetan xedatutakoaren ondorioz, konpromisoa hartzen du akats horien berri izan bezain laster zuzentzeko.</p>

    <p>ABAUNTZ S.-k konpromisoa hartzen du MERKATARITZA-KOMUNIKAZIOAK HALAKOTZAT IDENTIFIKATU GABE EZ BIDALTZEKO, Informazioaren Gizartearen Zerbitzuei eta Merkataritza Elektronikoari buruzko 34/2002 Legean xedatutakoaren arabera. Ondorioz, ez da merkataritza-komunikaziotzat hartuko ABAUNTZ S.-ren BEZEROEI bidaltzen zaien informazio guztia, baldin eta bezeroaren eta ABAUNTZ S.-ren artean dagoen kontratu-harremana mantentzea badu helburu, baita bezeroak enpresarekin kontratatuta duen zerbitzuaren berezko informazio, prestakuntza eta beste jarduera batzuk burutzea ere.</p>

    <p>ABAUNTZ S. ez da erabiltzaileak webgune honetara sartzean eta/edo bertan dauden informazioak erabiltzean aplikagarria den edozein arau ez betetzearen erantzule egiten.</p>

    <h2>Cookie Politika</h2>
    <p>www.abauntzsoftware.com webgunean hainbat cookie erabiltzen ditugu gure erabiltzaileen nabigazio-esperientzia aztertu eta hobetzeko asmoz. Ikusi informazio zabaldua cookieak zehazki zer diren eta gure cookie politikari buruz.</p>

    <h2>Aldaketak eta Eguneratzeak:</h2>

    <p>ABAUNTZ S.-k eskubidea gordetzen du, edozein unetan eta aurretiazko abisurik gabe, webgunean dagoen informazioaren, honen konfigurazio, erabilgarritasun eta aurkezpenaren, baita Erabilera Baldintza hauen aldaketak eta eguneratzeak egiteko.</p>

    <h2>Lege aplikagarriak eta jurisdikzioa:</h2>

    <p>Baldintza hauek Espainiako legeek arautuko dituzte. Baldintza hauen interpretazio edo aplikazioaren ondorioz, edo Webgunearen erabilerarekin lotuta, edozein desadostasun edo eztabaida sortzen bada, ABAUNTZ S. eta ERABILTZAILEAK, beren foru propioari uko eginez izango balute, adosten dute behin betiko ebaztea Zuzenbideko Arbitrajearen bidez, Iruñean egingo dena, 1988ko abenduaren 5eko Arbitraje Legearen arabera.</p>

    <p>Bi alderdiek konpromisoa hartzen dute arbitraje-laudoa onartu eta betetzeko, eta laudoaren formalizazio edo exekuzio judiziala beharrezkoa izanez gero, edo arbitrajea ez balitz burutuko alderdien arteko adostasunez, edo baliogabetzat joko balitz, bi alderdiek, beren foru propioari uko eginez izango balute, ABAUNTZ S.-ren helbidean eskumena duten Epaitegi eta Auzitegien mende jartzen dira.</p>

    <p>Arraitz, 2013ko urriaren 1a.</p>
    <p>© Abauntz Software. 2013.</p>
    `
  }
};