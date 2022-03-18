import { useEffect, useState } from "react";
import Mythe from "./Mythe";
import "webpack-jquery-ui/sortable";
import "jquery-ui-touch-punch";

function Mythes({ mythes }) {
    const [mythesOrdonnes, setMyhesOrdonnes] = useState(mythes);
    const [estValide, setEstValide] = useState({ disabled: false });
    useEffect(() => {
        $("#sortable").sortable({
            cursor: "move",
            stop: function () {
                setMyhesOrdonnes(
                    $.map($("#sortable li div.mythe"), function (elt) {
                        return {
                            id: mythes.find(
                                (mythe) => mythe.proposition === elt.textContent
                            ).id,
                            proposition: elt.textContent,
                        };
                    })
                );
            },
        });
    }, []);
    function handleClick(e) {
        e.preventDefault();
        setEstValide({ disabled: true });
        console.log(mythesOrdonnes);
    }
    return (
        <div className="container">
            <div className="container-fluid text-center m-2">
                <button
                    className="btn btn-success"
                    onClick={handleClick}
                    {...estValide}
                >
                    Valider
                </button>
            </div>
            <ul id="sortable" className="list-group">
                {mythes.map((mythe) => (
                    <Mythe
                        key={mythe.id}
                        mythe={mythe}
                        mythesOrdonnes={mythesOrdonnes}
                    />
                ))}
            </ul>
        </div>
    );
}
export default Mythes;
