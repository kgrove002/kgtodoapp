const app = Vue.createApp({
    data() {
        return {
            currentYear: new Date().getFullYear(),
            showDesktop: false,
            showWeb: false,
            desktopSteps: [
                {
                    title: "Download the Application",
                    description: "Download the application using the link above. The application may prompt you to approve the download. You can select the 'Trust this program' option or choose to use the web application version instead.",
                    image: "images/Desktop/download.png",
                    alt: "Image showing how to download the application"
                },
                {
                    title: "Unzip the Application",
                    description: "Navigate to your downloads folder and unzip the program using your preferred extraction tool. The most commonly used program for this task is 7-Zip.",
                    image: "images/Desktop/unzip.png",
                    alt: "Image showing how to unzip the application"
                },
                {
                    title: "Launch the Application",
                    description: "Open the folder and locate the application file. Double-click this file. You may be prompted to trust this file through your firewall.",
                    image: "images/Desktop/open.png",
                    alt: "Image showing how to open the application"
                },
                {
                    title: "Sign Up",
                    description: "Click the 'Sign Up' button to create an account using your email. All personal information is stored solely for security purposes and is never released or sold to anyone. After signing up, you will receive an email containing the information you entered. You may keep this email for your records or delete it.",
                    image: "images/Desktop/signup.png",
                    alt: "Image showing how to sign up"
                },
                {
                    title: "Log In",
                    description: "Return to the login page and log in with your credentials.",
                    image: "images/Desktop/login.png",
                    alt: "Image showing how to log in"
                },
                {
                    title: "Explore the Features",
                    description: "Use the Day Settings tab to modify tasks for each day. The To-Do tab allows you to check off tasks for specific days. The User Settings tab lets you update your password, PIN, and email. The Grocery tab enables you to create a shopping list. Use the Logout tab to log out of the application.",
                    image: "images/Desktop/settings.jpg",
                    alt: "Image showing the application features"
                },
                {
                    title: "Warning About Deleting Items",
                    description: "In the desktop application, there are buttons at the bottom of the Grocery tab and Day Settings tab to delete the items in the respective lists. This action is irreversible and unrecoverable. Please ensure you are certain before deleting any information.",
                    image: "images/Desktop/warning.jpg",
                    alt: "Image showing the delete buttons"
                }
            ],
             webSteps: [
                {
                    title: "Go To The Application",
                    description: "In the nav bar there is a link to the web based application. Click on that link if you do not wish to download the desktop application or wish to use this application on your phone.",
                    image: "images/Web/navigate.JPG",
                    alt: "Image showing how to open the application"
                },
                {
                    title: "Sign Up",
                    description: "Click the 'Sign Up' button to create an account using your email. All personal information is stored solely for security purposes and is never released or sold to anyone. After signing up, you will receive an email containing the information you entered. You may keep this email for your records or delete it.",
                    image: "images/Web/signup.JPG",
                    alt: "Image showing how to sign up"
                },
                {
                    title: "Log In",
                    description: "Return to the login page and log in with your credentials.",
                    image: "images/Web/login.JPG",
                    alt: "Image showing how to log in"
                },
                {
                    title: "Explore the Features",
                    description: "Use the Day Settings tab to modify tasks for each day. The To-Do tab allows you to check off tasks for specific days. The User Settings tab lets you update your password, PIN, and email. The Grocery tab enables you to create a shopping list. Use the Logout tab to log out of the application.",
                    image: "images/Web/example.JPG",
                    alt: "Image showing the application features"
                },
            ]
        };
    },

    methods: {
        toggleShowDesktop() {
            this.showDesktop = !this.showDesktop;
        },
        toggleShowWeb() {
            this.showWeb = !this.showWeb;
        }
    }
});

app.mount('#app');
