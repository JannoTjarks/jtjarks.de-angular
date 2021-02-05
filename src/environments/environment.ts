// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  email: "janno.tjarks@mailbox.org",
  street: "Esenser Postweg 120",
  postalCode: "26607 Aurich OT Dietrichsfeld",
  phone: "04947 9177433",
  personalImage: "https://static.jtjarks.de/picture-janno.jpg",
  curriculumVitae: "https://static.jtjarks.de/Lebenslauf_JannoTjarks.pdf",
  relatedLinks: [
    {
      image: "https://static.jtjarks.de/github-logo.png",
      link:"https://github.com/JannoTjarks",
      name: "GitHub"
    },
    {
      image: "https://static.jtjarks.de/xing-logo.png",
      link:"https://www.xing.com/profile/Janno_Tjarks",
      name: "Xing"
    }
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
