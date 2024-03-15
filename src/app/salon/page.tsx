"use client";
import { HeaderSection } from "@/components/salon/HeaderSection";
import { ServiceContentSection } from "@/components/salon/ServiceContentSection";
import { Stepper } from "@/components/salon/Stepper";
import serviceData from "../../../public/serviceData.json";
import userData from "../../../public/userData.json";
import {
  StepperProvider,
  useStepperContext,
} from "@/providers/StepperProvider";
import { UserContentSection } from "@/components/salon/UserContentSection";
import { ConfirmationContentSection } from "@/components/salon/ConfirmationContentSection";

const SalonContent = () => {
  const { command } = useStepperContext();
  return command?.dto.WorkerId ? (
    <ConfirmationContentSection users={userData} />
  ) : command?.dto.ServiceId ? (
    <UserContentSection users={userData} />
  ) : (
    <ServiceContentSection services={serviceData} />
  );
};

export default function SalonPage() {
  return (
    <StepperProvider>
      <div className="py-10 px-5 md:px-0 flex flex-col gap-8">
        <HeaderSection />
        <Stepper />
        <SalonContent />
      </div>
    </StepperProvider>
  );
}
