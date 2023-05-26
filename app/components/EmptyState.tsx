'use client';

import { useRouter } from "next/navigation";

import Button from "./Button";
import Heading from "./Heading";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "uh oh",
  subtitle = "There are no events currently listed",
}) => {
  const router = useRouter();

  return ( 
    <div 
      className="
        flex 
        flex-col 
        gap-2 
        justify-center 
        items-center 
      "
    >
      <Heading
        center
        title={title}
        subtitle={subtitle}
      />
    </div>
   );
}
 
export default EmptyState;