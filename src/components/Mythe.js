const poids = [
    { avis: "tout à fait d’accord", couleur: "success" },
    { avis: "plutôt d’accord", couleur: "primary" },
    { avis: "plutôt d’accord", couleur: "primary" },
    { avis: "plutôt d’accord", couleur: "primary" },
    { avis: "avis partagé", couleur: "info" },
    { avis: "avis partagé", couleur: "info" },
    { avis: "avis partagé", couleur: "info" },
    { avis: "avis partagé", couleur: "info" },
    { avis: "avis partagé", couleur: "info" },
    { avis: "avis partagé", couleur: "info" },
    { avis: "plutôt pas d’accord", couleur: "warning" },
    { avis: "plutôt pas d’accord", couleur: "warning" },
    { avis: "plutôt pas d’accord", couleur: "warning" },
    { avis: "pas du tout d’accord", couleur: "danger" },
];
function Mythe({ mythe, mythesOrdonnes }) {
    const index = mythesOrdonnes.findIndex(
        (mytheOrdonne) => mytheOrdonne.proposition === mythe.proposition
    );
    const { avis, couleur } = poids[index];
    return (
        <li className="list-group-item d-flex justify-content-between">
            <div className="mythe my-auto w-75 mx-2">{mythe.proposition}</div>
            <div className={`badge my-4 bg-${couleur} w-25`}>{avis}</div>
        </li>
    );
}

export default Mythe;
