import Container from "@/components/ui/container";
import Image from "next/image";

export const Loading = () => {
  return (
    <Container>
      <div className="w-full h-[100dvh] flex flex-col items-center justify-center p-8">
        <Image
          src="/loading-cart.gif"
          alt="loading cart"
          width={200}
          height={200}
        />
        <p>Loading...</p>
      </div>
    </Container>
  );
};

export default Loading;
