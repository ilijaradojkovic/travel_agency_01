import {Box, Modal} from "@mui/material";
import {OtpInput} from "../../2fa/OtpInput";
import React, {forwardRef, useImperativeHandle, useState} from "react";

export  const OtpModal=forwardRef(({email}, ref) => {

        useImperativeHandle(ref, () => ({
            openOtpModal: () => handleOTPOpenModal()
        }));


        const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            background: "var(--black-color)",
            boxShadow: 24,
        };

    const [openOTPModal, setOpenOTPModal] = useState(false);
    const handleOTPCloseModal = () => {
        setOpenOTPModal(false)
    }

    const handleOTPOpenModal = () => {
        setOpenOTPModal(true)
    }

    return (
        <Modal
            open={openOTPModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <OtpInput email={email} handleCloseModal={handleOTPCloseModal}></OtpInput>
            </Box>
        </Modal>
    )
}
)