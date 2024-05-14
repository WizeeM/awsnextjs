/* pages/index.js */
"use client";
import Head from "next/head";

import { useState, useEffect } from "react";

export default function StartHome({ breeds = [] }) {
    const [breedList, setBreedList] = useState([]);

    useEffect(() => {
        // @ts-ignore
        setBreedList(Object.keys(breeds));
    }, [breeds]);

    return (
        <div >
            <Head>
                <title>Amplify Hosting Test</title>
    <link rel="icon" href="/favicon.ico" />
        </Head>

        <main >
    <h1 >Amplify Hosting Test App</h1>
    <br />
    <select>
        {breedList.map((breed) => (
                <option key={breed} value={breed}>
            {breed}
            </option>
))}
    </select>
    </main>
    </div>
);
}

export async function getServerSideProps(context: any) {
    const url = "https://dog.ceo/api/breeds/list/all";
    const res = await fetch(url);
    const data = await res.json();
    const breeds = data.message;

    return {
        props: { breeds },
    };
}
