#!/bin/bash

# List of files to delete
files=(
  "src/components/Confirmation/ConfirmationDialog.js"
  "src/components/Footer/ContactUs-footer.js"
  "src/components/Footer/Privacy.js"
  "src/components/Footer/Terms.js"
  "src/components/LoginForm/loginUser.js"
  "src/components/searchbar/SearchBar.js"
  "src/frontPages/AdminDataViewer/AdminComponents/sidebar.js"
  "src/frontPages/AdminDataViewer/AdminComponents/sidebar/DataComponents/CreateData.js"
  "src/frontPages/AdminDataViewer/AdminComponents/sidebar/DataComponents/EditForm.js"
  "src/frontPages/AdminDataViewer/AdminComponents/sidebar/DataComponents/TableEntry.js"
  "src/frontPages/AdminDataViewer/AdminComponents/sidebar/DataViewer.js"
  "src/frontPages/AdminDataViewer/AdminComponents/sidebar/pagination/pagination.js"
  "src/frontPages/AdminDataViewer/AdminComponents/sidebar/UpdatePage.js"
  "src/frontPages/AdminDataViewer/AdminComponents/sidebar/UpdateTrackingData.js"
  "src/frontPages/AdminDataViewer/AdminComponents/sidebar/UpdateTrackingStatus.js"
  "src/frontPages/AdminDataViewer/AdminPage/AdminMain.js"
  "src/frontPages/AdminDataViewer/landing-adminPage.js"
  "src/frontPages/userPages/landing-userPage.js"
  "src/publicPages/aboutPage.js"
  "src/publicPages/contact-page.js"
  "src/publicPages/landingPage.js"
  "src/publicPages/landingPage/aboutPage.js"
  "src/publicPages/landingPage/contact-landing.js"
  "src/publicPages/landingPage/hero-landing.js"
  "src/publicPages/landingPage/services-landing.js"
  "src/publicPages/landingPage/TrackingLanding.js"
  "src/publicPages/servicesPage.js"
  "src/publicPages/tracking-page.js"
  "src/publicPages/trackingPagePublic.js"
)

# Loop through and delete files
for file in "${files[@]}"
do
  if [ -f "$file" ]; then
    rm "$file"
    echo "Deleted: $file"
  else
    echo "File not found: $file"
  fi
done
