import React from "react";
import DataTable from "react-data-table-component";

/*Tarjeta diseño Status general  */
export function StatusG() {
  const columns = [
    { name: "Nombre", selector: (row) => row.nombre, sortable: true },
    { name: "Apellido", selector: (row) => row.apellido },
    { name: "Edad", selector: (row) => row.edad },
  ];

  const data = [
    { ID: "122631", nombre: "Jesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "Jesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "aesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "Jesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "besus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "Jesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "cesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "Jesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "zesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "Jesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "Jesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "aesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "Jesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "besus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "Jesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "cesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "Jesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "zesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "Jesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "Jesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "aesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "Jesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "besus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "Jesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "cesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "Jesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "zesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "Jesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "Jesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "aesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "Jesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "besus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "Jesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "cesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "Jesus", apellido: "Banuelos", edad: "27" },
    { ID: "122631", nombre: "zesus", apellido: "Banuelos", edad: "27" },
  ];

  return (
    <DataTable
      columns={columns}
      data={data}
      selectableRows
      pagination
      paginationPerPage={4}
      onSelectedRowsChange={(data) => console.log(data)}
    />
  );
}
