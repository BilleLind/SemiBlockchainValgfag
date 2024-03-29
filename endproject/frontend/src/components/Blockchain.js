import React from 'react';
const crypto = require('crypto');

export function Blockchain() {
    return (
        <div className="blockchain">
            <h2>Introduktion til Blockchain</h2>
            <h3>Hvad består en Blockchain af?</h3>
            <p>Blocks som bliver sammenholdt af en Chain</p>
            <div>
                <h4>Block</h4>
                <p>En Block indeholde alle dens tidligere versioner og information følgende er et eksempel på et logistik system der anvender blockchain,
                    <br></br> Hvori Lokation, Handling og dato er et json objekt som potentielt kan rumme mere information</p>
                <div className="flex">
                    <Block number="1" data={["Maribo", "skabelse", "20/04/2021"]}/>
                    <Block number="2" data={["Nykøbing", "transport", "21/04/2021"]} forrige="f215d558520dce853921f604eb80503e4c2f32a0d65b72991061c485d06114ac"></Block>
                </div>
                <p>Disse Blocks sidder sammen i en Chain, som er et array der indeholde Block objekter. Man ville kunne validere en chain <br></br>
                ved at sammenligne en blocks hash og forrige hash mod den tidligere block</p>
                <h4>Selve Blockchain'en</h4>
                <p>En Blockchain er en samlign af Flere forskellige chains indeholde blocks
                . Denne Blockchain vil man hvis det er en decentralizeret BlockChain <br></br>
                have kørende over flere forskellige nodes(servere) som har gemt alle blockchains localt</p>
                <p>Dette er til for at gøre det meget besværligt at få slettet eller ændret dataen uden lov</p>

                <h4>De forskellige metoder</h4>
                <p>Der findes mange forskellige metoder til at sikre integriteten af et blockchain netværk, den mest kendte er nok proof of work,
                   <br></br> Det er nemlig denne der bruges af bitcoin og indtil videre af Etheruem</p>
                <p>Følgende er de mest kendte/anvendte "consensus mechanism"</p>
                <ul>
                    <li>Proof of work</li>
                    <li>Proof of staKe</li>
                    <li>Delegated proof of stake</li>
                    <li>Proof of Capacity</li>
                    <li>Proof of Elapsed time</li>
                    <li>Proof of Activity</li>
                </ul>
                <p><b>Proof of work:</b> er velegnet til en virtuel valuta, da sværheden i at validere en block gør at det ville være for dyrt at forsøge at ændre den til ens formål</p>
                <div style={{ display: 'flex', }}><ul>Virtuel valuta</ul> <ul>Vigtige documenter der ikke må ændres</ul></div>

                <p><b>Proof of stake:</b> gør det nødvendigt at sætte værdi på højkant, f.eks. penge i en virtuel valuta,</p>
                <div style={{display: 'flex'}}><ul>Hosting af Defi apps</ul> <ul>Virtuel valuta, det vil dog gøre det bedre for en at spare op i stedet for at bruge det</ul></div>

                <p><b>Delegated proof of stake:</b> Bygger videre på Proof of stake, her stemmer man på en tredje part, hvor tredje parten har ansvaret for at validere blocks, er hurtigere ned PoS</p>
                <div style={{ display: 'flex'}}>
                    <ul>Demokratisk Stemning</ul>
                </div>

                <p><b>Proof of Capacity:</b> Modsat for proof of work, er det ens tilgængelige plads på ens hard disk som giver en mine og validerings rettigheder</p>
                <div style={{ display: 'flex'}}>
                    <ul></ul>
                </div>

                <p><b>Proof of Elapsed time:</b> Alle noder får en random vente tid som de skal gå i pause tilstand, den første der vågner får rettigheden til at mine blokken, dette skaber et retfærdigt system hvor alle har lige store sandsynlighed for at vinde og kræver mindre processor krafter end proof of work</p>
                <div style={{ display: 'flex'}}>

                </div>

                <p><b>Proof of Activity:</b></p>
                <div style={{ display: 'flex'}}>

                </div>

            </div>
            
        </div>
    )
}

function Block(props) {
    const hash = compute(props.number, props.data[0], props.data[1], props.data[2], props.forrige);
    return (
        <div className="block">
            <p>Block#: {props.number}</p>
            <p>Lokation: {props.data[0]}</p>
            <p>Handling: {props.data[1]}</p>
            <p>dato: {props.data[2]}</p>
            <p>Hash: {hash}</p>
            <p>Forrige: {props.forrige}</p>
        </div>
    );
}

function compute(...inputs) {
    const hash = crypto.createHash('sha256');
    hash.update(inputs.sort().join(''));
    return hash.digest('hex');
}
