export default function AboutSection() {
  return (
    <section id="about">
      <div className="lbl" data-n="01">À propos de nous</div>
      <h2><em>Qui</em> sommes-<br />nous ?</h2>
      <div className="about-grid">
        <div className="about-sticky rv">
          <p style={{ fontSize: "13px", color: "var(--warm)", lineHeight: "1.85" }}>
            Un partenaire de confiance pour accélérer la croissance de votre
            entreprise par la stratégie, la data et la technologie.
          </p>
          <div className="about-quote">
            « Les données sont des actifs. Nous vous aidons à en extraire toute la valeur. »
          </div>
        </div>
        <div className="about-paras">
          <div className="para rv">
            <p>
              <b>Ahonzo Consulting Experts (ACE)</b> est un cabinet de conseil en
              stratégie et analytique business, au service des petites comme des
              grandes entreprises, dans tous les secteurs d&apos;activité.
            </p>
          </div>
          <div className="para rv d1">
            <p>
              À l&apos;ère du numérique,{" "}
              <b>les volumes de données croissent de façon exponentielle</b>.
              Ces données constituent des actifs stratégiques au même titre que
              n&apos;importe quel autre actif. Notre rôle : vous aider à les
              valoriser pleinement.
            </p>
          </div>
          <div className="para rv d2">
            <p>
              Nous concevons des stratégies sur mesure pour{" "}
              <b>générer des bénéfices économiques concrets</b> et garantir la
              satisfaction totale de vos clients et actionnaires. De la vision à
              l&apos;exécution, ACE est à vos côtés.
            </p>
          </div>
          <div className="stats-row rv d3">
            <div className="sc">
              <div className="scn">11<em>+</em></div>
              <div className="scl">Consultants</div>
            </div>
            <div className="sc">
              <div className="scn"><em>18</em></div>
              <div className="scl">Domaines</div>
            </div>
            <div className="sc">
              <div className="scn">360<em>°</em></div>
              <div className="scl">Vision globale</div>
            </div>
            <div className="sc">
              <div className="scn"><em>∞</em></div>
              <div className="scl">Potentiel data</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
