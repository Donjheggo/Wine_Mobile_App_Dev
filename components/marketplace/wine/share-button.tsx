import { TouchableOpacity } from "react-native";
import { Share } from "~/lib/icons/share";

export default function ShareButton({ id }: { id: string }) {
  const handleSubmit = async () => {
    // Add function here
    console.log("Share button: ", id);
  };

  return (
    <TouchableOpacity onPress={handleSubmit}>
      <Share className="text-blue-500" size={20} />
    </TouchableOpacity>
  );
}
