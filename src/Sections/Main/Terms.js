import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const TermsList = [
  {
    title: "DEFINITIONS",

    subtitle: [
      {
        text: 'The Agreement: The use of this platform and services on this platform provided by ] Rapido Tours & Travel LLC (herein referred to as "Owner") are subject to the following Terms and Conditions (hereinafter "Terms & Conditions"), all parts and subparts of which isare specifically incorporated by reference here together with the Privacy Policy and Disclaimer. Following are the Terms & Conditions governing your use of www.sateeq.com (the "Platform"), all pages on the Platform and any services provided by or on its platform ("Services"). By accessing either directly or through a hyperlink, the  Platform and or purchasing from us, you engage in our “Service” and agree to be bound by the Terms & Conditions including those additional terms & conditions and policies referenced herein and or available by hyperlink. The Terms & Conditions apply to all users of the site,including without limitation to browsers, third-parties and contributors of content. You acknowledge and agree that the Platform  may use your personal information in the manner described in our  Privacy Policy which sets forth how information collected about you is  collected, used and stored.',
      },
      {
        text: "You, the User: you as the user of the Platform, will be referred throughout these Terms & Conditions with second-person pronouns such as You, Your, Yours, or as User. For the purpose of this Terms & Conditions, the term “User” or “You” shall mean any natural or legal person, who is accessing the Platform. The term “Your” shall be constructed accordingly.",
      },
      {
        text: "Parties: Collectively, the parties to these Terms and Conditions (the Owner and You) will be referred to as Parties.",
      },
    ],
  },
  {
    title: "ASSENT AND ACCEPTANCE",

    subtitle: [
      {
        text: "By using the Platform, You warrant that You have read and reviewed these Terms & Conditions and that you agree to be bound by it. If You do not agree to be bound by these Terms & Conditions, please leave the Platform immediately. We only agree to provide accessibility and use of this Platform and Services to You, if You assent to these Terms & Conditions. Furthermore, based on the Services obtained by You, additional terms and conditions (i.e Terms of Service) with respect to the specific service shall apply, which shall be deemed to be the agreement between You and Us",
      },
    ],
  },
  {
    title: "ABOUT THIS SITE",

    subtitle: [
      {
        text: "This is an online Platform which carries out fundraising. The use of this Platform and its services is not regulated under any law. We reserve the right to refuse the Service at our sole discretion to anyone, for any reason and at any time. You assume all risks associated with dealing with other users with whom you come in contact through this Platform. You agree to use this Platform for lawful purposes without infringing the rights or restricting the use of this Platform by anythird-party.",
      },
    ],
  },
  {
    title: "ACCEPTABLE USE",

    subtitle: [
      {
        text: "You agree to not use the Platform or Services for any unlawful purpose or in a way that could damage the Platform, Services and general business of the Owner",
      },
    ],
  },
];
const Terms = () => {
  return (
    <Container>
      <Stack alignItems={"center"} marginY={4} padding={3}>
        <Typography variant="h3" sx={{marginY:3}}>Terms of Use</Typography>
        <Typography variant="body2">
          The Agreement: The use of this platform and services on this platform
          provided by ] Rapido Tours & Travel LLC (herein referred to as
          "Owner") are subject to the following Terms and Conditions
          (hereinafter "Terms & Conditions"), all parts and subparts of which is
          are specifically incorporated by reference here together with the
          Privacy Policy and Disclaimer. Following are the Terms & Conditions
          governing your use of www.sateeq.com (the "Platform"), all pages on
          the Platform and any services provided by or on its platform
          ("Services"). By accessing either directly or through a hyperlink, the
          Platform and or purchasing from us, you engage in our “Service” and
          agree to be bound by the Terms & Conditions including those additional
          terms & conditions and policies referenced herein and or available by
          hyperlink. The Terms & Conditions apply to all users of the site,
          including without limitation to browsers, third-parties and
          contributors of content. You acknowledge and agree that the Platform
          may use your personal information in the manner described in our
          Privacy Policy which sets forth how information collected about you is
          collected, used and stored.
        </Typography>
        {TermsList.map((el, idx) => (
          <Card sx={{ minWidth: 1150, marginY: 4 }}>
            <CardContent sx={{ background: "#F5F5F5" }}>
              <Stack sx={{ marginY: 3 }}>
                <Stack spacing={4}>
                  <Typography variant="h6" sx={{ marginBottom: 4 }}>
                    {" "}
                    {el.title}
                  </Typography>
                </Stack>

                <Stack direction={"row"} spacing={3}>
                  <Stack>
                    <Box
                      sx={{
                        borderRadius: "50%",
                        width: 50,
                        height: 50,
                        background: "#ffffff",
                      }}
                    >
                      <Stack
                        alignItems={"center"}
                        justifyContent={"center"}
                        sx={{ height: 50 }}
                      >
                        <Typography variant="h6">{idx + 1}</Typography>
                      </Stack>
                    </Box>
                  </Stack>
                  <Stack spacing={3}>
                    {el.subtitle.map((elm, id) => (
                      <Stack direction={"row"} spacing={3}>
                        <Stack>
                          <Typography variant="body2">
                            {` ${idx + 1}.${id + 1}`}
                          </Typography>
                        </Stack>
                        <Stack >
                          {" "}
                          <Typography variant="body2">{elm.text}</Typography>
                        </Stack>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
};

export default Terms;
