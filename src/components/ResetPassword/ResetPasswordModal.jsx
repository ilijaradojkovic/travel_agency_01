import {Box, Button, CircularProgress, Modal} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import React, {forwardRef, useImperativeHandle, useState} from "react";
import "./ResetPasswordModal.css";
import {useForm} from "react-hook-form";
import {sleep} from "../../util/Util";
import {resetPasswordRequest} from "../../rest/requests";
import {Loading} from "../../util/Loading/loading";
import {notifySuccessToastWithMessage,nofifyErrorToastWithMessage} from "../../util/ToastUtil";

export const ResetPasswordModal = forwardRef(({}, ref) => {

    useImperativeHandle(ref, () => ({
        openResetModule: () => handlePasswordResetOpenModal()
    }));

    const {register, handleSubmit, formState: {errors},reset} = useForm();

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: {
            xs: '90%',
            sm: '80%',
            md: 400
        },
        maxWidth: 400,
        background: "var(--black-color)",
        boxShadow: 24,
    };
    const [showLoading,setShowLoading]=useState(false)

    const [openPasswordResetModal, setOpenPasswordResetModal] = useState(false);

    const handlePasswordResetCloseModal = () => {
        setOpenPasswordResetModal(false)
    }
    const handlePasswordResetOpenModal = () => {
        setOpenPasswordResetModal(true)
    }
    const onSubmitResetPassword = async (data) => {
        setShowLoading(true)
        await sleep(1000); // Sleep for 1 second
        try{
            const result= await resetPasswordRequest(data);
            notifySuccessToastWithMessage("Password reset link sent to your email! Please check your email.")
            clearForm()
            setOpenPasswordResetModal(false)
        }
        catch (e) {
            nofifyErrorToastWithMessage("Something went wrong! Please try again.")
        }
        finally {
            setShowLoading(false)
        }
    }
    const clearForm = () => {
        reset(); // Reset the form to its default state
    };

    return (
        <Modal
            open={openPasswordResetModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

            <Box sx={style}>
                <div className={"reset_password_container"}>
                    <div className="close-button-holder">
                        <CloseRoundedIcon onClick={handlePasswordResetCloseModal}
                                          className="close-button"></CloseRoundedIcon>
                    </div>
                    <p className={"reset_password_title"}>Don't Worry! Reset Your Password Here to Get Back Into Your
                        Account</p>
                    <form className={"password_reset_form"} onSubmit={handleSubmit(onSubmitResetPassword)}>
                        <div className="login__box_password_reset">
                            <i className="ri-user-3-line login__icon"></i>

                            <div className="login__box_password_reset">
                                <input {...register("email", {required: true})}
                                    type="email" className="login__input_password_reset"
                                    id="login-email_password_reset" placeholder=" "/>
                                <label htmlFor="login-email_password_reset"
                                       className="login__label_password_reset">Email</label>
                            </div>
                        </div>
                        {errors.email && <p className="errorText">This field is required</p>}

                        <div className={"button_container"}>
                            <Button className={"reset_password_button"} disabled={showLoading}  type="submit" variant="contained">
                                {showLoading? <CircularProgress size={25} className={"circular_progress"}  /> : "Restart Password"}
                            </Button>

                        </div>

                    </form>

                </div>

            </Box>
        </Modal>
    );
})