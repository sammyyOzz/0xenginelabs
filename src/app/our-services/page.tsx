import ServicesCard from "@/components/services-card";
import Container from "@/components/ui/container";
import { Box, Heading, Text } from "@chakra-ui/react";
import softwareImage from "@/assets/images/software-dev.jpeg";
import digitalImage from "@/assets/images/digital-transformation.jpeg";
import businessImage from "@/assets/images/business-process.jpeg";
import solutionsImage from "@/assets/images/software-solutions.jpeg";
import blockchainImage from "@/assets/images/blockchain.jpeg";
import Footer from "@/components/footer";

function OurServices() {
  return (
    <Box bg="#000000" py={20} minH="100vh">
      <Container>
        <Heading fontSize="6xl" mb={16}>
          Our Services
        </Heading>

        <ServicesCard
          title="custom software development"
          imageUrl={softwareImage}
        >
          <Text>
            We specialize in developing tailored software solutions that address
            the unique needs of your business. Our approach begins with a
            comprehensive understanding of your specific requirements and
            challenges. By collaborating closely with your team, we ensure that
            our custom software aligns perfectly with your business objectives
            and operational workflows.
          </Text>
          <Text>
            Our solutions are designed to optimize performance, providing you
            with tools that enhance efficiency and productivity. Seamless
            integration with your existing systems is a priority, ensuring a
            smooth transition and minimal disruption to your operations. We
            focus on delivering software that is not only functional but also
            intuitive and user-friendly.
          </Text>
          <Text>
            In addition to performance and integration, we emphasize the
            importance of scalability and flexibility. Our software is built to
            adapt to your evolving needs, allowing you to stay agile in a
            competitive market. We employ the latest technologies and best
            practices to ensure reliability, security, and long-term success.
            Trust us to deliver innovative, high-quality software solutions that
            empower your business.
          </Text>
        </ServicesCard>

        <ServicesCard
          title="digital transformation consulting"
          imageUrl={digitalImage}
        >
          <Text>
            We offer strategic guidance for integrating modern technologies,
            designed to enhance your business processes and drive innovation.
            Our experts work closely with your team to identify and implement
            cutting-edge solutions that align with your unique goals and
            challenges. By leveraging the latest advancements, we help you
            improve efficiency, productivity, and competitiveness.
          </Text>
          <Text>
            Our approach focuses on creating a seamless integration of new
            technologies with your existing systems, ensuring minimal disruption
            and maximum benefit. We prioritize scalability and flexibility,
            allowing your business to adapt and thrive in a constantly evolving
            market.
          </Text>
          <Text>
            Beyond just implementation, we provide ongoing support and insights
            to foster a culture of continuous improvement and innovation. Our
            goal is to empower your business with the tools and knowledge needed
            to stay ahead of the curve and achieve sustainable growth.
          </Text>
          <Text>
            Trust us to be your partner in navigating the complexities of
            digital transformation and driving long-term success
          </Text>
        </ServicesCard>

        <ServicesCard
          title="custom software solutions"
          imageUrl={solutionsImage}
        >
          <Text>
            We specialize in developing bespoke software tailored to meet your
            specific business requirements, enhancing both efficiency and
            functionality. Our process begins with a thorough understanding of
            your unique challenges and goals. By collaborating closely with your
            team, we design and implement custom software solutions that
            seamlessly integrate with your existing systems and processes.
          </Text>
          <Text>
            Our focus is on optimizing performance and ensuring that our
            solutions not only meet but exceed your expectations. With a
            commitment to innovation and quality, we deliver software that
            drives productivity, streamlines operations, and supports your
            long-term business objectives.
          </Text>
          <Text>
            Our bespoke software solutions are designed to be scalable and
            adaptable, allowing your business to remain agile and competitive in
            a rapidly changing market. Trust us to provide the expertise and
            support needed to achieve sustainable growth and success. Partner
            with us to unlock the full potential of your business through
            customized software solutions
          </Text>
        </ServicesCard>

        <ServicesCard
          title="business process automation"
          imageUrl={businessImage}
        >
          <Text>
            We streamline operations through automated workflows, significantly
            improving efficiency and reducing manual tasks. Our solutions are
            designed to optimize your business processes, allowing your team to
            focus on more strategic activities.
          </Text>

          <Text>
            By automating repetitive tasks, we help minimize errors and increase
            productivity, leading to faster and more reliable outcomes.
          </Text>

          <Text>
            Our tailored automation strategies ensure seamless integration with
            your existing systems, providing a smooth transition and immediate
            benefits. Trust us to transform your operations, enhance
            performance, and drive sustained growth with cutting-edge automation
            technology.
          </Text>
        </ServicesCard>

        <ServicesCard
          title="Custom Blockchain Solutions & Smart Contract Development"
          imageUrl={blockchainImage}
        >
          <Text>
            At our core, we specialize in crafting custom blockchain solutions
            and developing smart contracts that precisely fit your requirements.
            Our dedicated team excels in creating secure, transparent, and
            efficient blockchain applications that harness the power of
            decentralized technology.
          </Text>
          <Text>
            We prioritize understanding your unique business needs to deliver
            tailored solutions that seamlessly integrate with your existing
            infrastructure. By leveraging cutting-edge blockchain frameworks and
            protocols, we ensure robust performance and scalability.
          </Text>
          <Text>
            Our smart contracts are meticulously designed to automate processes,
            enforce agreements, and facilitate secure transactions without
            intermediaries. This not only reduces operational costs and errors
            but also enhances transaction speed and reliability.
          </Text>
          <Text>
            Trust us to navigate the complexities of blockchain technology,
            providing you with innovative solutions that optimize your business
            operations and drive growth. Whether you are exploring blockchain
            for its potential in enhancing transparency or seeking smart
            contracts to streamline your workflows, we are committed to
            delivering solutions that empower your business in the evolving
            digital economy.
          </Text>
        </ServicesCard>

        <Footer />
      </Container>
    </Box>
  );
}

export default OurServices;
