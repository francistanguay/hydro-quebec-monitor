// ============================================
// CONFIGURATION HYDRO-QUÉBEC MONITOR
// ============================================
// Modifiez ce fichier pour personnaliser l'application
// Ce fichier ne sera pas écrasé lors des mises à jour

const CONFIG = {
    // ⚠️ MOT DE PASSE - CHANGEZ-LE!
    password: "CAUCA2025!",
    
    // Nom de votre organisation (affiché dans l'interface)
    orgName: "CAUCA",
    
    // Durée de la session en heures (avant de redemander le mot de passe)
    sessionDuration: 8,
    
    // Intervalle de rafraîchissement des données HQ (en minutes)
    refreshInterval: 15,
    
    // Distance en km pour considérer qu'une adresse est en panne
    // (si une panne est à moins de X km de l'adresse)
    seuilDistanceKm: 2.0
};

// ============================================
// ADRESSES PRÉ-CONFIGURÉES
// ============================================
// Ajoutez vos adresses ici pour qu'elles soient chargées automatiquement
// Format: { nom: "Nom", adresse: "Adresse complète", lat: 00.0000, lng: -00.0000 }
//
// Pour trouver les coordonnées d'une adresse:
// 1. Allez sur Google Maps
// 2. Clic droit sur l'emplacement
// 3. Les coordonnées s'affichent (lat, lng)

const ADRESSES_PREDEFINIES = [
    // Exemples (supprimez ou modifiez ces lignes):
    {
        nom: "Bureau Principal Montréal",
        adresse: "1000 rue De La Gauchetière Ouest, Montréal",
        lat: 45.4987,
        lng: -73.5672
    },
    {
        nom: "Succursale Québec",
        adresse: "2700 boulevard Laurier, Québec",
        lat: 46.7808,
        lng: -71.2756
    },
    {
        nom: "Entrepôt Sherbrooke",
        adresse: "100 rue Wellington, Sherbrooke",
        lat: 45.4042,
        lng: -71.8929
    }
    
    // Ajoutez vos adresses ci-dessous:
    // {
    //     nom: "Nom de l'emplacement",
    //     adresse: "Adresse complète, Ville",
    //     lat: 45.0000,
    //     lng: -73.0000
    // },
];
