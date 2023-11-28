import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import img from "../assets/images/Iphone 14 pro 1-1.png";
const NewArrival = () => {
  return (
    <div>
      <Card className="w-[350px] ">
        <CardHeader></CardHeader>
        <CardContent>
          <Image src={img} alt={""} />
        </CardContent>
        <CardFooter className="flex flex-col items-center text-center gap-2">
          <CardTitle>$900</CardTitle>
          <CardDescription>
            Apple iPhone 14 Pro Max <br /> 128GB <br /> Deep Purple (MQ9T3RX/A)
          </CardDescription>

          <Button className="border" variant={"destructive"}>Add To Cart</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NewArrival;
