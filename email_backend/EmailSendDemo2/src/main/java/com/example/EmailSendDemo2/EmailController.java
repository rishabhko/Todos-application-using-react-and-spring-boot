package com.example.EmailSendDemo2;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.*;

import javax.mail.*;
import javax.mail.internet.*;
import java.io.IOException;
import java.util.Date;
import java.util.Properties;
import java.util.Random;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class EmailController {
    private String code;

    public EmailController(String code) {
        this.code = code;
    }

    public EmailController() {
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    @PostMapping(value = "/sendmail")
    public String sendEmail(@RequestBody EmailFormat emailFormat)
    {
        try {
            String result=sendmail(emailFormat);
            return "success";
        } catch (MessagingException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "Emails not sent successfully";
    }

    private String sendmail(EmailFormat emailFormat) throws AddressException, MessagingException, IOException {
        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");

        Session session = Session.getInstance(props, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("<senders_email", "<sender's_password");
            }
        });
        Message msg = new MimeMessage(session);
        msg.setFrom(new InternetAddress("<recipent_email>", false));

        msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(emailFormat.getEmail()));
        msg.setSubject("Testing");
        msg.setContent("we got this", "text/html");
        msg.setSentDate(new Date());

        Random rand = new Random();
        String id=String.format("%04d", rand.nextInt(10000));
        System.out.println(id);
        code=id;
//        setCode(id);

        MimeBodyPart messageBodyPart = new MimeBodyPart();
        messageBodyPart.setContent("Your OTP for TOdo Login is: "+id, "text/html");

        Multipart multipart = new MimeMultipart();
        multipart.addBodyPart(messageBodyPart);
        MimeBodyPart attachPart = new MimeBodyPart();

        attachPart.attachFile("/home/rishabh.kohli/Desktop/resume.png");
        multipart.addBodyPart(attachPart);
        msg.setContent(multipart);
        Transport.send(msg);
        return id;
    }

    @PostMapping("code/{code}")
    public Boolean checkCode(@PathVariable String code){





        System.out.println(this.code);
        System.out.println(code);
        System.out.println(code.getClass().getSimpleName());
        System.out.println(this.code.getClass().getSimpleName());
        if (code.equals(this.code))
        {
            return true;
        }
        else
            return false;
    }
}
