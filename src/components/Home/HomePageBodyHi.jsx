import React from "react";
import BodyCard from "./BodyCard";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
  background-color: #f9f9f9;
  h1 {
    font-size: 150%;
    font-weight: bold;
  }

  // media quries
  @media (max-width: 768px) {
    width: 100%;
    h1 {
      font-size: 100%;
    }
  }
`;

function HomePageBody() {
  return (
    <Container>
      <h1>
महिला स्वास्थ्य क्यों आवश्यक है?</h1>
      <BodyCard
        img="https://i.pinimg.com/originals/8a/28/8f/8a288fc55156d4dceffe0b47cb9c89ea.jpg"
        para="एक सापेक्ष अवस्था जिसमें कोई व्यक्ति जिस वातावरण में रह रहा है, उसके भीतर अपनी अनूठी क्षमताओं की पूरी श्रृंखला को व्यक्त करने के लिए शारीरिक, मानसिक, सामाजिक और आध्यात्मिक रूप से अच्छी तरह से कार्य करने में सक्षम है। रेने डुबोस के शब्दों में, वास्थ्य मुख्य रूप से प्रत्येक व्यक्ति की क्षमता का एक उपाय है जो वह बनना चाहता है और वह बनना चाहता है। स्वास्थ्य और बीमारी के वर्तमान विचार स्वास्थ्य को बीमारी की अनुपस्थिति से अधिक मानते हैं। यह महसूस करते हुए कि मनुष्य गतिशील प्राणी हैं जिनकी स्वास्थ्य की स्थिति सीए स्वास्थ्य और बीमारी के वर्तमान विचार स्वास्थ्य को बीमारी की अनुपस्थिति से अधिक के रूप में पहचानते हैं। यह महसूस करते हुए कि मनुष्य गतिशील प्राणी हैं जिनकी स्वास्थ्य की स्थिति दिन-प्रतिदिन या यहां तक ​​​​कि घंटे-घंटे बदल सकती है, स्वास्थ्य क्षेत्र के नेताओं का सुझाव है कि प्रत्येक व्यक्ति को स्नातक स्तर या निरंतर स्पेक्ट्रम (निरंतर) पर स्थित होना बेहतर है। ) स्पष्ट गंभीर बीमारी से लेकर स्पष्ट बीमारी की अनुपस्थिति से लेकर किसी के जीवन के हर पहलू में इष्टतम कामकाज की स्थिति तक"
        id={1}
      />
      <BodyCard
        img="https://i.pinimg.com/originals/a3/04/05/a30405aa47967c5b9ab46896312df093.jpg"
        heading="स्वस्थ रहें"
        para="इस वेब एप्लिकेशन का उपयोग करके महिलाएं आसानी से अपने स्वास्थ्य का सामना कर सकती हैं।"
        id={2}
      />
    </Container>
  );
}

export default HomePageBody;
