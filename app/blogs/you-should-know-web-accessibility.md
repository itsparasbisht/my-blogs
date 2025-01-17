## Why worry about accessibility?

To start off, let me tell you that there have been numerous legal cases regarding web accessibility, especially in the United States, where companies have been sued for having websites that are not accessible to people with disabilities.

These lawsuits often claim violations of the Americans with Disabilities Act (ADA), which requires businesses to ensure that individuals with disabilities have equal access to their services, including online services.

In the U.S., most web accessibility lawsuits cite Title III of the ADA, which prohibits discrimination against individuals with disabilities in places of public accommodation (e.g., stores, hotels, restaurants). The law, although written before the digital age, has been interpreted to apply to websites and mobile apps.

In the European Union, the European Accessibility Act sets accessibility requirements, and the Web Accessibility Directive (which took effect in 2018) requires public sector websites and apps to meet accessibility standards, specifically adhering to WCAG 2.1 (Web Content Accessibility Guidelines).

Other countries, such as Canada (through the Accessible Canada Act) and Australia, have also implemented laws to promote web accessibility and prevent discrimination.

It is important for us to understand how to make our applications accessible to everyone, even if our primary intent isn't to cater to all users. Doing so not only ensures inclusivity but also helps us build better, more accessible applications.

<br>

---

## I'll be sharing few things with you to get you started with accessibility.

Web accessibility is like giving your website superhero powers so everyone, including people with disabilities, can use it. Think of it as adding ramps, braille, and voice commands to your digital universe! The goal? Make sure no one’s stuck at the door of your site, wishing they had superhuman sight or hearing.

Technologies that benefit from accessible web content include:

- **Screen readers**: Tools that convert text into speech or Braille, helping visually impaired users navigate websites.
- **Speech recognition software**: Allows users to control computers or input text using voice commands, essential for those with limited mobility.
- **Alternative input devices**: Devices like adaptive keyboards, switch systems, or eye-tracking technology that assist users with physical disabilities in interacting with web content.

These technologies ensure that people with diverse abilities can fully experience the web.

## Accessibility tree

When we create our web pages, the browser does two important things:

- It converts the HTML into visual elements.
- It also creates the accessibility tree.

Below is an example of the accessibility tree. You can use your browser's developer tools to access it.  
Just look up the steps yourself!

