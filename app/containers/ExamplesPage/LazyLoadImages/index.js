import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import LazyLoad from 'react-lazyload';

import css from './styles.css';

class LazyLoadImages extends React.Component {
  render() {
    return (
      <div className="container">
        <Helmet title="Icons using Font Awesome" />
        <div className="m-t-2 m-b-2">
          <Link to="/examples">← Go back</Link>
        </div>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">app</li>
          <li className="breadcrumb-item">containers</li>
          <li className="breadcrumb-item">ExamplesPage</li>
          <li className="breadcrumb-item">LazyLoadImages</li>
          <li className="breadcrumb-item">index.js</li>
        </ol>
        <h5>Dependencies used in this example</h5>
        <ul>
          <li><a href="https://github.com/jasonslyvia/react-lazyload">react-lazyload</a></li>
        </ul>
        <h5>↓ Scroll down</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat id maxime omnis sit unde
        vel. Asperiores assumenda at, earum illo libero praesentium veritatis! Ad animi beatae
        enim eos excepturi itaque magni non nostrum officia, officiis perferendis quo reiciendis
        rem, repellat saepe tenetur vel. Architecto dolores, est illo ipsam, libero minus modi nam
        nihil odit quis quo reprehenderit saepe sed sunt temporibus. Aperiam delectus ducimus
        inventore itaque labore magnam natus nobis odio officia officiis, saepe suscipit totam
        voluptas. A adipisci aliquam amet culpa delectus dignissimos illo in laudantium modi
        nesciunt non perferendis, perspiciatis porro qui quos, repudiandae, suscipit voluptatem
        voluptates voluptatum!</p>
        <p>Aliquid animi beatae consequatur cum delectus dolor dolorem
        eaque ex excepturi explicabo facere fuga inventore ipsam laboriosam minima modi molestiae
        mollitia nam nesciunt nisi numquam optio perferendis praesentium provident quae, quibusdam
        repellat sed similique tenetur ullam ut veniam veritatis voluptate! Accusantium ad adipisci
        aliquid blanditiis consequuntur cupiditate delectus deserunt ea eaque eius et eveniet
        excepturi exercitationem fuga harum ipsum labore magnam magni, maiores modi molestiae
        obcaecati officiis perspiciatis possimus reiciendis sapiente sint vel velit vero voluptatum.
        Aliquid assumenda cumque deserunt dignissimos doloribus dolorum eligendi enim eos, explicabo
        harum impedit ipsum nesciunt nobis nulla obcaecati officia quisquam repellat repellendus
        sequi voluptas.</p>
        <p>Consequuntur delectus esse nesciunt quae repudiandae similique
        voluptatem voluptatum. Adipisci aliquam aspernatur, consequatur cum eligendi, exercitationem
        facilis fuga id, iste magnam nemo quis quod rem repudiandae tempora? Accusantium ad amet
        architecto assumenda atque autem consequuntur cupiditate deleniti, dolorum ducimus earum
        eligendi ex excepturi exercitationem facere facilis harum illo iste iusto labore laboriosam
        laudantium modi nobis odit omnis optio placeat possimus repudiandae sequi temporibus velit
        veritatis voluptas voluptatem. Asperiores aspernatur consequuntur earum nesciunt nihil odit,
        quis quo sequi! A at cum fugiat harum natus obcaecati odio quo saepe, temporibus? Amet
        dolore, exercitationem incidunt non nostrum perspiciatis quas repellendus. Corporis, odio
        pariatur.</p>
        <p>A asperiores at aut consequatur consequuntur deleniti dolor ducimus earum
        exercitationem facere fuga id iste iure nesciunt obcaecati odit possimus, quam, quas
        quibusdam quod recusandae reprehenderit saepe sapiente, tenetur veniam. Facilis illum
        impedit incidunt neque nisi nostrum, officiis optio perspiciatis placeat quis reprehenderit
        sint velit. Adipisci deserunt error, et eum, incidunt iste itaque iusto libero maxime nihil,
        perspiciatis quam quo voluptatum. Earum in neque temporibus. Architecto asperiores culpa
        cumque debitis, distinctio ea eveniet facilis incidunt laboriosam maiores non omnis optio
        quam quis quod, soluta, tempora tempore voluptate. Accusantium eveniet impedit laborum neque
        non numquam odio, quam similique veritatis vitae voluptatum?</p>
        <div className="text-xs-center m-t-2 m-b-2">
          <LazyLoad height={460}>
            <img className={css.image} src={require('./image1.jpg')} role="presentation" />
          </LazyLoad>
        </div>
        <p>Ab accusamus alias
        aspernatur at aut autem beatae commodi corporis culpa dolor dolorem doloribus eligendi
        facere, id impedit itaque iure labore libero maiores maxime minus molestiae molestias,
        obcaecati officia omnis perspiciatis porro quia quidem quisquam reiciendis sequi similique
        suscipit tempora tenetur totam vel voluptates? Animi aperiam blanditiis consequatur,
        deleniti eum explicabo ipsum, iure laudantium maxime molestias mollitia nisi nobis, porro
        provident quam quasi quibusdam rem temporibus veniam voluptate. Amet consequatur cum dolor
        dolore dolorem est et expedita facere fugiat iste laboriosam magnam maiores maxime nesciunt,
        nihil, non nulla numquam porro quae quaerat repudiandae, saepe tempora temporibus totam
        veritatis voluptas voluptatibus!</p>
        <p>Animi eveniet libero nisi odit sint totam vel!
        Consequuntur in ipsum nesciunt perspiciatis vero. A accusantium consectetur consequuntur
        deserunt ea explicabo facere ipsa ipsam officia perspiciatis quae, quibusdam, saepe,
        suscipit vitae voluptatum. Accusantium, distinctio eligendi est eum illum magnam minus
        officia quia ratione sunt vel voluptas voluptatum! Accusamus alias atque consequatur, dolore
        doloremque doloribus ducimus eos id nam odio officiis placeat possimus quae quasi qui,
        recusandae repellat saepe totam veritatis voluptate. Asperiores, perspiciatis voluptate? Ab
        aliquam beatae cum dolore eos esse et exercitationem expedita iste nisi, non odit veritatis
        vitae voluptas voluptate. Adipisci aliquam aspernatur cumque earum molestiae quam
        tempore?</p>
        <p>Autem cumque esse fuga minus mollitia qui repellendus! Atque dicta, doloribus
        ea in iusto laudantium omnis quam sed. Animi dicta ea eaque explicabo incidunt ipsa itaque
        laborum nisi omnis vitae! Ad aliquam amet aperiam atque autem, commodi dolorem earum
        eligendi enim est et ex facere harum ipsa itaque magni molestiae nihil non obcaecati odio
        praesentium quia quis rem sint suscipit tempora vitae voluptate! Ad aliquam beatae deleniti
        enim error et eum expedita iure, libero magnam magni maxime molestias neque nihil officia
        optio placeat quaerat quibusdam recusandae reprehenderit, sapiente sed sequi veniam? Dolore
        fugit id impedit, ipsum porro reiciendis rem repellat?</p>
        <p>Architecto atque consectetur
        eius ratione veniam! Accusantium aliquid, asperiores aspernatur assumenda delectus ducimus
        eius eos et, explicabo illo itaque quo quod reiciendis repellat sint. Esse harum hic
        laudantium nam nulla reprehenderit similique. A alias amet hic illum odio odit praesentium
        rem soluta? Ab assumenda blanditiis deleniti dicta dolore eaque, explicabo facilis minus
        modi nisi nulla numquam quas quasi, repellendus reprehenderit sapiente voluptatem
        voluptates! Alias autem, commodi debitis dignissimos doloremque, ex exercitationem expedita
        facere illo laudantium minima quae quisquam sint ut vel veritatis voluptas! Ad animi
        deleniti earum excepturi laboriosam maiores minima modi mollitia, nesciunt nisi non quia
        quisquam, suscipit voluptatum?</p>
        <p>Ad ipsum laboriosam, magni nulla ratione rem velit.
        Culpa delectus dignissimos enim facilis in inventore laborum minima nemo neque non
        obcaecati, odit praesentium reprehenderit rerum saepe. Assumenda blanditiis, cumque deserunt
        dolores doloribus, dolorum eos esse laborum mollitia nemo neque officiis quisquam
        reprehenderit tenetur vel. Architecto autem cumque, explicabo minima necessitatibus qui.
        Accusantium consequuntur, dicta earum eligendi, eum facilis fuga, porro possimus praesentium
        quae repellat sint. Ab atque deleniti enim iure laborum quod sit unde? Aliquam asperiores,
        consequuntur cum deleniti distinctio ducimus eaque facilis itaque magnam minus nobis non
        obcaecati odio provident recusandae reiciendis rerum sint soluta veniam voluptatibus.
        Laboriosam, neque.</p>
        <p>Culpa cupiditate illum iure obcaecati quaerat saepe unde! Deleniti
        earum excepturi iusto nisi omnis repudiandae similique, sit. Doloribus, maiores, porro?
        Asperiores debitis dicta est magni officiis provident! Accusamus aliquam aperiam illo ipsum
        libero omnis quas quos rerum voluptatem voluptates. Eos fuga ipsa, laudantium modi molestiae
        quae quasi quos soluta voluptatem voluptatum. Aperiam autem dicta dignissimos, dolore earum
        nihil nisi porro quo ratione reiciendis sint sunt velit. Aliquam aliquid aspernatur
        blanditiis dicta ea enim error est et facere, in iste neque nesciunt odio officiis quia
        quisquam quos reiciendis repudiandae tenetur voluptatibus! Adipisci dolore doloribus et
        facere possimus rem saepe veritatis voluptate.</p>
        <p>Ad aliquid aspernatur distinctio enim
        laboriosam libero minus nostrum quae quaerat rem totam ullam, voluptatibus. Amet beatae cum
        dolorum facere fuga ipsam laboriosam libero molestias nostrum quaerat, quia quidem rem, sed
        soluta totam voluptas, voluptatem! Ad adipisci, amet aperiam at aut beatae distinctio et
        exercitationem id ipsam ipsum itaque labore laudantium magni, maiores mollitia nam natus
        nobis non nostrum obcaecati officia officiis pariatur quae quaerat qui quidem sint sunt
        temporibus ullam veritatis voluptate voluptatem, voluptates. A ab amet autem doloribus
        dolorum magni, minus nihil quod tenetur voluptas. Architecto consequuntur cum id non? Ad hic
        maiores minus, natus qui soluta tenetur.</p>
        <p>Aperiam facere laborum minima temporibus!
        Animi autem deserunt earum esse eum eveniet, expedita harum impedit in iste libero maxime
        obcaecati omnis optio repellat repudiandae sed similique sit tempora, voluptate? Adipisci
        commodi distinctio dolores eaque explicabo hic in iste laudantium magnam molestiae molestias
        mollitia nulla pariatur porro provident repudiandae saepe, sequi soluta suscipit voluptatem?
        Accusamus architecto autem dolor doloremque nobis nulla odit perferendis perspiciatis porro
        reprehenderit. Architecto consequatur cumque deleniti dolore dolorem error ipsum nemo nihil
        nobis nostrum numquam odit, optio quam repellendus sapiente voluptate voluptatum. Amet animi
        atque consectetur earum eum, exercitationem iste natus, neque, nobis omnis quos similique
        vel.</p>
        <div className="text-xs-center m-t-2 m-b-2">
          <LazyLoad height={460}>
            <img className={css.image} src={require('./image2.jpg')} role="presentation" />
          </LazyLoad>
        </div>
        <p>Blanditiis distinctio, laborum possimus quas repudiandae temporibus? A aliquid
        deleniti dolorem dolorum esse ex excepturi hic ipsam laudantium libero magnam maiores minima
        nisi nostrum nulla odio perspiciatis placeat quaerat quasi quod rem suscipit tempora
        temporibus veniam veritatis vero, vitae? Ab adipisci asperiores consequuntur dolor eligendi
        ipsam ipsum labore, nam nesciunt odio officiis perferendis perspiciatis sit soluta ut vitae
        voluptates! Accusamus aperiam aspernatur deserunt, dolore, doloremque error laboriosam nihil
        nulla possimus quae quis unde! Amet culpa doloremque in nemo perferendis possimus reiciendis
        repellat temporibus tenetur voluptatibus. Amet at cum deleniti facere fugit ipsum iusto
        magni modi porro quod repudiandae temporibus, voluptatum!</p>
        <p>Nam quaerat similique sint
        ullam voluptates! Aliquid dolore eligendi explicabo illo in laudantium maxime officia, quod
        soluta vitae? Autem cupiditate dolorum libero nam quisquam sapiente sed sit voluptatibus. Ad
        architecto autem beatae consequuntur cumque eos fuga incidunt ipsam iusto laudantium
        mollitia necessitatibus obcaecati, quasi, quia repellat? Autem illum iure magnam officiis!
        Adipisci architecto, atque, aut consequuntur delectus excepturi explicabo hic incidunt iusto
        minima natus necessitatibus nobis odio pariatur perspiciatis provident recusandae
        repellendus sequi suscipit ut? A assumenda at autem dolores excepturi ipsam, ipsum magnam
        maiores mollitia neque obcaecati omnis, perferendis quam reiciendis sapiente suscipit
        veniam! At ea optio sunt totam.</p>
        <p>Mollitia provident quam qui, quidem quisquam voluptate
        voluptatum. Animi consectetur culpa, enim impedit itaque magnam, maxime natus perferendis
        quos repellat similique, totam. Ab ex id iste itaque labore laboriosam nesciunt, nisi
        officiis quisquam rem, repellat soluta? Deserunt dignissimos eligendi error et fugiat ipsa
        ipsum numquam optio, pariatur perferendis quasi quia quod, ratione reprehenderit, sit. Ab
        aperiam consequatur consequuntur dicta dolore est eveniet ex facere, ipsam iste itaque
        laudantium minima natus neque officiis porro qui, quod recusandae rem saepe soluta suscipit
        tempore vero. Aperiam consequatur dicta dolorem ducimus eligendi est expedita, laborum odit
        perspiciatis quae quasi qui quibusdam reiciendis ut vero?</p>
        <p>Accusantium animi architecto
        doloribus facere provident rem, sunt ullam! Adipisci alias aspernatur atque dignissimos
        dolores earum et, impedit inventore ipsa ipsam iusto minus molestias, nisi pariatur quia
        quibusdam quos soluta velit, voluptas voluptates. Accusantium cum error expedita inventore
        quis! Ad beatae corporis cupiditate debitis dolore earum et eveniet exercitationem fugiat
        ipsa iure iusto maxime molestias, non nostrum numquam odit placeat quia quis quo saepe sequi
        suscipit tempore ullam unde vel vitae voluptate? Excepturi inventore libero magnam magni
        quas, voluptas voluptatem. Alias aspernatur corporis est explicabo harum in incidunt nemo
        non odit possimus qui quisquam recusandae, reiciendis sequi tempore, totam, veniam!</p>
        <p>Ab
        assumenda ducimus ea eos eveniet exercitationem laudantium necessitatibus non odit optio
        pariatur, reiciendis sed, veritatis voluptatem voluptatum! Blanditiis consectetur, harum nam
        officia quia reprehenderit totam veritatis. Ad aliquid animi asperiores aut consequuntur
        culpa ea eligendi incidunt inventore ipsam labore maiores minus modi natus necessitatibus
        nobis quam quos, repellendus ut veniam veritatis vero voluptas voluptatem voluptates
        voluptatum. Architecto corporis esse eveniet iste laboriosam mollitia nam non optio, qui
        rerum sed soluta sunt tempora ut veniam! Accusantium alias architecto at commodi delectus
        dignissimos doloremque dolorum eos et eum, in molestiae nihil non obcaecati officia quam
        temporibus voluptates? Harum illum necessitatibus reiciendis?</p>
        <p>Ad ducimus earum
        expedita in iure minima numquam obcaecati officia, porro provident. A alias architecto at
        beatae blanditiis corporis delectus dignissimos dolorem ea enim eum excepturi facere minus
        mollitia natus nemo nobis pariatur qui reiciendis sapiente tempora tempore, ullam velit
        veniam voluptatem. Ad aperiam commodi hic itaque laborum repellat totam vero! A ab
        accusantium adipisci aliquam assumenda at blanditiis consectetur consequuntur cum
        cupiditate, debitis dolorem dolorum est explicabo fugit incidunt ipsum laborum magnam minus
        modi molestiae nesciunt nihil non nulla odio odit officiis omnis perferendis perspiciatis
        quia recusandae reiciendis sequi similique soluta ullam voluptate voluptatem. Debitis eius
        explicabo perspiciatis sint.</p>
        <p>Adipisci autem cupiditate exercitationem explicabo fugit
        illum necessitatibus quas quibusdam voluptatum? Aspernatur deleniti fugit itaque libero
        natus quo rerum sapiente similique voluptates voluptatum? Commodi consequuntur enim in nulla
        quia. Quae quas quasi totam voluptatibus. Ad aperiam aspernatur consequuntur, deleniti
        ducimus ea eius illo iste necessitatibus nisi nostrum odio, quam suscipit ullam ut. A ab
        animi aperiam at atque blanditiis commodi consectetur cumque dicta distinctio dolor ea eaque
        earum id incidunt ipsum iure iusto maiores minima necessitatibus nesciunt, odit officiis
        possimus quas quis quo recusandae reiciendis rerum saepe tempora totam ut veritatis
        voluptates. Dignissimos ipsum libero maiores numquam officiis omnis vel.</p>
        <div className="text-xs-center m-t-2 m-b-2">
          <LazyLoad height={460}>
            <img className={css.image} src={require('./image3.jpg')} role="presentation" />
          </LazyLoad>
        </div>
        <p>At in,
        numquam? A accusantium adipisci atque beatae blanditiis cum cumque doloribus eius, eos et
        expedita facilis, harum in ipsum magnam optio perferendis quasi quidem rem repellat tempora
        ullam vel velit vero vitae. Accusamus blanditiis dignissimos dolorem ex excepturi facilis
        fuga harum ipsa laboriosam laborum maxime, mollitia nobis praesentium quae quia quos
        sapiente sint, ullam veritatis voluptatibus. Cupiditate inventore nesciunt vel voluptas
        voluptate. Consectetur delectus dolore eligendi eum excepturi hic inventore laudantium,
        magni molestiae molestias nobis odio perspiciatis, placeat quis quos reprehenderit,
        voluptates? Accusamus beatae fuga ipsa nihil odio officiis optio perspiciatis quidem
        temporibus voluptatem. Dolorum incidunt placeat qui rerum?</p>
      </div>
    );
  }
}

export default LazyLoadImages;
