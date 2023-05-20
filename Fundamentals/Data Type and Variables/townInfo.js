function townInfo(townName,population,squareKm){

    let town = String(townName);
    let pop = Number(population);
    let km = Number (squareKm);
    console.log(`Town ${town} has population of ${pop} and area ${km} square km.`);

}
townInfo('Sofia',
1286383,
492
)