![](https://i.ibb.co/X2WcDjN/Screenshot-2024-10-11-191302.png)

## Now, let’s explore how we can improve the accessibility of our applications.

---

## Always Use Semantic HTML

You might have often heard the advice to use semantic HTML tags, but what does that really mean? It means using the right element for the right purpose.

When we use semantic HTML, the browser correctly generates the accessibility tree, which allows assistive technologies to interpret the website content properly.

For example, using a `<div>` as a button can cause issues. In the accessibility tree, a `<div>` lacks the context needed for assistive devices to recognize it as a button. This can confuse users relying on screen readers. That's why it's essential to use semantic HTML, like `<button>`, for interactive elements to ensure proper accessibility.

## Accessibility Guidelines: WCAG

The **Web Content Accessibility Guidelines (WCAG)** are a set of international standards designed to ensure web content is accessible to all users, including those with disabilities. Created by the **World Wide Web Consortium (W3C)**, WCAG provides detailed guidelines to help developers, designers, and content creators make their websites usable by individuals who may rely on assistive technologies.

### WCAG compliance level

WCAG has three levels of conformance to help organizations prioritize their accessibility efforts:

- **Level A** (Minimum): The most basic web accessibility features. Compliance with this level is essential, but alone, it may not be sufficient for all users.

- **Level AA** (Mid-range): A higher level of accessibility that deals with the biggest barriers faced by users with disabilities. Most legal requirements around the world are based on this level.
- **Level AAA** (Highest): The most rigorous level, aiming to make web content accessible to all users. This level is challenging to achieve for all content.

[Checkout the WCAG 2 checklist](https://webaim.org/standards/wcag/checklist)

Let's explore how we can ensure our application content complies with these levels of accessibility.

## Text contrast

If your text contrast is:

- **< 4.5**: Considered poor (Level A)
- **≥ 4.5 and < 7**: Considered good (meets Level AA)
- **≥ 7**: Considered great (meets Level AAA)

You can check your text contrast using the developer tool's element inspector. Simply select the element and open the color picker property.

Below is an image showing the text contrast for the selected text, which is **16.85** and meets **AAA** standards.

![](https://i.ibb.co/d2gPB1d/Screenshot-2024-10-11-135606.png)
<br>

---

## Alternative Text (Alt Text)

Some users cannot see images, and **alternative text (alt text)** ensures they still understand the content of your website. Alt text provides a textual description of images and is vital for:

- People with little or no vision, who rely on screen readers.
- Users who have disabled images in their browser.
- Search engines, which use alt text to understand image content for indexing.

### Key Points about Alt Text:

- The **alt** attribute is read by screen readers to describe images for visually impaired users.
- For images that are purely decorative, provide **empty alt text** (`alt=""`). This prevents screen readers from reading unnecessary filenames.
- Alt text should be **concise**, yet descriptive enough to convey the purpose of the image.
- It also plays a role when images **fail to load**, offering a fallback to inform users what should be there.

### Best Practices for Alt Text:

- Keep it short and to the point, while still providing meaningful information.
- Don’t forget to **add a full stop** at the end of your alt text. It signals the end of the description for screen readers, making the experience smoother for users.

By providing proper alt text, you're not only making your website more accessible, but you're also enhancing the user experience for a wide range of visitors.  
<br>

---

## Links

When creating links, always use the `<a>` tag. Links are an essential part of web navigation, and they must be clear and understandable to all users, including those using assistive technologies.

### Best Practices for Accessible Links:

- Links should have **non-ambiguous text**. The link text should clearly describe where the link will take the user. For example, avoid using vague phrases like "Click here" or "Read more." Instead, use descriptive text like "View our product catalog" or "Learn more about accessibility."
- If your link doesn't contain text that clearly explains its purpose (e.g., an image used as a link), you can use the `aria-label` attribute to provide additional context. This helps screen readers convey the link's destination to users with visual impairments.  
  <br>

      ```html
      <a href="https://example.com" aria-label="Go to homepage">
          <img src="logo.png" alt="Company Logo">
      </a>
      ```

### Why Non-Ambiguous Links Matter:

- Non-ambiguous link text improves the **usability** and **accessibility** of your site. Everyone, including users of assistive technologies, should be able to understand where a link will lead just by reading or hearing the link text.
- Descriptive links also help with **SEO**, as search engines can better understand the relevance of your content.

![](https://i.ibb.co/R6s4wBq/Screenshot-2024-10-11-142422.png)

Giving links an underline and bold appearance enhances accessibility, as it is a widely recognized visual cue that indicates interactive elements. This helps users easily identify links on a page.  
<br>

---

## Labels

Labels are crucial for making form elements accessible to all users, including those with disabilities. Properly labeled form fields help screen readers communicate the purpose of each input, ensuring users with visual impairments can navigate and understand forms.

```html
<label for="email">Email Address:</label>
<input type="email" id="email" />
```

- **Enhanced Click Area**: Clicking on the label focuses the associated input, improving the user experience, especially for users with motor disabilities.

- **Accessible Forms**: Without proper labels, forms become confusing for users who rely on assistive technologies, as they may not understand the purpose of each field.

### Best Practices for Labels:

- Always associate labels with form elements using the `for` attribute or wrap the input inside the `<label>` tag.
- Ensure labels are concise yet descriptive enough to convey the purpose of the input field.

By providing well-structured and properly associated labels, you enhance both the usability and accessibility of your web forms.

**Note:** Placeholders are not a substitute for labels.

![](https://i.ibb.co/fDTW9m6/Screenshot-2024-10-11-190754.png)
<br>

---

## Headings

Headings are vital for structuring web content. Headings allow screen reader users to quickly scan through content and jump to the sections they are most interested in. Without proper headings, it becomes challenging for users to comprehend the structure of the content.

Headings provide a clear structure for both visual users and those using assistive technologies. A well-organized heading structure (e.g., starting with `<h1>` and proceeding down with `<h2>`, `<h3>`, etc.) creates a logical content flow.

### Best Practices for Headi...
