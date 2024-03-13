"use client";
import { useCreateSalonCommand } from "@/serverHooks/commands/useCreateSalonCommand";
import { DepositType } from "@/serverHooks/enums/DepositType";
import { useGetSalonListQuery } from "@/serverHooks/queries/useGetSalonListQuery";
import { useGetSalonQuery } from "@/serverHooks/queries/useGetSalonQuery";
import { newGuid } from "@/serverHooks/types/newGuid";

export default function Home() {
  // const { data: salonList, produceFetch: aaa } = useGetSalonListQuery({
  //   pageNumber: 1,
  //   pageSize: 20,
  // });

  // const { run, error, success, setCommand, produceCommand, command } =
  //   useCreateSalonCommand({
  //     initialCommand: {
  //       dto: {
  //         Name: "Fixed",
  //         Description: "Salon Descriptiona",
  //         Location: "Salon Locationa",
  //         ContactInformation: "Salon Contact Informationa",
  //         OpeningHours: "Salon Opening Hoursa",
  //         Id: "9fa85f64-5717-4562-b3fc-2c963f66afa2",
  //         OwnerId: "9fa85f64-5717-4562-b3fc-2c963f66afa2",
  //         DepositValue: 100.0,
  //         PriceWithDeposit: 200.0,
  //         PriceWithoutDeposit: 150.0,
  //         DepositType: DepositType.None,
  //       },
  //     },
  //   });

  const { data, error, fetch, produceFetch } = useGetSalonQuery({
    id: "7c05d9c9-4b6d-4a47-a4f8-8043fb6099fc",
  });

  // console.log("Error", error);
  // console.log("Success", success);
  // console.log("Command", command);
  // console.log("salonList", salonList?.items);

  console.log("data AAAAAAAA", data);
  console.log("error AAAAAAAA", error);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div>
          <button
            onClick={() => {
              // produceCommand((draft) => {
              //   draft.OwnerId = newGuid();
              //   draft.Id = newGuid();
              //   draft.Name = "Fixed";
              // });
              // produceFetch((draft) => {
              //   draft.id = "7c05d9c9-4b6d-4a47-a4f8-8043fb6099fc";
              // });
            }}
          >
            Create Salon
          </button>

          <button
            onClick={() => {
              fetch();
            }}
          >
            Send Command
          </button>
        </div>
        <div> {data?.name} </div>
        {/* {salonList?.items?.map((salon) => (
          <div key={salon.id}>{salon.id}</div>
        ))} */}

        {/* <table>
          <th> Salon Id </th>
          <th> Salon Owner Id </th>
          <th> Salon Name </th>
          <th> Salon Description </th>
          <th> Salon Location </th>
          <th> Salon Contact Information </th>
          <th> Salon Opening Hours </th>
          <th> Salon Deposit Value </th>
          <th> Salon Price With Deposit </th>
          <th> Salon Price Without Deposit </th>
          <th> Salon Deposit Type </th>

          {salonList?.items?.map((salon) => (
            <tr key={salon.id}>
              <td>{salon.id}</td>
              <td>{salon.ownerId}</td>
              <td>{salon.name}</td>
              <td>{salon.description}</td>
              <td>{salon.location}</td>
              <td>{salon.contactInformation}</td>
              <td>{salon.openingHours}</td>
              <td>{salon.depositValue}</td>
              <td>{salon.priceWithDeposit}</td>
              <td>{salon.priceWithoutDeposit}</td>
              <td>{salon.depositType}</td>
            </tr>
          ))}
        </table> */}
      </div>
    </main>
  );
}
