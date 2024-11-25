import { CirclePlus } from "~/lib/icons/circle-plus";
import { Link } from "expo-router";

export default function AddSubAccountButton() {
  return (
    <Link href="/">
      <CirclePlus
        size={35}
        className="text-white rounded-full"
        fill={"green"}
      />
    </Link>
  );
}
