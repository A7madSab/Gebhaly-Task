import { createMuiTheme } from "@material-ui/core/styles"

export default createMuiTheme({
    palette: {
        primary: {
            main: "#44a6c6",
        },
        secondary: {
            main: "#7BA0B5"
        }
    },
    overrides: {
        MuiTypography: {
            colorPrimary: "#eee"
        },
        MuiTextField: {
            root: {
                marginTop: 5,
                marginBottom: 5,
                marginLeft: 0,
                marginRight: 0
            }
        }
    },
    props: {
        MuiTextField: {
            variant: "outlined"
        },
        MuiButton: {
            variant: "contained",
            color: "primary"
        }

    }
})