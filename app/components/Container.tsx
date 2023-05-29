'use client'

interface ContainerProps {
    children: React.ReactNode
  };

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div className="
            max-w-4xl
            min-w-sm
            mx-auto
            px-2
        ">
            {children}
        </div>
    )
}

export default Container; 