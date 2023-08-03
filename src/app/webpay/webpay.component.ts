import { Component, OnInit } from '@angular/core';
import { WebpayService } from '../services/webpay.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-webpay',
  templateUrl: './webpay.component.html',
  styleUrls: ['./webpay.component.css']
})
export class WebpayComponent implements OnInit{

  nombreCliente: string = "";
  monto: number = 0;
  buyOrder: number = 0;
  token_ws: string = "";
  url: string = "";

  constructor(private webpayService: WebpayService,
              private router: Router) { }

  ngOnInit(): void {
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  onSubmit(): void {
    
    const transactionData = {
      buy_order: "ordenCompra12345678",
      session_id: "sesion1234557545",
      amount: 10000,
      return_url: "http://localhost:4200"
    }
    this.webpayService.getTransaction(transactionData).subscribe((response) =>{
      this.token_ws = response.token;
      this.url = response.url;
      this.redirectToWebpay();
    },
    (error) => {
      console.error("Error al obtener la transaccion: ", error)
    })

    
  }

  redirectToWebpay(){
    const form = document.createElement('form');
    form.action = this.url; 
    form.method = 'POST';

  
    const tokenInput = document.createElement('input');
    tokenInput.type = 'hidden';
    tokenInput.name = 'token_ws';
    tokenInput.value = this.token_ws;


    form.appendChild(tokenInput);

    document.body.appendChild(form);
    form.submit();
  }
  getBuyOrder(): string{
    return 'order' + this.buyOrder++;
  }
}
