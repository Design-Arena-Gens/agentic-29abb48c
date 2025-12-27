'use client'

import { useState } from 'react'

export default function Home() {
  const [selectedLevel, setSelectedLevel] = useState('debutant')
  const [expandedCategory, setExpandedCategory] = useState(null)

  const roadmap = {
    debutant: {
      title: "Niveau Débutant (0-1 an)",
      color: "#4CAF50",
      categories: [
        {
          name: "Mathématiques Fondamentales",
          icon: "📐",
          skills: [
            "Algèbre linéaire (matrices, vecteurs, espaces vectoriels)",
            "Calcul différentiel et intégral",
            "Probabilités et statistiques",
            "Géométrie euclidienne et analytique",
            "Trigonométrie avancée",
            "Équations différentielles ordinaires"
          ]
        },
        {
          name: "Physique de Base",
          icon: "⚡",
          skills: [
            "Mécanique newtonienne (cinématique, dynamique)",
            "Électricité et magnétisme (lois de Kirchhoff, circuits)",
            "Thermodynamique de base",
            "Optique géométrique",
            "Ondes et vibrations",
            "Systèmes de référence et coordonnées"
          ]
        },
        {
          name: "Programmation Initiale",
          icon: "💻",
          skills: [
            "Python (syntaxe, structures de données, POO)",
            "C/C++ bases (pointeurs, mémoire, compilation)",
            "Algorithmique fondamentale (tri, recherche)",
            "Structures de données (listes, piles, files, arbres)",
            "Git et contrôle de version",
            "Linux et ligne de commande"
          ]
        },
        {
          name: "Électronique Basique",
          icon: "🔌",
          skills: [
            "Composants passifs (résistances, condensateurs, inductances)",
            "Diodes et transistors",
            "Circuits logiques (portes AND, OR, NOT)",
            "Lecture de schémas électroniques",
            "Utilisation d'un multimètre et oscilloscope",
            "Breadboard et prototypage basique"
          ]
        }
      ]
    },
    intermediaire: {
      title: "Niveau Intermédiaire (1-3 ans)",
      color: "#2196F3",
      categories: [
        {
          name: "Mécanique et CAO",
          icon: "⚙️",
          skills: [
            "SolidWorks / Fusion 360 / FreeCAD",
            "Résistance des matériaux",
            "Dynamique des systèmes mécaniques",
            "Conception mécanique pour la fabrication",
            "Tolérances et ajustements",
            "Analyse par éléments finis (FEA) base"
          ]
        },
        {
          name: "Électronique Avancée",
          icon: "🔋",
          skills: [
            "Microcontrôleurs (Arduino, STM32, ESP32)",
            "PCB design (KiCad, Altium, Eagle)",
            "Capteurs (IMU, encodeurs, ultrason, LIDAR)",
            "Actionneurs (moteurs DC, servos, steppers)",
            "Drivers de moteurs (H-bridge, ESC)",
            "Alimentations et régulateurs de tension"
          ]
        },
        {
          name: "Systèmes Embarqués",
          icon: "🖥️",
          skills: [
            "Programmation bare-metal",
            "RTOS (FreeRTOS, Zephyr)",
            "Communication série (UART, SPI, I2C)",
            "PWM et contrôle de moteurs",
            "Interruptions et timers",
            "Débogage avec JTAG/SWD"
          ]
        },
        {
          name: "Automatique et Contrôle",
          icon: "🎛️",
          skills: [
            "Systèmes asservis (boucle fermée)",
            "PID (Proportionnel-Intégral-Dérivé)",
            "Modélisation de systèmes dynamiques",
            "Fonction de transfert et diagramme de Bode",
            "Stabilité des systèmes (critère de Routh)",
            "MATLAB/Simulink pour simulation"
          ]
        },
        {
          name: "Robotique Fondamentale",
          icon: "🤖",
          skills: [
            "Cinématique directe et inverse",
            "ROS (Robot Operating System) base",
            "Navigation et évitement d'obstacles",
            "Planification de trajectoire",
            "Localisation et cartographie (SLAM) base",
            "Robots mobiles (différentiel, omnidirectionnel)"
          ]
        },
        {
          name: "IA et Machine Learning Bases",
          icon: "🧠",
          skills: [
            "Réseaux de neurones basiques (perceptron, MLP)",
            "Frameworks (TensorFlow, PyTorch)",
            "Régression et classification",
            "Prétraitement de données",
            "Validation croisée et overfitting",
            "NumPy, Pandas, Scikit-learn"
          ]
        }
      ]
    },
    avance: {
      title: "Niveau Avancé (3-5 ans)",
      color: "#9C27B0",
      categories: [
        {
          name: "Robotique Avancée",
          icon: "🦾",
          skills: [
            "Dynamique des robots (équations de Lagrange)",
            "Contrôle optimal (LQR, MPC)",
            "Robots manipulateurs (bras robotiques)",
            "Planification de mouvement avancée (RRT, A*)",
            "Vision par ordinateur pour robotique",
            "Coordination multi-robots"
          ]
        },
        {
          name: "IA Avancée pour Robotique",
          icon: "🚀",
          skills: [
            "Deep Learning (CNN, RNN, LSTM)",
            "Apprentissage par renforcement (Q-learning, DQN, PPO)",
            "Computer Vision (détection d'objets, segmentation)",
            "Traitement du langage naturel (NLP) base",
            "Transfer learning et fine-tuning",
            "Déploiement de modèles (ONNX, TensorRT)"
          ]
        },
        {
          name: "Perception et Capteurs",
          icon: "👁️",
          skills: [
            "Fusion de capteurs (Kalman filter, particule filter)",
            "Traitement d'images (OpenCV)",
            "LIDAR et nuages de points (PCL)",
            "Caméras stéréo et profondeur",
            "SLAM visuel et LiDAR",
            "Calibration de capteurs"
          ]
        },
        {
          name: "Systèmes Temps Réel",
          icon: "⏱️",
          skills: [
            "Contraintes temps réel dur/mou",
            "Ordonnancement de tâches",
            "Analyse de performance",
            "Communication déterministe (EtherCAT, CAN)",
            "Synchronisation multi-processeurs",
            "Systèmes distribués embarqués"
          ]
        },
        {
          name: "Mécatronique Intégrée",
          icon: "🔧",
          skills: [
            "Co-design mécanique-électronique",
            "Optimisation multi-domaine",
            "Prototypage rapide (impression 3D, CNC)",
            "Analyse vibratoire",
            "Systèmes hydrauliques et pneumatiques",
            "Actionneurs intelligents"
          ]
        },
        {
          name: "Sécurité et Fiabilité",
          icon: "🛡️",
          skills: [
            "Normes de sécurité robotique (ISO 10218)",
            "Analyse AMDEC (FMEA)",
            "Redondance et tolérance aux fautes",
            "Détection de collisions",
            "Arrêt d'urgence et modes dégradés",
            "Cybersécurité pour systèmes embarqués"
          ]
        }
      ]
    },
    expert: {
      title: "Niveau Expert (5+ ans)",
      color: "#FF5722",
      categories: [
        {
          name: "Recherche et Innovation",
          icon: "🔬",
          skills: [
            "Publication scientifique",
            "Méthodologie de recherche",
            "État de l'art technologique",
            "Prototypes innovants",
            "Propriété intellectuelle et brevets",
            "Collaboration académique-industrielle"
          ]
        },
        {
          name: "IA de Pointe",
          icon: "🌟",
          skills: [
            "Transformers et attention mechanisms",
            "Vision-Language Models (CLIP, BLIP)",
            "Reinforcement Learning avancé (SAC, TD3)",
            "Meta-learning et few-shot learning",
            "Neuromorphic computing",
            "Edge AI et optimisation"
          ]
        },
        {
          name: "Robotique Spécialisée",
          icon: "🦿",
          skills: [
            "Robots humanoïdes",
            "Robots collaboratifs (cobots)",
            "Manipulation dextre",
            "Locomotion bipède/quadrupède",
            "Interaction homme-robot (HRI)",
            "Exosquelettes et prothèses"
          ]
        },
        {
          name: "Systèmes Autonomes",
          icon: "🚗",
          skills: [
            "Véhicules autonomes",
            "Drones et UAV autonomes",
            "Prise de décision en temps réel",
            "Planification sous incertitude",
            "Systèmes multi-agents",
            "Essaims robotiques"
          ]
        },
        {
          name: "Architecture Système",
          icon: "🏗️",
          skills: [
            "Conception de systèmes complexes",
            "Ingénierie système (SysML)",
            "Intégration de sous-systèmes",
            "Gestion de projet technique",
            "Leadership technique",
            "Évaluation technico-économique"
          ]
        },
        {
          name: "Domaines Émergents",
          icon: "🌐",
          skills: [
            "Soft robotics",
            "Bio-robotique",
            "Robots médicaux",
            "Fabrication additive 4D",
            "Matériaux intelligents",
            "Robotique quantique (exploration)"
          ]
        }
      ]
    }
  }

  const tools = [
    { name: "Logiciels CAO", items: ["SolidWorks", "Fusion 360", "CATIA", "FreeCAD", "Inventor"] },
    { name: "Programmation", items: ["Python", "C/C++", "MATLAB", "Julia", "Rust"] },
    { name: "Frameworks IA", items: ["PyTorch", "TensorFlow", "Keras", "JAX", "scikit-learn"] },
    { name: "Robotique", items: ["ROS/ROS2", "Gazebo", "MoveIt", "OpenRAVE", "Drake"] },
    { name: "Électronique", items: ["KiCad", "Altium", "EAGLE", "LTspice", "Proteus"] },
    { name: "Vision", items: ["OpenCV", "PCL", "YOLO", "MediaPipe", "Detectron2"] },
    { name: "Simulation", items: ["Simulink", "Webots", "CoppeliaSim", "PyBullet", "MuJoCo"] },
    { name: "Hardware", items: ["Arduino", "Raspberry Pi", "NVIDIA Jetson", "STM32", "ESP32"] }
  ]

  const certifications = [
    "Diplôme d'ingénieur en Mécatronique/Robotique",
    "Master en Robotique ou IA",
    "Certifications ROS (ROS Industrial)",
    "Certifications NVIDIA Deep Learning",
    "Certifications en sécurité robotique",
    "PhD pour la recherche avancée"
  ]

  const resources = [
    { type: "Cours en ligne", items: ["Coursera (Stanford AI)", "edX (MIT Robotics)", "Udacity (Self-Driving Car)", "Fast.ai"] },
    { type: "Livres", items: ["Modern Robotics (Lynch & Park)", "Deep Learning (Goodfellow)", "Probabilistic Robotics (Thrun)"] },
    { type: "Communautés", items: ["ROS Discourse", "GitHub", "Stack Overflow", "IEEE Robotics", "ArXiv"] }
  ]

  return (
    <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '100vh', padding: '20px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <header style={{ textAlign: 'center', color: 'white', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '10px', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            🤖 Parcours Ingénieur Mécatronicien
          </h1>
          <p style={{ fontSize: '1.3rem', opacity: 0.95 }}>
            Robotique & Intelligence Artificielle - Guide Complet pour Débutants
          </p>
        </header>

        {/* Level Selector */}
        <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {Object.entries(roadmap).map(([key, level]) => (
            <button
              key={key}
              onClick={() => setSelectedLevel(key)}
              style={{
                padding: '15px 30px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                background: selectedLevel === key ? level.color : 'white',
                color: selectedLevel === key ? 'white' : '#333',
                transition: 'all 0.3s ease',
                boxShadow: selectedLevel === key ? '0 6px 20px rgba(0,0,0,0.3)' : '0 2px 10px rgba(0,0,0,0.1)',
                transform: selectedLevel === key ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              {level.title}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div style={{ background: 'white', borderRadius: '20px', padding: '30px', boxShadow: '0 10px 40px rgba(0,0,0,0.2)' }}>
          <h2 style={{ color: roadmap[selectedLevel].color, fontSize: '2rem', marginBottom: '25px', borderBottom: `3px solid ${roadmap[selectedLevel].color}`, paddingBottom: '10px' }}>
            {roadmap[selectedLevel].title}
          </h2>

          {/* Categories Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            {roadmap[selectedLevel].categories.map((category, idx) => (
              <div
                key={idx}
                style={{
                  border: `2px solid ${roadmap[selectedLevel].color}`,
                  borderRadius: '15px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: expandedCategory === idx ? `${roadmap[selectedLevel].color}15` : 'white'
                }}
                onClick={() => setExpandedCategory(expandedCategory === idx ? null : idx)}
              >
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.4rem', marginBottom: '15px', color: roadmap[selectedLevel].color }}>
                  <span style={{ fontSize: '2rem' }}>{category.icon}</span>
                  {category.name}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {category.skills.map((skill, skillIdx) => (
                    <li
                      key={skillIdx}
                      style={{
                        padding: '8px 0',
                        borderBottom: skillIdx < category.skills.length - 1 ? '1px solid #eee' : 'none',
                        fontSize: '0.95rem',
                        color: '#555'
                      }}
                    >
                      ✓ {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tools Section */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              🛠️ Outils et Technologies Essentiels
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
              {tools.map((tool, idx) => (
                <div key={idx} style={{ background: '#f8f9fa', borderRadius: '10px', padding: '15px', border: '1px solid #ddd' }}>
                  <h4 style={{ color: '#667eea', marginBottom: '10px', fontSize: '1.1rem' }}>{tool.name}</h4>
                  <div style={{ fontSize: '0.9rem', color: '#666' }}>
                    {tool.items.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              🎓 Formations et Certifications
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '12px' }}>
              {certifications.map((cert, idx) => (
                <div key={idx} style={{ background: '#e8f5e9', padding: '12px 18px', borderRadius: '8px', border: '2px solid #4CAF50', fontSize: '0.95rem' }}>
                  📜 {cert}
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              📚 Ressources d'Apprentissage
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px' }}>
              {resources.map((resource, idx) => (
                <div key={idx} style={{ background: '#fff3e0', borderRadius: '10px', padding: '15px', border: '2px solid #FF9800' }}>
                  <h4 style={{ color: '#F57C00', marginBottom: '10px', fontSize: '1.1rem' }}>{resource.type}</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.9rem', color: '#666' }}>
                    {resource.items.map((item, itemIdx) => (
                      <li key={itemIdx} style={{ marginBottom: '5px' }}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Footer */}
          <div style={{ marginTop: '40px', padding: '20px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '15px', color: 'white', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>⏱️ Durée Totale du Parcours</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              <strong>5-7 ans</strong> pour atteindre un niveau expert complet<br/>
              Formation continue recommandée tout au long de la carrière
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer style={{ textAlign: 'center', color: 'white', marginTop: '30px', opacity: 0.9, fontSize: '0.9rem' }}>
          <p>💡 Conseil : Pratiquez avec des projets concrets à chaque étape de votre apprentissage</p>
          <p>🚀 Bon courage dans votre parcours vers l'ingénierie mécatronique !</p>
        </footer>
      </div>
    </div>
  )
}
