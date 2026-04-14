'use client';

import { useState, useEffect } from 'react';
import { siteData } from '@/data/siteData';
import { trackEvent } from '@/lib/analytics';
import './PricingSimulator.css';

export default function PricingSimulator() {
  const [step, setStep] = useState(1);
  const [eventType, setEventType] = useState<'weekend' | 'soiree' | null>(null);
  const [formula, setFormula] = useState<'digitale' | 'impression' | 'complete' | null>(null);
  const [needsDelivery, setNeedsDelivery] = useState<boolean | null>(null);
  const [distance, setDistance] = useState<'<20' | '20-40' | '40-60' | null>(null);
  const [extraPrints, setExtraPrints] = useState<'none' | '100' | '200' | null>(null);
  const [needsTemplate, setNeedsTemplate] = useState<boolean | null>(null);

  // Émettre pricing_simulator_complete quand on atteint l'étape 6
  useEffect(() => {
    if (step === 6) {
      trackEvent('pricing_simulator_complete', {
        event_type: eventType,
        formula,
      });
    }
  }, [step, eventType, formula]);

  const calculatePrice = () => {
    let basePrice = 0;
    let oldPrice = 0;
    let formulaName = '';
    let deliveryIncluded = false;

    // Prix de base selon type et formule
    if (eventType === 'weekend') {
      if (formula === 'digitale') {
        const plan = siteData.pricingWeekend[0];
        basePrice = parseInt(plan.price);

        formulaName = plan.name;
        deliveryIncluded = plan.includesDelivery || false;
      } else if (formula === 'impression') {
        const plan = siteData.pricingWeekend[1];
        basePrice = parseInt(plan.price);

        formulaName = plan.name;
        deliveryIncluded = plan.includesDelivery || false;
      } else if (formula === 'complete') {
        const plan = siteData.pricingWeekend[2];
        basePrice = parseInt(plan.price);

        formulaName = plan.name;
        deliveryIncluded = plan.includesDelivery || false;
      }
    } else if (eventType === 'soiree') {
      if (formula === 'digitale') {
        const plan = siteData.pricingSoiree[0];
        basePrice = parseInt(plan.price);

        formulaName = plan.name;
        deliveryIncluded = plan.includesDelivery || false;
      } else if (formula === 'impression') {
        const plan = siteData.pricingSoiree[1];
        basePrice = parseInt(plan.price);

        formulaName = plan.name;
        deliveryIncluded = plan.includesDelivery || false;
      } else if (formula === 'complete') {
        const plan = siteData.pricingSoiree[2];
        basePrice = parseInt(plan.price);

        formulaName = plan.name;
        deliveryIncluded = plan.includesDelivery || false;
      }
    }

    // Livraison
    if (needsDelivery && distance) {
      if (deliveryIncluded && distance === '<20') {
        // Livraison déjà incluse, pas de surcoût
      } else {
        if (distance === '<20') {
          basePrice += 39;
          oldPrice += 39;
        } else if (distance === '20-40') {
          basePrice += 45;
          oldPrice += 45;
        } else if (distance === '40-60') {
          basePrice += 60;
          oldPrice += 60;
        }
      }
    }

    // Impressions supplémentaires
    if (extraPrints === '100') {
      basePrice += 39;
      oldPrice += 39;
    } else if (extraPrints === '200') {
      basePrice += 60;
      oldPrice += 60;
    }

    // Template (sauf si formule complète qui l'inclut déjà)
    if (needsTemplate && formula !== 'complete') {
      basePrice += 10;
      oldPrice += 10;
    }

    return { basePrice, oldPrice, formulaName, deliveryIncluded };
  };

  const resetSimulator = () => {
    setStep(1);
    setEventType(null);
    setFormula(null);
    setNeedsDelivery(null);
    setDistance(null);
    setExtraPrints(null);
    setNeedsTemplate(null);
  };

  const result = step === 6 ? calculatePrice() : null;

  return (
    <div className="pricing-simulator">
      <div className="simulator-container">
        <div className="simulator-header">
          <h2>🧮 Simulateur de Tarif</h2>
          <p>Répondez à quelques questions pour connaître votre tarif personnalisé</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${(step / 6) * 100}%` }}></div>
          </div>
        </div>

        <div className="simulator-body">
          {/* ÉTAPE 1 : Type d'événement */}
          {step === 1 && (
            <div className="simulator-step">
              <h3>Quel type de location souhaitez-vous ?</h3>
              <div className="options-grid">
                <button
                  className={`option-btn ${eventType === 'weekend' ? 'active' : ''}`}
                  onClick={() => {
                    setEventType('weekend');
                    setStep(2);
                  }}
                >
                  <span className="option-icon">📅</span>
                  <strong>Weekend ou 48h</strong>
                  <small>Weekend ou 48h en semaine</small>
                </button>
                <button
                  className={`option-btn ${eventType === 'soiree' ? 'active' : ''}`}
                  onClick={() => {
                    setEventType('soiree');
                    setStep(2);
                  }}
                >
                  <span className="option-icon">🌙</span>
                  <strong>Soirée</strong>
                  <small>En semaine uniquement</small>
                </button>
              </div>
            </div>
          )}

          {/* ÉTAPE 2 : Formule */}
          {step === 2 && (
            <div className="simulator-step">
              <h3>Quelle formule vous intéresse ?</h3>
              <div className="options-grid">
                <button
                  className={`option-btn ${formula === 'digitale' ? 'active' : ''}`}
                  onClick={() => {
                    setFormula('digitale');
                    setStep(3);
                  }}
                >
                  <span className="option-icon">📱</span>
                  <strong>Digitale</strong>
                  <small>Photos en ligne uniquement</small>
                </button>
                <button
                  className={`option-btn ${formula === 'impression' ? 'active' : ''}`}
                  onClick={() => {
                    setFormula('impression');
                    setStep(3);
                  }}
                >
                  <span className="option-icon">🖨️</span>
                  <strong>Impression</strong>
                  <small>+ 200 impressions papier</small>
                </button>
                <button
                  className={`option-btn ${formula === 'complete' ? 'active' : ''}`}
                  onClick={() => {
                    setFormula('complete');
                    setStep(3);
                  }}
                >
                  <span className="option-icon">⭐</span>
                  <strong>Complète</strong>
                  <small>+ 400 impressions + livraison incluse</small>
                </button>
              </div>
              <button className="btn-back" onClick={() => setStep(1)}>← Retour</button>
            </div>
          )}

          {/* ÉTAPE 3 : Livraison */}
          {step === 3 && (
            <div className="simulator-step">
              <h3>Avez-vous besoin d'une livraison ?</h3>
              {formula === 'complete' && (
                <p className="info-text">✅ Livraison jusqu'à 20km incluse dans la formule Complète !</p>
              )}
              <div className="options-grid">
                <button
                  className={`option-btn ${needsDelivery === false ? 'active' : ''}`}
                  onClick={() => {
                    setNeedsDelivery(false);
                    setDistance(null);
                    setStep(4);
                  }}
                >
                  <span className="option-icon">🚗</span>
                  <strong>Retrait à Tours</strong>
                  <small>Gratuit</small>
                </button>
                <button
                  className={`option-btn ${needsDelivery === true ? 'active' : ''}`}
                  onClick={() => {
                    setNeedsDelivery(true);
                  }}
                >
                  <span className="option-icon">🚚</span>
                  <strong>Oui, livraison</strong>
                  <small>{formula === 'complete' ? "Incluse jusqu'à 20km" : 'Dès 39€'}</small>
                </button>
              </div>

              {needsDelivery === true && (
                <div className="sub-options">
                  <h4>Quelle est votre distance depuis Tours ?</h4>
                  <div className="options-grid">
                    <button
                      className={`option-btn small ${distance === '<20' ? 'active' : ''}`}
                      onClick={() => {
                        setDistance('<20');
                        setStep(4);
                      }}
                    >
                      <strong>Moins de 20km</strong>
                      <small>{formula === 'complete' ? 'Inclus !' : '+39€'}</small>
                    </button>
                    <button
                      className={`option-btn small ${distance === '20-40' ? 'active' : ''}`}
                      onClick={() => {
                        setDistance('20-40');
                        setStep(4);
                      }}
                    >
                      <strong>20 à 40km</strong>
                      <small>+45€</small>
                    </button>
                    <button
                      className={`option-btn small ${distance === '40-60' ? 'active' : ''}`}
                      onClick={() => {
                        setDistance('40-60');
                        setStep(4);
                      }}
                    >
                      <strong>Jusqu'à 60km</strong>
                      <small>+60€</small>
                    </button>
                  </div>
                </div>
              )}
              <button className="btn-back" onClick={() => setStep(2)}>← Retour</button>
            </div>
          )}

          {/* ÉTAPE 4 : Impressions supplémentaires */}
          {step === 4 && (
            <div className="simulator-step">
              <h3>Souhaitez-vous des impressions supplémentaires ?</h3>
              {formula === 'digitale' && (
                <p className="info-text">⚠️ Formule digitale : nécessite l'imprimante (passez à formule Impression)</p>
              )}
              <div className="options-grid">
                <button
                  className={`option-btn ${extraPrints === 'none' ? 'active' : ''}`}
                  onClick={() => {
                    setExtraPrints('none');
                    setStep(5);
                  }}
                >
                  <strong>Non merci</strong>
                  <small>Quantité de base suffisante</small>
                </button>
                {formula !== 'digitale' && (
                  <>
                    <button
                      className={`option-btn ${extraPrints === '100' ? 'active' : ''}`}
                      onClick={() => {
                        setExtraPrints('100');
                        setStep(5);
                      }}
                    >
                      <strong>+100 impressions</strong>
                      <small>+39€</small>
                    </button>
                    <button
                      className={`option-btn ${extraPrints === '200' ? 'active' : ''}`}
                      onClick={() => {
                        setExtraPrints('200');
                        setStep(5);
                      }}
                    >
                      <strong>+200 impressions</strong>
                      <small>+60€</small>
                    </button>
                  </>
                )}
              </div>
              <button className="btn-back" onClick={() => setStep(3)}>← Retour</button>
            </div>
          )}

          {/* ÉTAPE 5 : Template personnalisé */}
          {step === 5 && (
            <div className="simulator-step">
              <h3>Template photo personnalisé ?</h3>
              {formula === 'complete' && (
                <p className="info-text">✅ Déjà inclus dans la formule Complète !</p>
              )}
              <div className="options-grid">
                <button
                  className={`option-btn ${needsTemplate === false ? 'active' : ''}`}
                  onClick={() => {
                    setNeedsTemplate(false);
                    setStep(6);
                  }}
                >
                  <strong>Non merci</strong>
                  <small>Template standard</small>
                </button>
                {formula !== 'complete' && (
                  <button
                    className={`option-btn ${needsTemplate === true ? 'active' : ''}`}
                    onClick={() => {
                      setNeedsTemplate(true);
                      setStep(6);
                    }}
                  >
                    <strong>Oui, personnalisé</strong>
                    <small>+10€</small>
                  </button>
                )}
                {formula === 'complete' && (
                  <button
                    className="option-btn active"
                    onClick={() => {
                      setNeedsTemplate(true);
                      setStep(6);
                    }}
                  >
                    <strong>Inclus !</strong>
                    <small>Déjà compris</small>
                  </button>
                )}
              </div>
              <button className="btn-back" onClick={() => setStep(4)}>← Retour</button>
            </div>
          )}

          {/* ÉTAPE 6 : Résultat */}
          {step === 6 && result && (
            <div className="simulator-result">
              <div className="result-card">
                <h3>🎉 Votre tarif personnalisé</h3>
                <div className="result-formula">
                  <p className="formula-name">{result.formulaName}</p>
                </div>
                <div className="result-price">
                  {result.oldPrice > 0 && (
                    <span className="old-price">{result.oldPrice}€</span>
                  )}
                  <span className="final-price">{result.basePrice}€</span>
                  {result.oldPrice > 0 && result.oldPrice > result.basePrice && (
                    <span className="savings">Économisez {result.oldPrice - result.basePrice}€</span>
                  )}
                </div>

                <div className="result-details">
                  <h4>Détails de votre configuration :</h4>
                  <ul>
                    <li>📅 Type : {eventType === 'weekend' ? 'Weekend ou 48h en semaine' : 'Soirée (en semaine uniquement)'}</li>
                    <li>📦 Formule : {
                      formula === 'digitale' ? 'Digitale' :
                      formula === 'impression' ? 'Impression' :
                      'Complète'
                    }</li>
                    {needsDelivery && distance && (
                      <li>
                        🚚 Livraison : {
                          distance === '<20' ? 'Moins de 20km' :
                          distance === '20-40' ? '20 à 40km' :
                          "Jusqu'à 60km"
                        }
                        {' '}
                        {
                          result.deliveryIncluded && distance === '<20' ? '(incluse !)' :
                          distance === '<20' ? '(+39€)' :
                          distance === '20-40' ? '(+45€)' :
                          '(+60€)'
                        }
                      </li>
                    )}
                    {!needsDelivery && <li>🚗 Retrait à Tours (gratuit)</li>}
                    {extraPrints !== 'none' && extraPrints && (
                      <li>🖨️ +{extraPrints} impressions supplémentaires ({extraPrints === '100' ? '+39€' : '+60€'})</li>
                    )}
                    {needsTemplate && formula !== 'complete' && <li>🎨 Template personnalisé (+10€)</li>}
                    {formula === 'complete' && <li>🎨 Template personnalisé (inclus)</li>}
                  </ul>
                </div>

                <div className="result-actions">
                  <a
                    href="/contact"
                    className="btn btn-primary"
                    onClick={() => trackEvent('click_reserver')}
                  >
                    Réserver maintenant
                  </a>
                  <button className="btn btn-secondary" onClick={resetSimulator}>
                    Recommencer
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
