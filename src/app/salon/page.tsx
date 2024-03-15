"use client";
import { HeaderSection } from "@/components/customer/HeaderSection";
import { ServiceContentSection } from "@/components/customer/ServiceContentSection";
import { Stepper } from "@/components/customer/Stepper";
import serviceData from "../../../public/serviceData.json";
import userData from "../../../public/userData.json";
import {
  StepperProvider,
  useStepperContext,
} from "@/providers/StepperProvider";
import { UserContentSection } from "@/components/customer/UserContentSection";
import { ConfirmationContentSection } from "@/components/customer/ConfirmationContentSection";

const CustomerContent = () => {
  const { command } = useStepperContext();
  return command?.dto.WorkerId ? (
    <ConfirmationContentSection users={userData} />
  ) : command?.dto.ServiceId ? (
    <UserContentSection users={userData} />
  ) : (
    <ServiceContentSection services={serviceData} />
  );
};

export default function CustomerPage() {
  return (
    <StepperProvider>
      <div className="py-10 px-5 md:px-0 flex flex-col gap-8">
        <HeaderSection />
        <Stepper />
        <CustomerContent />
      </div>
    </StepperProvider>
  );
}
