'use client'

import { useMemo, useState } from "react";
import useEventModal from "../hooks/useEventModal";
import Modal from "./Modal"
import Heading from "../Heading";
import Input from "../inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

enum STEPS {
    stepOne = 0,
    stepTwo = 1
}


const EventModal = () => {
    const eventModal = useEventModal();
    const router = useRouter();

    const [step, setStep] = useState(STEPS.stepOne);
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors,
        },
        reset,
    } = useForm<FieldValues>({
        defaultValues: {
            heading: '',
            subtitle: '',
            date: '',
            allAges: false,
            eventId: '',

        }
    })

    const onBack = () => {
        setStep((value) => value - 1);
    };

    const onNext = () => {
        setStep((value) => value + 1);
    };

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (step !== STEPS.stepTwo) {
          return onNext();
        }
        
        setIsLoading(true);
    
        axios.post('/api/events', data)
        .then(() => {
          toast.success('Event Created!');
          router.refresh();
          reset();
          setStep(STEPS.stepOne)
          eventModal.onClose();
        })
        .catch(() => {
          toast.error('Something went wrong.');
        })
        .finally(() => {
          setIsLoading(false);
        })
    }

    const actionLabel = useMemo(() => {
        if (step === STEPS.stepTwo) {
            return 'Create';
        }

        return 'Next';
    }, [step]);

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.stepOne) {
            return undefined;
        }

        return 'Back';
    }, [step]);

    let bodyContent = (
        <div className="flex flex-col gap-8">
            <Input 
                id="heading"
                label="Heading"
                disabled={isLoading}
                register={register}
                errors={errors}
            />
            < hr />
            <Input 
                id="subtitle"
                label="Subtitle"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )
   
    if (step === STEPS.stepTwo) {
        bodyContent = (
            <div className="flex flex-col gap-8">
            <Input 
                id="eventId"
                label="EventId"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            < hr />
            <Input 
                id="date"
                label="Date"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
        )
    }

    return (
        <Modal
            isOpen={eventModal.isOpen}
            onClose={eventModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step === STEPS.stepOne ? undefined : onBack}
            title="Add Event"
            body={bodyContent}
        />
    )
}

export default EventModal;
