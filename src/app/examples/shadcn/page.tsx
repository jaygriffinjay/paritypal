"use client";

import { useState } from "react";
import {
  H1,
  H2,
  H3,
  Paragraph,
  Small,
  Bold,
  InlineCode,
  Text,
  Link,
} from "@/components/typography";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Kbd } from "@/components/ui/kbd";
import { Spinner } from "@/components/ui/spinner";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Toggle } from "@/components/ui/toggle";
import { Slider } from "@/components/ui/slider";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <H2>{title}</H2>
      <Separator />
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export default function ShadcnPage() {
  const [progress] = useState(62);
  const [sliderValue, setSliderValue] = useState([40]);
  const [checked, setChecked] = useState(true);
  const [toggled, setToggled] = useState(false);
  const [switchOn, setSwitchOn] = useState(true);

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <H2 className="sr-only">the vibes are immaculate</H2>
      <div className="mb-8 flex items-center justify-between">
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground text-sm transition-colors"
        >
          ← Home
        </Link>
        <ModeToggle />
      </div>

      <H1 className="mb-2">shadcn/ui Component Test</H1>
      <Paragraph className="text-muted-foreground mb-10">
        Basic examples of every major UI component. No frills.
      </Paragraph>

      <div className="space-y-14">
        {/* ── Button ── */}
        <Section title="Button">
          <div className="space-y-3">
            <Small className="block text-xs tracking-wide uppercase">
              Variants
            </Small>
            <div className="flex flex-wrap gap-2">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </div>
          <div className="space-y-3">
            <Small className="block text-xs tracking-wide uppercase">
              Sizes
            </Small>
            <div className="flex flex-wrap items-center gap-2">
              <Button size="lg">Large</Button>
              <Button size="default">Default</Button>
              <Button size="sm">Small</Button>
              <Button size="icon" aria-label="icon button">
                ★
              </Button>
            </div>
          </div>
          <div className="space-y-3">
            <Small className="block text-xs tracking-wide uppercase">
              States
            </Small>
            <div className="flex flex-wrap gap-2">
              <Button disabled>Disabled</Button>
              <Button variant="outline" disabled>
                Outline Disabled
              </Button>
            </div>
          </div>
        </Section>

        {/* ── Badge ── */}
        <Section title="Badge">
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </Section>

        {/* ── Alert ── */}
        <Section title="Alert">
          <Alert>
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              This is a default alert. Use it for general info or tips.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Something went wrong. Check the logs for details.
            </AlertDescription>
          </Alert>
        </Section>

        {/* ── Avatar ── */}
        <Section title="Avatar">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar className="size-12">
              <AvatarFallback className="text-lg">AB</AvatarFallback>
            </Avatar>
          </div>
        </Section>

        {/* ── Card ── */}
        <Section title="Card">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>
                A short description of what this card is about.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Paragraph>
                Card body content goes here. You can put anything inside.
              </Paragraph>
            </CardContent>
            <CardFooter className="gap-2">
              <Button size="sm">Save</Button>
              <Button size="sm" variant="outline">
                Cancel
              </Button>
            </CardFooter>
          </Card>
        </Section>

        {/* ── Skeleton ── */}
        <Section title="Skeleton">
          <div className="flex items-center gap-4">
            <Skeleton className="size-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
          <Skeleton className="h-24 w-full rounded-xl" />
        </Section>

        {/* ── Progress ── */}
        <Section title="Progress">
          <div className="space-y-2">
            <Small className="block">{progress}% complete</Small>
            <Progress value={progress} className="w-full" />
          </div>
          <div className="space-y-2">
            <Small className="block">0%</Small>
            <Progress value={0} className="w-full" />
          </div>
          <div className="space-y-2">
            <Small className="block">100%</Small>
            <Progress value={100} className="w-full" />
          </div>
        </Section>

        {/* ── Slider ── */}
        <Section title="Slider">
          <div className="space-y-3">
            <Small className="block">Value: {sliderValue[0]}</Small>
            <Slider
              value={sliderValue}
              onValueChange={setSliderValue}
              min={0}
              max={100}
              step={1}
              className="w-full"
            />
          </div>
        </Section>

        {/* ── Input / Textarea ── */}
        <Section title="Input & Textarea">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name…" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="disabled-input">Disabled</Label>
            <Input
              id="disabled-input"
              placeholder="Can't touch this"
              disabled
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Write something…" rows={4} />
          </div>
        </Section>

        {/* ── Checkbox ── */}
        <Section title="Checkbox">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox
                id="cb-1"
                checked={checked}
                onCheckedChange={(v) => setChecked(!!v)}
              />
              <Label htmlFor="cb-1">I agree to the terms</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="cb-2" disabled />
              <Label htmlFor="cb-2" className="text-muted-foreground">
                Disabled checkbox
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="cb-3" checked disabled />
              <Label htmlFor="cb-3" className="text-muted-foreground">
                Checked + disabled
              </Label>
            </div>
          </div>
        </Section>

        {/* ── Switch ── */}
        <Section title="Switch">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Switch
                id="sw-1"
                checked={switchOn}
                onCheckedChange={setSwitchOn}
              />
              <Label htmlFor="sw-1">
                Notifications{" "}
                <Text className="text-muted-foreground text-sm">
                  ({switchOn ? "on" : "off"})
                </Text>
              </Label>
            </div>
            <div className="flex items-center gap-3">
              <Switch id="sw-2" disabled />
              <Label htmlFor="sw-2" className="text-muted-foreground">
                Disabled
              </Label>
            </div>
          </div>
        </Section>

        {/* ── Radio Group ── */}
        <Section title="Radio Group">
          <RadioGroup defaultValue="option-2" className="space-y-2">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-1" id="r1" />
              <Label htmlFor="r1">Option One</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-2" id="r2" />
              <Label htmlFor="r2">Option Two</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-3" id="r3" disabled />
              <Label htmlFor="r3" className="text-muted-foreground">
                Option Three (disabled)
              </Label>
            </div>
          </RadioGroup>
        </Section>

        {/* ── Toggle ── */}
        <Section title="Toggle">
          <div className="flex flex-wrap gap-2">
            <Toggle pressed={toggled} onPressedChange={setToggled}>
              {toggled ? "On" : "Off"}
            </Toggle>
            <Toggle variant="outline">Outline</Toggle>
            <Toggle disabled>Disabled</Toggle>
          </div>
        </Section>

        {/* ── Select ── */}
        <Section title="Select">
          <div className="space-y-2">
            <Label htmlFor="framework-select">Framework</Label>
            <Select>
              <SelectTrigger id="framework-select" className="w-56">
                <SelectValue placeholder="Pick a framework…" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="next">Next.js</SelectItem>
                <SelectItem value="remix">Remix</SelectItem>
                <SelectItem value="astro">Astro</SelectItem>
                <SelectItem value="vite">Vite</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Section>

        {/* ── Tabs ── */}
        <Section title="Tabs">
          <Tabs defaultValue="preview">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
              <TabsTrigger value="docs">Docs</TabsTrigger>
            </TabsList>
            <TabsContent value="preview" className="mt-4">
              <Paragraph>
                This is the <Bold>Preview</Bold> tab content.
              </Paragraph>
            </TabsContent>
            <TabsContent value="code" className="mt-4">
              <InlineCode className="block p-4 text-sm">
                {'<Button variant="default">Hello</Button>'}
              </InlineCode>
            </TabsContent>
            <TabsContent value="docs" className="mt-4">
              <Paragraph className="text-muted-foreground">
                Read the{" "}
                <Link href="https://ui.shadcn.com" target="_blank">
                  official docs
                </Link>{" "}
                for full API reference.
              </Paragraph>
            </TabsContent>
          </Tabs>
        </Section>

        {/* ── Accordion ── */}
        <Section title="Accordion">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is shadcn/ui?</AccordionTrigger>
              <AccordionContent>
                <Paragraph className="text-muted-foreground text-sm">
                  A collection of accessible, composable components built on
                  Radix UI and Tailwind CSS.
                </Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it a component library?</AccordionTrigger>
              <AccordionContent>
                <Paragraph className="text-muted-foreground text-sm">
                  No — you copy the source into your project.{" "}
                  <Bold>You own the code.</Bold>
                </Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I customize it?</AccordionTrigger>
              <AccordionContent>
                <Paragraph className="text-muted-foreground text-sm">
                  Yes, completely. Edit the component file directly — it's your
                  codebase.
                </Paragraph>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Section>

        {/* ── Tooltip ── */}
        <Section title="Tooltip">
          <div className="flex flex-wrap gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>Plain tooltip</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="secondary">With shortcut</Button>
              </TooltipTrigger>
              <TooltipContent>
                <Text>Save file</Text> <Kbd>⌘</Kbd> <Kbd>S</Kbd>
              </TooltipContent>
            </Tooltip>
          </div>
        </Section>

        {/* ── Kbd ── */}
        <Section title="Kbd">
          <Paragraph>
            Open palette: <Kbd>⌘</Kbd> <Kbd>K</Kbd> · Save: <Kbd>⌘</Kbd>{" "}
            <Kbd>S</Kbd> · Undo: <Kbd>⌘</Kbd> <Kbd>Z</Kbd> · Format:{" "}
            <Kbd>⌘</Kbd> <Kbd>Shift</Kbd> <Kbd>F</Kbd>
          </Paragraph>
        </Section>

        {/* ── Spinner ── */}
        <Section title="Spinner">
          <div className="flex flex-wrap items-center gap-6">
            <Spinner className="size-3" />
            <Spinner />
            <Spinner className="size-6" />
            <div className="flex items-center gap-2">
              <Spinner className="size-3" />
              <Small>Loading…</Small>
            </div>
          </div>
        </Section>

        {/* ── Breadcrumb ── */}
        <Section title="Breadcrumb">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/shadcn">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Section>

        {/* ── Table ── */}
        <Section title="Table">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Role</TableHead>
                <TableHead className="text-right">Joined</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Bold>Alice</Bold>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-emerald-500">
                    Active
                  </Badge>
                </TableCell>
                <TableCell>
                  <Small>Admin</Small>
                </TableCell>
                <TableCell className="text-right">
                  <Small>Jan 2024</Small>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Bold>Bob</Bold>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">Inactive</Badge>
                </TableCell>
                <TableCell>
                  <Small>Editor</Small>
                </TableCell>
                <TableCell className="text-right">
                  <Small>Mar 2024</Small>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Bold>Carol</Bold>
                </TableCell>
                <TableCell>
                  <Badge variant="destructive">Banned</Badge>
                </TableCell>
                <TableCell>
                  <Small>Viewer</Small>
                </TableCell>
                <TableCell className="text-right">
                  <Small>Jun 2024</Small>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Section>
      </div>
    </div>
  );
}
