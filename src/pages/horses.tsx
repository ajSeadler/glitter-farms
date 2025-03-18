import AllHorses from "@/components/AllHorses";
import DefaultLayout from "@/layouts/default";

const HorsePage: React.FC = () => {
  return (
    <DefaultLayout>
      <div>
        <AllHorses />
      </div>
    </DefaultLayout>
  );
};

export default HorsePage;
