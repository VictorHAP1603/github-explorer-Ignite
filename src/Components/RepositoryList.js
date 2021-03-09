import React from "react";
import RepositoryItem from "./RepositoryItem";

const RepositoryList = () => {
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        <RepositoryItem />
      </ul>
    </section>
  );
};

export default RepositoryList;
