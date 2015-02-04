package com.polestar.cps.controller;

import com.polestar.cps.model.Book;
import com.polestar.cps.model.Page;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriTemplate;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;

import java.net.URI;
import java.util.*;
import java.util.concurrent.ConcurrentSkipListMap;
import java.util.concurrent.atomic.AtomicInteger;

import static java.util.Collections.singletonList;
import static org.springframework.web.bind.annotation.RequestMethod.*;

@Controller
@RequestMapping(value = "/book")
public class BookController {

	private final AtomicInteger curId = new AtomicInteger();
	private final Map<Integer,Book> books = new ConcurrentSkipListMap<Integer,Book>();

	@PostConstruct
	public void initSampleBookDatabase() {
		

		save(new Book("The Da Vinci Code", "Dan Brown", 2003, false));
		save(new Book("Think and Grow Rich", "Napoleon Hill", 1937, true));
		save(new Book("The Catcher in the Rye", "J. D. Salinger", 1951, true));
		save(new Book("O Alquimista (The Alchemist)", "Paulo Coelho", 1988, false));
		save(new Book("Steps to Christ", "Ellen G. White", 1892, true));
		save(new Book("Lolita", "Vladimir Nabokov", 1955, true));
		save(new Book("Heidis Lehr- und Wanderjahre (Heidi's Years of Wandering and Learning)", "Johanna Spyri", 1880, true));
		save(new Book("The Common Sense Book of Baby and Child Care", "Dr. Benjamin Spock", 1946, true));
		save(new Book("Anne of Green Gables", "Lucy Maud Montgomery", 1908, true));
		save(new Book("Black Beauty: His Grooms and Companions: The autobiography of a horse", "Anna Sewell", 1877, true));
		save(new Book("Il Nome della Rosa (The Name of the Rose)", "Umberto Eco", 1980, true));
		save(new Book("The Hite Report", "Shere Hite", 1976, true));
		save(new Book("Charlotte's Web", "E.B. White; illustrated by Garth Williams", 1952, true));
		save(new Book("The Tale of Peter Rabbit", "Beatrix Potter", 1902, true));
		save(new Book("Harry Potter and the Deathly Hallows", "J. K. Rowling", 2007, true));
		save(new Book("Jonathan Livingston Seagull", "Richard Bach", 1970, true));
		save(new Book("A Message to Garcia", "Elbert Hubbard", 1899, true));
		save(new Book("Angels and Demons", "Dan Brown", 2000, true));
		save(new Book("Как закалялась сталь (Kak zakalyalas' stal'; How the Steel Was Tempered)", "Nikolai Ostrovsky", 1932, true));
		save(new Book("Война и мир (Voyna i mir; War and Peace)", "Leo Tolstoy", 1869, true));
		save(new Book("Le avventure di Pinocchio. Storia di un burattino (The Adventures of Pinocchio)", "Carlo Collodi", 1881, true));
		save(new Book("You Can Heal Your Life", "Louise Hay", 1984, true));
		save(new Book("Kane and Abel", "Jeffrey Archer", 1979, true));
		save(new Book("Het Achterhuis (The Diary of a Young Girl, The Diary of Anne Frank)", "Anne Frank", 1947, true));

	}
	

	@RequestMapping(value = "/{id}", method = GET)
	public @ResponseBody Book read(@PathVariable("id") int id) {
		return books.get(id);
	}

	@RequestMapping(method = GET)
	public @ResponseBody Page<Book> listBooks(
			@RequestParam(value = "page", required = false, defaultValue = "1") int page,
			@RequestParam(value = "max", required = false, defaultValue = "20") int max) {
		final ArrayList<Book> booksList = new ArrayList<Book>(books.values());
		final int startIdx = (page - 1) * max;
		final int endIdx = Math.min(startIdx + max, books.size());
		return new Page<Book>(booksList.subList(startIdx, endIdx), page, max, books.size());
	}

	private Integer save(Book book) {
		final int id = curId.incrementAndGet();
		book.setId(id);
		books.put(id, book);
		return id;
	}

}