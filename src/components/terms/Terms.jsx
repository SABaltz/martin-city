import React from 'react';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Typography";
import {Button, Divider} from "@mui/material";
import Box from "@mui/material/Box";
import {centerVertHoriz} from "../../global-parameters/Styles";
import {secondaryColor} from "../../global-parameters/Parameters";


function Terms() {
    return (
        <Container>
            <Button variant="contained" href="/"
                    sx={{
                        color: 'white',
                        backgroundColor: secondaryColor, ...centerVertHoriz,
                        width: '20rem',
                        marginLeft: '10rem',
                        marginTop: '1rem',
                        marginBottom: '1rem'
                    }}>
                Home
            </Button>
            <Box my={4} sx={{margin: '0 10rem'}}>
                <Typography variant="h4" gutterBottom>
                    Terms of Service
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Martin City Park LLC
                </Typography>

                <Typography variant="h6" gutterBottom>
                    Rules and Regulations
                </Typography>

                <Typography variant="body1" paragraph>
                    General Campground Guidelines
                </Typography>
                <Typography variant="body2" paragraph>
                    We’ve established the following general park guidelines to help ensure your safety and your
                    enjoyment, while in Martin City Park and the same to our other guests. Those who choose not to
                    observe these guidelines can be asked to leave the park without any form of refund.
                </Typography>


                <Typography variant="body2" paragraph>
                    Quiet Time: 10pm to 7am
                </Typography>

                <Typography variant="body2" paragraph>
                    Site Occupancy: Only one RV, camper, or pop up is allowed per RV site. One or more tents can be set
                    up in the large tent site. Only one small tent can be set up in the small tent site.
                </Typography>

                <Typography variant="body2" paragraph>
                    Children: Guests are responsible for all behavior of children. All children under the age of 16
                    years must be accompanied by an adult 18 years or older.
                </Typography>

                <Typography variant="body2" paragraph>
                    Trash: Please place all garbage in designated site trash bin located in the park. Please ensure the
                    bin is secure with the bear proof strap. Leave no food or trash outside your RV, camper or cars or
                    as bears and wildlife can and will explore the park on occasion.
                </Typography>

                <Typography variant="body2" paragraph>
                    Campfires: The use of campfires are not permitted at any time.
                </Typography>

                <Typography variant="body2" paragraph>
                    Fireworks and Firearms: Fireworks and firearms are strictly prohibited on park property including
                    BB, airsoft and pellet guns.
                </Typography>

                <Typography variant="body2" paragraph>
                    Pet Policy: We are a pet-friendly park, but pets must be on a leash at all times while out of
                    customer’s equipment (rv, tent, etc), cleaned up after and may not disturb other guests. Pets are
                    the responsibility of the owner, and the park is not liable for any injuries or incidents caused by
                    pets or wildlife. Our park is rustic by design and wildlife is a part of that rustic feel, for that
                    reason we encourage pets and pet owners alike to be mindful of their surroundings.
                </Typography>

                <Typography variant="body2" paragraph>
                    Vehicle Repairs: Vehicles and RV repairs are not permitted in the Park. You may check with the local
                    listings for businesses that provide these services.
                </Typography>

                <Typography variant="body2" paragraph>
                    RV/Camper Washing: Washing of RVs is not permitted within the Park.
                </Typography>

                <Typography variant="body2" paragraph>
                    Violation of these Guidelines may result in ejection from the park without a full refund.
                </Typography>

                <Typography variant="body2" paragraph>
                    Check In: 3pm Check Out: 10am. Early check in or late check out may be possible - please inquire.
                </Typography>

                <Typography variant="body2" paragraph>
                    Cancellations: Cancelling your reservation on the day of or 2 days in advance of your stay will
                    result in no refund. Cancelling your reservation 3 to 13 days in advance of your stay, you will be
                    refunded half of your total stay. Cancellations 15 or more days will receive a full refund minus a
                    $10 processing fee.
                </Typography>

                <Typography variant="body2" paragraph>
                    Payments: 100% payment is due at time of booking in order to confirm your reservation.
                </Typography>

                <Typography variant="body2" paragraph>
                    Other Campsite Guidelines: Ground disposal of any drain water (gray or black) is prohibited by
                    Montana State Law. Wastewater from RVs (including sink water) is not permitted to be dumped in
                    Martin City Park. Parking on or down Martin Drive is not permitted, this is a private drive, please
                    respect the locals and park additional vehicles on the paved shoulder off the main road.
                </Typography>

                <Divider/>

                <Typography variant="h6" gutterBottom>
                    TERMS & CONDITIONS
                </Typography>

                <Typography variant="body2" paragraph>
                    I agree, and shall cause my children, invitees and guests, to abide by the Park Rules, including
                    those rules and policies published at www.MartinCityPark.com posted at the Premises or otherwise
                    communicated in any manner by Martin City Park.
                </Typography>

                <Typography variant="body2" paragraph>
                    I further understand and agree that Martin City Park does not give credit or refunds due to the
                    discomforts of nature, the surrounding highway/roads, or any other matters upon which are
                    uncontrollable. Martin City Park’s refund policy varies, depending on the timing of the cancellation
                    notice in advance of the reservation date. Please read terms and rules/regulations for these
                    policies.
                </Typography>

                <Typography variant="body2" paragraph>
                    All canceled reservations will incur a $10 cancellation fee. A reservation canceled with two weeks
                    or more notice will receive a full and property refund of all payments. Reservations canceled within
                    two weeks & more than 48 hours will receive a 50% refund. Cancellations within 48 hours of reserved
                    stay and no shows will not receive a refund. Reservation dates may be changed within 48 hours
                    notice, subject to availability.
                </Typography>

                <Typography variant="body2" paragraph>
                    I HEREBY RELEASE, WAIVE, DISCHARGE AND COVENANT NOT TO SUE Martin City Park LLC, d/b/a Martin City
                    Park, its owners and agents, from any and all liability to me, my children, my invitees/guests,
                    personal representatives, and heirs for any loss or damage on account of injury to person (including
                    death) or loss or damage to property relating to, or arising out of, use and occupancy of Martin
                    City Park property, facilities, amenities (collectively, the Premises) and any dangers and hazards
                    associated with acts of nature, such as changing weather conditions, high winds, thunder and
                    lightning; temperature fluctuations; falling trees; tree limbs; ice/snow; wildfire; or encounters
                    with Montana wildlife.
                </Typography>

                <Typography variant="body2" paragraph>
                    I HEREBY AGREE TO INDEMNIFY, SAVE AND HOLD HARMLESS Martin City Park Management, and its employees,
                    from any loss, liability, damage or cost (including attorney fees) they may incur due to injury
                    (including death), damage or loss of property relating to use of the Premises by me, my children,
                    and/or my invitees/guests or due to any incidents that may occur during my stay. I understand that,
                    although Martin City Park Management makes every reasonable effort to provide a secure and safe
                    environment, the security of my person, my belongings, and all persons registered in my party is my
                    sole responsibility when staying at Martin City Park.
                </Typography>

                <Typography variant="body2" paragraph>
                    As a courtesy, an employee, if so requested, may assist with directing you to your designated
                    parking/tent site. It is your sole responsibility to ensure that the site will accommodate your
                    specific trailer/RV or tent and that you will not hit any branches, bollards, trees, rocks, etc.
                    when positioning your RV on the RV site. You agree to indemnify and hold Martin City Park LLC, its
                    owners and agents (collectively, “Martin City Park Management”) harmless from any loss, liability,
                    damage or cost (including attorney’s fees) that may result from an employee assisting or directing
                    you onto your site. Furthermore, you release, waive, discharge and covenant not to sue Martin City
                    Park Management for any and all liability, loss, or property damage relating to an employee
                    assisting/directing you to your site.
                </Typography>

                <Typography variant="body2" paragraph>
                    I understand that I am and remain personally liable to pay the total amount of my reservation prior
                    to my scheduled check-in date, or at such earlier date communicated to me. If I fail to pay the
                    total due, I agree that Martin City Park LLC may charge any remaining balance (in addition to any
                    damage charges or other amounts owed under these Terms and Conditions) to any credit or debit card
                    on file with my reservation. Any amounts due after 30 days will be subject to the maximum late
                    charge permitted under Montana state law.
                </Typography>

                <Typography variant="body2" paragraph>
                    The Premises are privately owned and Martin City Park LLC reserves the right to refuse service to
                    anyone for any reason except for those prohibited by law. Martin City Park Management reserves the
                    right to require any person or party it deems necessary, to leave the campground based on violations
                    of Park Rules or behavior management deems inappropriate or disturbing to others. Harassment or
                    mistreatment of our staff, guests, and surrounding neighbors will not be tolerated under any
                    circumstances. I have read this notice and agree to it as well as all Martin City Park Rules and
                    regulations. In addition, I understand that I am responsible for the actions of all persons
                    registered in my party, including any children, and any guests that visit during my stay.
                </Typography>

                <Typography variant="body2" paragraph>
                    I have read this waiver and understand it is my responsibility to abide by the Rules. I further
                    understand that it is my responsibility to ensure that my guests and invitees also comply with the
                    Rules. Failure to adhere to the policies and rules set forth herein may result in my removal from
                    Martin City Park without a refund.
                </Typography>
            </Box>
            <Box sx={{...centerVertHoriz, justifyContent: 'center'}}>
                <Button variant="contained" href="/"
                        sx={{
                            color: 'white',
                            backgroundColor: secondaryColor, ...centerVertHoriz,
                            width: '20rem',
                            marginBottom: '2rem'
                        }}>
                    Home
                </Button>
            </Box>
        </Container>
    )
}

export default Terms
