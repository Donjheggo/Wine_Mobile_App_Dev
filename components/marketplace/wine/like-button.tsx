import { TouchableOpacity } from "react-native";
import { Heart } from "~/lib/icons/heart";

export default function LikeButton({ id }: { id: string }) {
  const handleSubmit = async () => {
    // Add function here
    console.log("Like: ", id);
  };

  return (
    <TouchableOpacity onPress={handleSubmit}>
      <Heart className="text-red-500" size={20}/>
    </TouchableOpacity>
  );
}
