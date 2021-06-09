function obtenerData(lista) {
    var filas = ""
    for (var i = 0; i < lista.length; i++) {

        var fila = "<tr><td>" + lista[i].first_name + " " + (lista[i].middle_name || "") + " " + lista[i].last_name + "</td>" + "<td>" + lista[i].party + "</td>" + "<td>" + lista[i].state + "</td>" + "<td>" + lista[i].seniority + "</td>" + "<td>" + "% " + lista[i].votes_with_party_pct + "</td></tr>";

        filas += fila

    }
    return filas;
}

document.getElementById("filas").innerHTML = obtenerData(data.results[0].members);