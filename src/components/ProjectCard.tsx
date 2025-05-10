"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@/once-ui/components";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  liveLink?: string;
  githubLink?: string;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  images = [],
  title,
  content,
  description,
  avatars,
  liveLink,
  githubLink
}) => {
  return (
    <Column fillWidth gap="m">
      <Carousel
        sizes="100vw"
        images={images.map((image) => ({
          src: image,
          alt: title,
        }))}
      />
      <Flex
        mobileDirection="column"
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {title && (
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Flex>
        )}
        <Column flex={7} gap="16">
          {description?.trim() && (
            <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
              {description}
            </Text>
          )}
          <Flex gap="24" wrap>
            {githubLink && (
              <SmartLink
                suffixIcon="arrowUpRightFromSquare"
                style={{ margin: "0", width: "fit-content" }}
                href={githubLink}
              >
                <Text variant="body-default-s">Github</Text>
              </SmartLink>
            )}
            {liveLink && (
              <SmartLink
                suffixIcon="arrowUpRightFromSquare"
                style={{ margin: "0", width: "fit-content" }}
                href={liveLink}
              >
                <Text variant="body-default-s">Live Demo</Text>
              </SmartLink>
            )}
          </Flex>
        </Column>
      </Flex>
    </Column>
  );
};
