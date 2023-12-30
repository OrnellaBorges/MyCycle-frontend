import React from "react";

import CardList from "../../Cards/CardList";

export default function StartCycle() {
  return (
    <section className="start">
      <div className="dataContainer">
        <p>Enter your data</p>
      </div>

      <CardList />
    </section>
  );
}
