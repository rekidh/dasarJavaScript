var timerClock;
var listHari = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]
var listBulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"]

$(document).ready(function() 
{	
	init();
	getCredit();
	getSetting();
	getBroadcast();
	getBankOnline();
	getMemoTotal();
	getWinBet();
	getDepoWD();
	getRekening();
	
	//
	$.ajax({url: "webdata.php?status=time", success: function(result){
			timerClock = setInterval(function () {
				result++; writeTime(result);
			},1000);
		}});
	
	setInterval(function () {
	   getCredit();
    },10000);
	
	setInterval(function () {
	   getStatus();
	   getWinBet();
	   getDepoWD();
	   checkLastLoginPro();
	   //checkIPPro()
	   getStatusMaintenance();
    },60000);
	
	setInterval(function () {
	   //getBroadcast();
	   //getBankOnline();
	   getMemoTotal();
    },60000);
	
	setInterval(function () {
	   clearInterval(timerClock);
		$.ajax({url: "webdata.php?status=time", success: function(result){
			timerClock = setInterval(function () {
				result++; writeTime(result);
			},1000);
		}});
    },120000);
	
});

var loadingImg = "<img src=\"images/loading.gif\" width=\"50\">";
var loadingImgSmall = "<img src=\"images/loading.gif\" width=\"20\">";

// CHECK AUTO KICK

function writeTime(result)
{
	var t = new Date(result * 1000);
	var hari = listHari[t.getDay()];
	var tgl = t.getDate()+' '+listBulan[t.getMonth()];
	var jam = t.getHours(); if (jam < 10) jam = '0'+jam;
	var menit = t.getMinutes(); if (menit < 10) menit = '0'+menit;
	var detik = t.getSeconds(); if (detik < 10) detik = '0'+detik;
	var jamk = jam+':'+menit+':'+detik;
	var gmt = '[ GMT+'+(t.getTimezoneOffset()/60*-1)+' ]';
	
	$('#timenow').html(hari+', '+tgl+' '+jamk+' '+gmt);
}

function checkIP()
{
	$.ajax({url: "data.php?task=checkIP", success: function(result){
		if (result != "go")
		{
			quit();
		}			
	}});
}

function salinnorek()
		{
			$('#norek').select();
			document.execCommand("copy");
			$('#notesalin').fadeIn(100);
			setTimeout(function () { $('#notesalin').fadeOut(500); }, 1000); 
		}

function checkLastLogin()
{
	$.ajax({url: "data.php?task=checkLastLogin", success: function(result){
		if (result != "go")
		{
			quit();
		}			
	}});
}

function checkIPPro()
{
	$.ajax({url: "data.php?task=checkIPPro", success: function(result){
		if (result == "stop")
		{
			quit();
		}			
	}});
}

function checkLastLoginPro()
{
	$.ajax({url: "data.php?task=checkLastLoginPro", success: function(result){
		if (result == "stop")
		{
			quit();
		}			
	}});
}

function quit()
{
	$.ajax({url: "data.php?task=logout", success: function(result){
			window.location='index.php';
			}});
}

//


function getStatusMaintenance()
{
	$.ajax({url: "webdata.php?status=maintenance", success: function(result){
		if (result == '1') 
		{
			alert('Website is under Maintenance')
			window.location.replace("maintenance.php");
		}
	}});
}

function getRekening()
{
	$.ajax({url: "data.php?content=rekening", success: function(result){
		$('#rekening').html(result);
		$('#rekening').fadeIn(500);
	}});
}

function getMimpi()
{
	var dimensi = $('.dimensi').val();
	var vsearch = $('.search').val();
	
	if (dimensi == "" && vsearch == "") dimensi = "2D";
	
	$.ajax({url: "data.php?content=mimpi&dimensi="+dimensi+"&search="+vsearch, success: function(result){
		$('#mimpi_content').html(result);
		$('#mimpi_content').fadeIn(500);
	}});
}


function getBankOnline()
{
	$.ajax({url: "data.php?content=bankonline", success: function(result){
		$('#bankOnline').html(result);
		$('#bankOnline').fadeIn(500);
	}});
}

function getDeposit()
{
	$('#statusDeposit').hide();
	$('#deposit_form').html(loadingImg);
	$.ajax({url: "data.php?form=deposit", success: function(result){
		$('#deposit_form').html(result);
		$('#deposit_form').fadeIn(500);
	}});
}

function getWithdraw()
{
	$('#statusWithdraw').hide();
	$('#withdraw_form').html(loadingImg);
	$.ajax({url: "data.php?form=withdraw", success: function(result){
		$('#withdraw_form').html(result);
		$('#withdraw_form').fadeIn(500);
	}});
}

function getBetHistory(pasaranid,periode,betid,page)
{
	$('#transaksi .content').html(loadingImg);
	$.ajax({url: "data.php?content=detailTransaksi&pasaranid="+pasaranid+"&periode="+periode+"&betid="+betid+"&page="+page, success: function(result){
		$('#transaksi .content').html(result);
		$('#transaksi .content').fadeIn(500);
	}});
	
}

function getWinHistory(pasaranid,periode,betid,page,win)
{
	$('#transaksi .content').html(loadingImg);
	$.ajax({url: "data.php?content=detailWin&pasaranid="+pasaranid+"&periode="+periode+"&betid="+betid+"&page="+page+"&win="+win, success: function(result){
		$('#transaksi .content').html(result);
		$('#transaksi .content').fadeIn(500);
	}});
	
}

function toLink(mainlink, sublink)
{
	$('#tab_dashboard').siblings().removeClass('active');
	$('#tab_dashboard').addClass('active');
	$('#dashboard_wrap').siblings().removeClass('in active');
	$('#dashboard_wrap').addClass('in active');
	$('#menu_dashboard_'+mainlink).siblings().removeClass('active');
	$('#menu_dashboard_'+mainlink).addClass('active');
	$('#'+sublink).addClass('in active');	
	$('#'+sublink).siblings().removeClass('in active');	
}

function toHome()
{
	toLink('peraturan', 'peraturan');
	$('#info').siblings().removeClass('in active');
	$('#info').addClass('in active');
	$('#nav-peraturan').siblings().removeClass('active');
	$('#nav-peraturan').addClass('active');
	
}

function toGameSlot()
{
	toLink('slot', 'slot');
}

function toMyAccount()
{
	toLink('myaccount', 'account');
}

function toWithdraw()
{
	toLink('withdraw', 'withdraw');
	getWithdraw();
}

function toDeposit()
{
	toLink('deposit', 'deposit');
	getDeposit();
}

function toMemo()
{
	toLink('memo', 'memo');
	getMemo();
}

function toTransaksi()
{
	toLink('transaksi', 'transaksi');
	getTransaksi(1);
}

function toRekening()
{
	toLink('rekening', 'userrekening');
	getRekening();
}

function clickFunction(pasaran) {
	
	var pasar = pasaran.substr(1);
	
	var UserData = function () {
	  this.credit = 0;
	  this.totalBayar = 0;
	};
	
	var userData = new UserData();
	
	ribuanForm('.rf');
	
	$(document).on("click", pasaran+" .okbutton", function()
		{
			var pasar = pasaran.substr(1);
			linkGame4D(pasaran, pasar, '4dQb', 'qb','4D3D2D');
		
		});
	
	$(document).on("click", pasaran+" .cancel", function()
		{
			/*
			var game = $(this).attr('game');
			var pasar = pasaran.substr(1);
			if (game == '4dqb')
			{
				linkGame4D(pasaran, pasar, '4dQb', 'qb','4D3D2D');
			}
			else
			{
				linkGame(pasaran, pasar, game);
			}
			*/
			
			$(pasaran+" .dataConfirm").html("");
			$(pasaran+" .formConfirm").hide();
			$(pasaran+" .formContainer").show();
			$(pasaran+" .peraturanContainer").show();
		});
		
	$(document).on("click", pasaran+" .confirm", function()
		{
			$(pasaran+' .confirm').prop('disabled', true);
			$(pasaran+' .confirm').attr("disabled", true);
			
			userData.credit = $('.credit').val();
			var game = $(pasaran+" .cancel").attr('game');
			var pasar = pasaran.substr(1);
			var max_lose = $('#max_lose').val();
			
			if (userData.credit >= userData.totalBayar-max_lose)
			{
			$(pasaran+" .formConfirm").hide();
			$(pasaran+" .formContainer").hide();
			$(pasaran+" .peraturanContainer").hide();
			
			$(pasaran+" .statusBox").removeClass('alert alert-success alert-danger alert-warning text-center glyphicon glyphicon-alert').addClass("alert alert-warning text-center").text(' Tunggu Sebentar...').fadeIn(500);
			
			  $.post("form.php",
				$(pasaran+' .'+game+'_form').serialize(),
				function(data)
				{
					//alert(data);
					  if (data == 'success')
					  {
						  setTimeout(function ()
						  {
						  	$(pasaran+' .statusBox').fadeOut(500,function() 
							{
								$(pasaran+' .statusBox')
									.removeClass('alert alert-warning text-center glyphicon glyphicon-alert')
									.addClass("alert alert-success text-center")
									.html('Terima kasih, Data berhasil disubmit!<input type="submit" class="btn btn-block btn-success pull-right okbutton" style="margin-top:20px" value="Lanjut"><div style="clear:both"></div>').fadeIn(1000);
								
							});
							
						   }, 1000); 
						   
						  setTimeout(function ()
						  {
						  	getCredit();
							
						   }, 4000); 
					  } 
					  else
					  {
						  setTimeout(function ()
						  {
						  	$(pasaran+' .statusBox').fadeOut(500,function() 
							{
								$(pasaran+' .statusBox')
									.removeClass('alert alert-warning text-center glyphicon glyphicon-alert')
									.addClass("alert alert-danger text-center")
									.html(data).fadeIn(1000);
							});							
						  }, 1000); 
					  }

					  $(pasaran+' .confirm').prop('disabled', false);
					  $(pasaran+' .confirm').removeAttr("disabled");
					
				});
				return false; //not to post the form physically
			}
			
			else
			{
				alert('Total Lebih Besar Dari Credit Anda, Silakan Depo terlebih dahulu');	
			}
		});	
	
	$(document).on("input", pasaran+' .bbset_form .nomor, '+pasaran+' .4dqb_form .nomor, '+pasaran+' .set_form .nomor', function()
	{	
		var nomor = onlyNumber(nonribuan($(this).val()));
		$(this).val(nomor);
		
		if($(this).val().length == $(this).attr('maxlength')) 
		{ $(this).next("input").focus(); }
	});
	
	$(document).on("change", pasaran+' .nomor', function()
	{
					var att = $(this).attr("att");
					var game = $(pasaran+' .bet'+att).attr("game");
					
					if (game == "colokmacau")
					{
						var nomor1 = $(pasaran+' .nomor'+att).val();
						var nomor2 = $(pasaran+' .nomor2'+att).val();
						
						if (nomor1 != "" && nomor2 != "")
						{
							if (nomor1 == nomor2)
							{
								alert('Nomor tidak boleh sama!');
								$(pasaran+' .bet'+att).val("");
								$(pasaran+' .potongan'+att).val("");
								$(pasaran+' .bayar'+att).val("");
								$(pasaran+' .nomor'+att).val("");
								$(pasaran+' .nomor2'+att).val("");
								hitungForm(pasaran);
							}
							else
							if ($(pasaran+' .checkBet').is(':checked') && att != 0) 
							{ 
								$(pasaran+' .bet'+att).val($(pasaran+' .bet0').val()); 
								hitungForm(pasaran);
							}
						}
					}
					else
					if (game == "colokjitu")
					{
						var nomor = $(pasaran+' .nomor'+att).val();
						var posisi = $(pasaran+' .posisi'+att).val();
						
						if (nomor != "" && posisi != "")
						{
							if ($(pasaran+' .checkBet').is(':checked') && att != 0) 
							{ 
								$(pasaran+' .bet'+att).val($(pasaran+' .bet0').val()); 
								hitungForm(pasaran);
							}
						}
					}
					else
					if (game == "coloknaga")
					{
						
						var nomor1 = $(pasaran+' .nomor'+att).val();
						var nomor2 = $(pasaran+' .nomor2'+att).val();
						var nomor3 = $(pasaran+' .nomor3'+att).val();
						
						if (nomor1 != "" && nomor2 != "" && nomor3 != "")
						{
							
							if (nomor1 == nomor2 || nomor2 == nomor3 || nomor1 == nomor3)
							{
								alert('Nomor tidak boleh ada yg sama!');
								$(pasaran+' .bet'+att).val("");
								$(pasaran+' .potongan'+att).val("");
								$(pasaran+' .bayar'+att).val("");
								$(pasaran+' .nomor'+att).val("");
								$(pasaran+' .nomor2'+att).val("");
								$(pasaran+' .nomor3'+att).val("");
								hitungForm(pasaran);
							}
							else
							if ($(pasaran+' .checkBet').is(':checked')  && att != 0) 
							{ 
								$(pasaran+' .bet'+att).val($(pasaran+' .bet0').val()); 
								hitungForm(pasaran);
							}
						}
					}
					else
					if (game == "5050umum" || game == "5050special" || game == "dasar" || game == "5050kombinasi" || game == "kombinasi")
					{
						hitungForm(pasaran);
					}
	});
	
	$(document).on("blur", pasaran+' .dd_bet', function()
	{
		ddbet()
	});
	
	$(document).on("change", pasaran+' .game2d', function()
	{
		ddbet()
	});
	
	function ddbet()
	{
		var bet = nonribuan($(pasaran+' .dd_bet').val());
		var minbet 	= parseInt($(pasaran+' .dd_bet').attr("minbet"));
		var game = $(pasaran+' .game2d').val();
		var maxbet 	= parseInt($(pasaran+' .dd_bet').attr("maxbet"+game));
		
		if (bet < minbet)
		{
			alert('Bet minimal '+ribuan(minbet));
			
			$(pasaran+' .dd_bet').val(ribuan(minbet));
			//$(pasaran+' .kei'+att).val("");
			//hitungForm(pasaran);
		}
		else
		if (bet > maxbet)
		{
			alert('Bet maximal '+ribuan(maxbet));
			$(pasaran+' .dd_bet').val(ribuan(maxbet));
			//$(pasaran+' .kei'+att).val("");
			//hitungForm(pasaran);
		}
		else
		if (bet == undefined)
		{
			$(pasaran+' .dd_bet'+att).val("");
			//hitungForm(pasaran);
		}
	}
	
	$(document).on("blur", pasaran+' .bb_bet', function()
	{
		var att = $(this).attr("att");
		var bet = nonribuan($(pasaran+' .bb_bet'+att).val());
		var minbet 	= parseInt($(pasaran+' .bb_bet'+att).attr("minbet"));
		var maxbet 	= parseInt($(pasaran+' .bb_bet'+att).attr("maxbet"));
		
		if (bet < minbet)
		{
			alert('Bet minimal '+ribuan(minbet));
			
			$(pasaran+' .bb_bet'+att).val(ribuan(minbet));
			//$(pasaran+' .kei'+att).val("");
			//hitungForm(pasaran);
		}
		else
		if (bet > maxbet)
		{
			alert('Bet maximal '+ribuan(maxbet));
			$(pasaran+' .bb_bet'+att).val(ribuan(maxbet));
			//$(pasaran+' .kei'+att).val("");
			//hitungForm(pasaran);
		}
		else
		if (bet == undefined)
		{
			$(pasaran+' .bb_bet'+att).val("");
			//hitungForm(pasaran);
		}
	});
	
	$(document).on("blur", pasaran+' .bet', function()
	{
		var att = $(this).attr("att");
		var bet = nonribuan($(pasaran+' .bet'+att).val());
		var minbet 	= parseInt($(pasaran+' .bet'+att).attr("minbet"));
		var maxbet 	= parseInt($(pasaran+' .bet'+att).attr("maxbet"));
		
		var game = $(pasaran+' .bet'+att).attr("game");
		
		if (game == "4D3D2D")
		{
			var gamename = "";
			game = $(pasaran+' .game'+att).val();
			gamename = game;
			if (game == '2D Depan') gamename = '2DD';
			if (game == '2D Tengah') gamename = '2DT';
			maxbet 	= parseInt($(pasaran+' .bet'+att).attr("maxbet"+gamename));
		}
		
		if (bet < minbet)
		{
			alert('Bet minimal '+ribuan(minbet));
			$(pasaran+' .bet'+att).val(minbet);
			//$(pasaran+' .kei'+att).val("");
			hitungForm(pasaran);
		}
		else
		if (bet > maxbet)
		{
			alert('Bet maximal '+ribuan(maxbet));
			$(pasaran+' .bet'+att).val(maxbet);
			//$(pasaran+' .kei'+att).val("");
			hitungForm(pasaran);
		}
		else
		if (bet == undefined)
		{
			$(pasaran+' .bet'+att).val("0");
			hitungForm(pasaran);
		}
	});
	
	
	$(document).on("keyup", pasaran+' .bet,'+ pasaran+' .nomor', function()
	{
					var bayar = 0;
					var potongan = 0;
					var total = 0;
					var att = $(this).attr("att");
					var pot = 0;
					var game = $(pasaran+' .bet'+att).attr("game");
					
					//alert(game);
					
					if (game == "4D3D2D")
					{
						var n1 = $(pasaran+' .nomor1'+att).val().length;
						var n2 = $(pasaran+' .nomor2'+att).val().length;
						var n3 = $(pasaran+' .nomor3'+att).val().length;
						var n4 = $(pasaran+' .nomor4'+att).val().length;
						
						if (n1 == 1 && n2 == 1 && n3 == 1 && n4 == 1) { $(pasaran+' .game'+att).val("4D"); } else
						if (n1 == 0 && n2 == 1 && n3 == 1 && n4 == 1) { $(pasaran+' .game'+att).val("3D"); } else
						if (n1 == 0 && n2 == 0 && n3 == 1 && n4 == 1) { $(pasaran+' .game'+att).val("2D"); } else
						if (n1 == 1 && n2 == 1 && n3 == 0 && n4 == 0) { $(pasaran+' .game'+att).val("2D Depan"); } else
						if (n1 == 0 && n2 == 1 && n3 == 1 && n4 == 0) { $(pasaran+' .game'+att).val("2D Tengah"); } else { $(pasaran+' .game'+att).val(""); }
						
						if ($(pasaran+' .checkBet').is(':checked') &&  $(pasaran+' .game'+att).val() != "") 
							{ 
								$(pasaran+' .bet'+att).val($(pasaran+' .bet0').val()); 
							}
							
						var bet = nonribuan($(pasaran+' .bet'+att).val());
						bet = onlyNumber(bet);
						
						$(pasaran+' .bet'+att).val(bet);
						
						var game = $(pasaran+' .game'+att).val();
						var pot = 0;
						
						if (game == "4D") { pot = $(pasaran+' .bet'+att).attr("pot4"); }
						if (game == "3D") { pot = $(pasaran+' .bet'+att).attr("pot3"); }
						if (game == "2D") { pot = $(pasaran+' .bet'+att).attr("pot2"); }
						if (game == "2D Depan") { pot = $(pasaran+' .bet'+att).attr("pot2dd"); }
						if (game == "2D Tengah") { pot = $(pasaran+' .bet'+att).attr("pot2dt"); }
						
						if (game != "") potongan = parseInt((pot * bet)/100); bayar = ribuan(bet - potongan); potongan = ribuan(potongan) + " ("+pot+"%)"; 
						
						$(pasaran+' .potongan'+att).val(potongan);
						$(pasaran+' .bayar'+att).val(bayar);
						
						$(pasaran+' .bayar').each(function() {
							var tot = 0;
							tot = parseInt(nonribuan($(this).val()));
							if (tot >= 0) 
							{
								total += tot;
							}
						});
						
						bet = parseInt(bet);
						if (isNaN(bet)) bet = '';
						
						$(pasaran+' .bet'+att).val(ribuan(bet));
						$(pasaran+' .totalBet').text("Total: "+ ribuan(total));
						$(pasaran+' .total').val(total);
						
						if ($(pasaran+' .game'+att).val() == "") {
							$(pasaran+' .potongan'+att).val('');
							$(pasaran+' .bayar'+att).val('');
							$(pasaran+' .bet'+att).val('');
						}
						
						if ($(pasaran+' .bet'+att).val() == '') {
							$(pasaran+' .potongan'+att).val('');
							$(pasaran+' .bayar'+att).val('');
						}
					}
					
					else
					if (game == "colokmacau")
					{
						var nomor1 = $(pasaran+' .nomor'+att).val();
						var nomor2 = $(pasaran+' .nomor2'+att).val();
						
						if (nomor1 == "" ||  nomor2 == "")
						{
							alert('Nomor harus lengkap terisi!');	
							$(pasaran+' .bet'+att).val("");
							hitungForm(pasaran);
						}
						else
						if (nomor1 == nomor2)
						{
							alert('Nomor tidak boleh sama!');	
							$(pasaran+' .bet'+att).val("");
							hitungForm(pasaran);
						}
						else
						{
							var bet = nonribuan($(pasaran+' .bet'+att).val());
							bet = onlyNumber(bet);
							
							pot = $(pasaran+' .bet'+att).attr("pot1");
							potongan = parseInt((pot * bet)/100); 
							bayar = ribuan(bet - potongan); 
							potongan = ribuan(potongan) + " ("+pot+"%)";
							
							$(pasaran+' .bet'+att).val(bet);
							$(pasaran+' .potongan'+att).val(potongan);
							$(pasaran+' .bayar'+att).val(bayar);
							
							$(pasaran+' .bayar').each(function() {
								var tot = 0;
								tot = parseInt(nonribuan($(this).val()));
								if (tot >= 0) 
								{
									total += tot;
								}
							});
							
							$(pasaran+' .bet'+att).val(ribuan(bet));
							$(pasaran+' .totalBet').text("Total: "+ ribuan(total));
							$(pasaran+' .total').val(total);
							
							if ($(pasaran+' .bet'+att).val() == '') {
								$(pasaran+' .potongan'+att).val('');
								$(pasaran+' .bayar'+att).val('');
							}
						}
					}
					else
					if (game == "coloknaga")
					{
						var nomor1 = $(pasaran+' .nomor'+att).val();
						var nomor2 = $(pasaran+' .nomor2'+att).val();
						var nomor3 = $(pasaran+' .nomor3'+att).val();
						
						if (nomor1 == "" ||  nomor2 == "" || nomor3 == "")
						{
							alert('Nomor harus lengkap terisi!');	
							$(pasaran+' .bet'+att).val("");
							hitungForm(pasaran);
						}
						else
						if (nomor1 != nomor2 && nomor1 != nomor3 && nomor2 != nomor3  )
						{
							
							var bet = nonribuan($(pasaran+' .bet'+att).val());
							bet = onlyNumber(bet);
							
							pot = $(pasaran+' .bet'+att).attr("pot1");
							potongan = parseInt((pot * bet)/100); 
							bayar = ribuan(bet - potongan); 
							potongan = ribuan(potongan) + " ("+pot+"%)";
							
							
							$(pasaran+' .bet'+att).val(bet);
							$(pasaran+' .potongan'+att).val(potongan);
							$(pasaran+' .bayar'+att).val(bayar);
							
							$(pasaran+' .bayar').each(function() {
								var tot = 0;
								tot = parseInt(nonribuan($(this).val()));
								if (tot >= 0) 
								{
									total += tot;
								}
							});
							
							$(pasaran+' .bet'+att).val(ribuan(bet));
							$(pasaran+' .totalBet').text("Total: "+ ribuan(total));
							$(pasaran+' .total').val(total);
							
							if ($(pasaran+' .bet'+att).val() == '') {
								$(pasaran+' .potongan'+att).val('');
								$(pasaran+' .bayar'+att).val('');
							}
						
						}
						else
						{
							alert('Nomor tidak boleh ada yang sama!');	
							$(pasaran+' .bet'+att).val("");
						}
				
					}
					else
					if (game == "colokjitu")
					{
						var nomor1 = $(pasaran+' .nomor'+att).val();
						
						if (nomor1 != "")
						{
							
							var bet = nonribuan($(pasaran+' .bet'+att).val());
							bet = onlyNumber(bet);
							
							pot = $(pasaran+' .bet'+att).attr("pot1");
							potongan = parseInt((pot * bet)/100); 
							bayar = ribuan(bet - potongan); 
							potongan = ribuan(potongan) + " ("+pot+"%)";
							
							//alert(potongan);
							
							$(pasaran+' .bet'+att).val(bet);
							$(pasaran+' .potongan'+att).val(potongan);
							$(pasaran+' .bayar'+att).val(bayar);
							
							$(pasaran+' .bayar').each(function() {
								var tot = 0;
								tot = parseInt(nonribuan($(this).val()));
								if (tot >= 0) 
								{
									total += tot;
								}
							});
							
							$(pasaran+' .bet'+att).val(ribuan(bet));
							$(pasaran+' .totalBet').text("Total: "+ ribuan(total));
							$(pasaran+' .total').val(total);
							
							if ($(pasaran+' .bet'+att).val() == '') {
								$(pasaran+' .potongan'+att).val('');
								$(pasaran+' .bayar'+att).val('');
							}
						
						}
						else
						{
							alert('Nomor harus diisi terlebih dahulu!');	
							$(pasaran+' .bet'+att).val("");
						}
				
					}
					else
					if (game == "5050umum" || game == "5050special" || game == "dasar")
					{
						var bet = nonribuan($(pasaran+' .bet'+att).val());
							bet = onlyNumber(bet);
							
							var kei = 0;
							
							var kiri = $(pasaran+ ' .nomorkiri'+att);
							
							if (kiri.is(':checked'))
							{
								pot = $(pasaran+' .bet'+att).attr("pot1");	
							}
							else
							{
								pot = $(pasaran+' .bet'+att).attr("pot2");
							}
							
							potongan = parseInt((pot * bet)/100); 
							if (pot >= 0) potongan = 0;
							bayar = ribuan(bet - potongan); 
							potongan = ribuan(potongan) + " ("+pot+"%)";
							
							//alert(potongan);
							
							
							
							$(pasaran+' .bet'+att).val(bet);
							
							$(pasaran+' .kei'+att).val(potongan);
							$(pasaran+' .bayar'+att).val(bayar);
							
							$(pasaran+' .bayar').each(function() {
								var tot = 0;
								tot = parseInt(nonribuan($(this).val()));
								if (tot >= 0) 
								{
									total += tot;
								}
							});
							
							$(pasaran+' .bet'+att).val(ribuan(bet));
							$(pasaran+' .totalBet').text("Total: "+ ribuan(total));
							$(pasaran+' .total').val(total);
							
							if ($(pasaran+' .bet'+att).val() == '') {
								$(pasaran+' .kei'+att).val('');
								$(pasaran+' .bayar'+att).val('');
							}
				
					}
					else
					if ( game == "5050kombinasi")
					{
						var bet = nonribuan($(pasaran+' .bet'+att).val());
							bet = onlyNumber(bet);
							
							var kei = 0;
							
							if ($(pasaran+' .nomor'+att).val() == 'Mono') 	pot = $(pasaran+' .bet'+att).attr("pot1");	
							if ($(pasaran+' .nomor'+att).val() == 'Stereo') 	pot = $(pasaran+' .bet'+att).attr("pot2");	
							if ($(pasaran+' .nomor'+att).val() == 'Kembang') 	pot = $(pasaran+' .bet'+att).attr("pot3");	
							if ($(pasaran+' .nomor'+att).val() == 'Kempis') 	pot = $(pasaran+' .bet'+att).attr("pot4");	
							if ($(pasaran+' .nomor'+att).val() == 'Kembar') 	pot = $(pasaran+' .bet'+att).attr("pot5");	
							
							potongan = parseInt((pot * bet)/100); 
							if (pot >= 0) potongan = 0;
							bayar = ribuan(bet - potongan); 
							potongan = ribuan(potongan) + " ("+pot+"%)";
							
							//alert(potongan);
							
							$(pasaran+' .bet'+att).val(bet);
							
							$(pasaran+' .kei'+att).val(potongan);
							$(pasaran+' .bayar'+att).val(bayar);
							
							$(pasaran+' .bayar').each(function() {
								var tot = 0;
								tot = parseInt(nonribuan($(this).val()));
								if (tot >= 0) 
								{
									total += tot;
								}
							});
							
							
							
							$(pasaran+' .bet'+att).val(ribuan(bet));
							$(pasaran+' .totalBet').text("Total: "+ ribuan(total));
							$(pasaran+' .total').val(total);
							
							if ($(pasaran+' .bet'+att).val() == '') {
								$(pasaran+' .kei'+att).val('');
								$(pasaran+' .bayar'+att).val('');
							}
				
					}
					else
					if ( game == "kombinasi")
					{
						var bet = nonribuan($(pasaran+' .bet'+att).val());
							bet = onlyNumber(bet);
							
							pot = $(pasaran+' .bet'+att).attr("pot1");	
							
							
							potongan = parseInt((pot * bet)/100); 
							bayar = ribuan(bet - potongan); 
							potongan = ribuan(potongan) + " ("+pot+"%)";
							
							//alert(potongan);
							
							$(pasaran+' .bet'+att).val(bet);
							
							$(pasaran+' .potongan'+att).val(potongan);
							$(pasaran+' .bayar'+att).val(bayar);
							
							$(pasaran+' .bayar').each(function() {
								var tot = 0;
								tot = parseInt(nonribuan($(this).val()));
								if (tot >= 0) 
								{
									total += tot;
								}
							});
							
							
							$(pasaran+' .bet'+att).val(ribuan(bet));
							$(pasaran+' .totalBet').text("Total: "+ ribuan(total));
							$(pasaran+' .total').val(total);
							
							if ($(pasaran+' .bet'+att).val() == '') {
								$(pasaran+' .potongan'+att).val('');
								$(pasaran+' .bayar'+att).val('');
							}
				
					}
					else
					{
							var bet = nonribuan($(pasaran+' .bet'+att).val());
							bet = onlyNumber(bet);
							
							pot = $(pasaran+' .bet'+att).attr("pot1");
							potongan = parseInt((pot * bet)/100); 
							bayar = ribuan(bet - potongan); 
							potongan = ribuan(potongan) + " ("+pot+"%)";
							
							//alert(potongan);
							
							
							
							$(pasaran+' .bet'+att).val(bet);
							
							$(pasaran+' .potongan'+att).val(potongan);
							$(pasaran+' .bayar'+att).val(bayar);
							
							$(pasaran+' .bayar').each(function() {
								var tot = 0;
								tot = parseInt(nonribuan($(this).val()));
								if (tot >= 0) 
								{
									total += tot;
								}
							});
							
							$(pasaran+' .bet'+att).val(ribuan(bet));
							$(pasaran+' .totalBet').text("Total: "+ ribuan(total));
							$(pasaran+' .total').val(total);
							
							if ($(pasaran+' .bet'+att).val() == '') {
								$(pasaran+' .potongan'+att).val('');
								$(pasaran+' .bayar'+att).val('');
							}
					
					}
			
	});
	
	
	/*
	$(document).on("change", pasaran+' .bb_bet', function()
	{
				
				var att 		= $(this).attr("att");
				
				var minbet 	= parseInt($(pasaran+' .bb_bet'+att).attr("minbet"));
				var maxbet 	= parseInt($(pasaran+' .bb_bet'+att).attr("maxbet"));
				var bet 		= parseInt(nonribuan($(pasaran+' .bb_bet'+att).val()));
				
				
				
				if (bet < minbet)
				{
					alert('Bet minimal '+minbet);
					$(pasaran+' .bb_bet'+att).val("");
				}
				else
				if (bet > maxbet)
				{
					alert('Bet maximal '+maxbet);
					$(pasaran+' .bb_bet'+att).val("");
				}
				else
				{
					$(pasaran+' .bb_bet'+att).val(ribuan(bet));
				}
				
	});
	*/
	
	
	// SUBMIT FORM
	// 4D

	clickToForm(pasaran, "bb_form");
	clickToForm(pasaran, "set_form");
	clickToForm(pasaran, "bbset_form");
	clickToForm(pasaran, "2dqb_form");
	

	// MISC CLICK
	$(document).on("click", pasaran+" .checkAll1", function()
		{  //on click 
			if(this.checked) { 
				// check select status
				$(pasaran+' .checkBox1').each(function() { //loop through each checkbox
					this.checked = true;  //select all checkboxes with class "checkbox1"      
					      
				});
			}else{
				$(pasaran+' .checkBox1').each(function() { //loop through each checkbox
					this.checked = false; //deselect all checkboxes with class "checkbox1"   
					var att = $(this).attr('att');
					$(pasaran+' .potongan'+att).val('');
					$(pasaran+' .bayar'+att).val('');
					$(pasaran+' .bet'+att).val("0");        
					          
				});  
			}
			hitungForm(pasaran);  
		});
		
	$(document).on("click", pasaran+" .checkAll2", function()
		{  //on click 
			if(this.checked) { // check select status
				$(pasaran+' .checkBox2').each(function() { //loop through each checkbox
					this.checked = true;  //select all checkboxes with class "checkbox1"             
				});
			}else{
				$(pasaran+' .checkBox2').each(function() { //loop through each checkbox
					this.checked = false; //deselect all checkboxes with class "checkbox1"     
					var att = $(this).attr('att');
					$(pasaran+' .potongan'+att).val('');
					$(pasaran+' .bayar'+att).val('');
					$(pasaran+' .bet'+att).val("0");        
					                    
				});        
			}
			hitungForm(pasaran);   
		});
		
	$(document).on("click", pasaran+" .checkAll3", function()
		{  //on click 
			if(this.checked) { // check select status
				$(pasaran+' .checkBox3').each(function() { //loop through each checkbox
					this.checked = true;  //select all checkboxes with class "checkbox1"            
				});
			}else{
				$(pasaran+' .checkBox3').each(function() { //loop through each checkbox
					this.checked = false; //deselect all checkboxes with class "checkbox1"   
					var att = $(this).attr('att');
					$(pasaran+' .potongan'+att).val('');
					$(pasaran+' .bayar'+att).val('');
					$(pasaran+' .bet'+att).val("0");                                
				}); 
				        
			}
			hitungForm(pasaran);   
		});
		
	$(document).on("click", pasaran+" .checkBox", function()
		{  //on click 
			
			if(!this.checked) { 
				var att = $(this).attr("att");
				//$(pasaran+" .nomor"+att).val('');
				$(pasaran+' .potongan'+att).val('');
				$(pasaran+' .bayar'+att).val('');
				$(pasaran+" .bet"+att).val("0");
				
				hitungForm(pasaran);
			}
			
		});
	
	// LINK
	// 4D
	
	$(document).on("click", pasaran+" .4d", function()
	{
		//clearStatus(pasaran);
		hideForm(pasaran);
		//hideFormContainer(pasaran);
		$(pasaran+' .4dForm').fadeTo(500,1);
	});
	
	
	linkForm4D(pasaran, pasar, '4dQb', 'qb','4D3D2D');
	linkForm4D(pasaran, pasar, '4dBb', 'bb','4D3D2D');
	linkForm4D(pasaran, pasar, '4dSet', 'set','4D3D2D');
	linkForm4D(pasaran, pasar, '4dBBSet', 'bbset','4D3D2D');
	linkForm4D(pasaran, pasar, '2dQb', '2dqb','4D3D2D');
	linkForm4D(pasaran, pasar, '2dd', '2dd','4D3D2D');
	linkForm4D(pasaran, pasar, '2dt', '2dt','4D3D2D');

	linkForm(pasaran, pasar, 'colokBebas');
	linkForm(pasaran, pasar, 'colokMacau');
	linkForm(pasaran, pasar, 'colokNaga');
	linkForm(pasaran, pasar, 'colokJitu');
	linkForm(pasaran, pasar, '5050Special');
	linkForm(pasaran, pasar, '5050Umum');
	linkForm(pasaran, pasar, '5050Kombinasi');
	linkForm(pasaran, pasar, 'dasar');
	linkForm(pasaran, pasar, 'kombinasi');
	linkForm(pasaran, pasar, 'shio');
	
	clickForm(pasaran, "4dqb", userData);
	clickForm(pasaran, "colokbebas", userData);
	clickForm(pasaran, "colokmacau", userData);
	clickForm(pasaran, "coloknaga", userData);
	clickForm(pasaran, "colokjitu", userData);
	clickForm(pasaran, "5050special", userData);
	clickForm(pasaran, "5050umum", userData);
	clickForm(pasaran, "5050kombinasi", userData);
	clickForm(pasaran, "dasar", userData);
	clickForm(pasaran, "kombinasi", userData);
	clickForm(pasaran, "shio", userData);
}

function ribuan(x) {
    return Math.round(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ribuanForm(c)
	{
		$(document).on("keyup", c, function()
		{
			var bet = onlyNumber(nonribuan($(this).val()));
			bet = parseInt(bet);
			if (isNaN(bet)) bet = '';
			$(this).val(ribuan(bet));
		});
	}

function nonribuan(x) {
	if (x != "")
    return x.replace(/[ ,]/g, "");
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function onlyNumber(n) {
	return n.replace(/\D/g, '');	
}

function checkForm(pasaran)
{
	
	var bool = false;
	var task = $(pasaran+' .bb_task').val();
	
	if (task == 'bbset_form' || task == 'set_form')
	{
		$(pasaran+' .task').each(function(index) {
			
			var att 		= $(this).attr("att");
			var minbet 	= parseInt($(pasaran+' .bb_bet1'+att).attr("minbet"));
			var maxbet 	= parseInt($(pasaran+' .bb_bet1'+att).attr("maxbet"));
			var bet 		= parseInt(nonribuan($(pasaran+' .bb_bet1'+att).val()));
			var bet2 	= parseInt(nonribuan($(pasaran+' .bb_bet2'+att).val()));
			var bet3		= parseInt(nonribuan($(pasaran+' .bb_bet3'+att).val()));
			var betall	= parseInt(nonribuan($(pasaran+' .bb_betall'+att).val()));

			var totnomor = $(pasaran+' .nomor1'+att).val().length + $(pasaran+' .nomor2'+att).val().length + $(pasaran+' .nomor3'+att).val().length + $(pasaran+' .nomor4'+att).val().length;
			if (task == 'bbset_form') totnomor = totnomor + $(pasaran+' .nomor5'+att).val().length;
			
			if (totnomor > 1) 
				{
					if (!isNaN(bet) || !isNaN(bet2) || !isNaN(bet3) || !isNaN(betall))
					{
						/*
						if (bet > maxbet || bet2 > maxbet || bet3 > maxbet || betall > maxbet)
						{
							alert('Bet tidak boleh lebih besar dari Rp'+maxbet);
							return;
						}
						else 
						{
							$(pasaran+' .imgload').html(loadingImgSmall);
							bool = true;	
						}
						*/
						
						$(pasaran+' .imgload').html(loadingImgSmall);
						bool = true;	
					}
					else
					{
						alert('Silakan isi Bet Anda');
						$(pasaran+' .imgload').html('');
						bool = false;	
					}
				}
		});
	}
	
	return bool;
}

function checkFormQ2D(pasaran)
{
	var bool = false;
	var bet 	= parseInt(nonribuan($(pasaran+' .dd_bet').val()));
	
	if (isNaN(bet))
	{
		alert('Silakan isi Bet Anda');
		return;
	}
	else 
	{
		bool = true;	
	}
			
	return bool;
}

function clickForm(pasaran, game, userData)
	{
		$(document).on('click', pasaran+' .'+game+'_form .btn-success', function()
		{
		
		var total = parseInt($(pasaran+" .total").val());
		var credit = parseInt($(".credit").val());
		var userstatus = $(".userstatus").val();
		var max_lose = $('#max_lose').val();
			
		if (total == "0") { alert("Silakan isi Bet Anda"); } 
		else 
		if (userstatus == "2") { alert("Account Anda sedang tersuspend, hubungi CS kami!"); } 
		else 
		if (credit-total < -max_lose && max_lose != 0) { alert("Total lebih besar dari Maximum Lose Anda ( -"+ ribuan(max_lose)+" )"); } 
		else 
		if (total > credit && userstatus == "1") { alert("Total lebih besar dari Credit Anda "); } 
		else 
			{ 
			var html = "";
			var pasar = pasaran.substr(1);
			$(pasaran+" .dataConfirm").html("");
			$(pasaran+" .formConfirm").fadeIn(500);
			$(pasaran+" .formContainer").hide();
			$(pasaran+" .peraturanContainer").hide();
			
			var total = ribuan($(pasaran+" .total").val());
			var title = $(pasaran+' .'+game+'_form .title').val();
			var pasaranid = $(pasaran+' .'+game+'_form .pasaranid').val();
			var periode = $(pasaran+' .'+game+'_form .periode').val();
			var namapasaran = $(pasaran+' .'+game+'_form .namapasaran').val();
			
			
	
			if (game == "4dqb")
			{
				
				$(pasaran+" .cancel").attr('game', game) 
				$(pasaran+' .dataConfirm').html(loadingImg);
				
				$.post("confirm.php",
				$(pasaran+' .'+game+'_form').serialize(),
				function(data)
				{
					$(pasaran+" .dataConfirm").html("<div class=\"well well-sm form-group form-group-sm\"><strong>"+title+"</strong> - Periode <strong>"+periode+"-"+pasaranid+" ("+namapasaran+")</strong></div>");
					$(pasaran+" .dataConfirm").append("<table class=\"table table-striped table-hover\"><tr><th>No.</th><th>Nomor</th><th>Game</th><th style=\"text-align:right\">Bet</th><th style=\"text-align:right\">Potongan</th><th style=\"text-align:right\">Bayar</th><th style=\"text-align:center; width:130px\">Status</th></tr>");
					$(pasaran+" .dataConfirm tr:last").after(data);
					//$(pasaran+" .dataConfirm tr:last").after("<tr><td colspan=5 class=\"text-primary\" align=right><strong>Total : </strong></td><td style=\"text-align:right\"><strong>"+total+"</strong></td><td></td></tr>");
				
					$(pasaran+" .dataConfirm tr:last").after("</table>");
					
				});
				return false; //not to post the form physically
				
				
				
				/*
				$(pasaran+" .cancel").attr('game', game) 
				$(pasaran+" .dataConfirm").append("<table class=\"table table-striped table-hover\"><tr><th>No.</th><th>Nomor</th><th>Game</th><th>Bet</th><th>Potongan</th><th>Bayar</th></tr>");
				$(pasaran+' .bet').each(function(index) {
					index++;
					var att = $(this).attr("att");
					var bet = $(pasaran+' .bet'+att).val();
					var realbet = parseInt(nonribuan($(pasaran+' .bet'+att).val()));
					var game = $(pasaran+' .game'+att).val();
					var nomor = $(pasaran+' .nomor1'+att).val()+""+$(pasaran+' .nomor2'+att).val()+""+$(pasaran+' .nomor3'+att).val()+""+$(pasaran+' .nomor4'+att).val();
					var bayar = $(pasaran+' .bayar'+att).val();
					var potongan = $(pasaran+' .potongan'+att).val();
					var minbet = $(pasaran+' .bet'+att).attr("minbet");
					
					if (realbet >= minbet && game !="") $(pasaran+" .dataConfirm tr:last").after("<tr class=\"form-group-sm\"><td class=\"text-primary\" style=\"vertical-align:middle\">"+index+"</td><td width=\"200\" class=\"form-inline\"><input readonly type=\"text\" class=\"form-control\" style=\"width:30px;font-weight:bold\" value="+$(pasaran+' .nomor1'+att).val()+"> <input readonly type=\"text\" class=\"form-control\" style=\"width:30px;font-weight:bold\" value="+$(pasaran+' .nomor2'+att).val()+"> <input readonly type=\"text\" class=\"form-control\" style=\"width:30px;font-weight:bold\" value="+$(pasaran+' .nomor3'+att).val()+"> <input readonly type=\"text\" class=\"form-control\" style=\"width:30px;font-weight:bold\" value="+$(pasaran+' .nomor4'+att).val()+"></td><td class=\"text-primary\"  style=\"vertical-align:middle\">" + game + "</td><td class=\"text-primary\" style=\"vertical-align:middle\">" + bet + "</td><td class=\"text-primary\" style=\"vertical-align:middle\">" + potongan + "</td><td class=\"text-primary\"  style=\"vertical-align:middle\">" + bayar + "</td></tr>");
				});
				
				
				$(pasaran+" .dataConfirm tr:last").after("<tr><td></td><td></td><td></td><td></td><td class=\"text-primary\" align=right><strong>Total : </strong></td><td><strong>"+total+"</strong></td></tr>");
				
				$(pasaran+" .dataConfirm tr:last").after("</table>");
				*/
				
			}
			else
			if (game == "colokbebas")
			{
				$(pasaran+" .cancel").attr('game', game) 
				$(pasaran+" .dataConfirm").append("<table class=\"table table-striped table-hover\"><tr><th>No.</th><th>Nomor</th><th>Bet</th><th>Potongan</th><th>Bayar</th></tr>");
				
				$(pasaran+' .bet').each(function(index) {
					index++;
					var att = $(this).attr("att");
					var bet = $(pasaran+' .bet'+att).val();
					var realbet = parseInt(nonribuan($(pasaran+' .bet'+att).val()));
					var nomor = $(pasaran+' .nomor'+att).val();
					var bayar = $(pasaran+' .bayar'+att).val();
					var potongan = $(pasaran+' .potongan'+att).val();
					var minbet = $(pasaran+' .bet'+att).attr("minbet");
					
					
					if (realbet >= minbet ) $(pasaran+" .dataConfirm tr:last").after("<tr class=\"form-group-sm\"><td class=\"text-primary\" style=\"vertical-align:middle\">"+index+"</td><td width=\"200\" class=\"form-inline\"><input readonly type=\"text\" class=\"form-control\" style=\"width:30px;font-weight:bold\" value="+$(pasaran+' .nomor'+att).val()+"></td><td class=\"text-primary\" style=\"vertical-align:middle\">" + bet + "</td><td class=\"text-primary\" style=\"vertical-align:middle\">" + potongan + "</td><td class=\"text-primary\" style=\"vertical-align:middle\">" + bayar + "</td></tr>");
				});
				
				
				$(pasaran+" .dataConfirm tr:last").after("<tr><td></td><td></td><td></td><td class=\"text-primary\" align=right><strong>Total : </strong></td><td><strong>"+total+"</strong></td></tr>");
				
				$(pasaran+" .dataConfirm tr:last").after("</table>");
			}
			
			else
			if (game == "colokmacau")
			{
				$(pasaran+" .cancel").attr('game', game) 
				$(pasaran+" .dataConfirm").append("<table class=\"table table-striped table-hover\"><tr><th>No.</th><th>Nomor</th><th>Bet</th><th>Potongan</th><th>Bayar</th></tr>");
				
				$(pasaran+' .bet').each(function(index) {
					index++;
					var att = $(this).attr("att");
					var bet = $(pasaran+' .bet'+att).val();
					var realbet = parseInt(nonribuan($(pasaran+' .bet'+att).val()));
					var nomor1 = $(pasaran+' .nomor'+att).val();
					var nomor2 = $(pasaran+' .nomor2'+att).val();
					var bayar = $(pasaran+' .bayar'+att).val();
					var potongan = $(pasaran+' .potongan'+att).val();
					var minbet = $(pasaran+' .bet'+att).attr("minbet");
					
					if (realbet >= minbet && nomor1 != nomor2 && nomor2 != "") $(pasaran+" .dataConfirm tr:last").after("<tr class=\"form-group-sm\"><td class=\"text-primary\" style=\"vertical-align:middle\">"+index+"</td><td width=\"200\" class=\"form-inline\"><input readonly type=\"text\" class=\"form-control\" style=\"width:30px;font-weight:bold\" value="+$(pasaran+' .nomor'+att).val()+">  <input readonly type=\"text\" class=\"form-control\" style=\"width:30px;font-weight:bold\" value="+$(pasaran+' .nomor2'+att).val()+"></td><td class=\"text-primary\" style=\"vertical-align:middle\">" + bet + "</td><td class=\"text-primary\" style=\"vertical-align:middle\">" + potongan + "</td><td class=\"text-primary\" style=\"vertical-align:middle\">" + bayar + "</td></tr>");
				});
				
				$(pasaran+" .dataConfirm tr:last").after("<tr><td></td><td></td><td></td><td class=\"text-primary\" align=right><strong>Total : </strong></td><td><strong>"+total+"</strong></td></tr>");
				
				$(pasaran+" .dataConfirm tr:last").after("</table>");
			}
			
			if (game == "coloknaga")
			{
				$(pasaran+" .cancel").attr('game', game) 
				$(pasaran+" .dataConfirm").append("<table class=\"table table-striped table-hover\"><tr><th>No.</th><th>Nomor</th><th>Bet</th><th>Potongan</th><th>Bayar</th></tr>");
				
				$(pasaran+' .bet').each(function(index) {
					index++;
					var att = $(this).attr("att");
					var bet = $(pasaran+' .bet'+att).val();
					var realbet = parseInt(nonribuan($(pasaran+' .bet'+att).val()));
					var nomor1 = $(pasaran+' .nomor'+att).val();
					var nomor2 = $(pasaran+' .nomor2'+att).val();
					var nomor3 = $(pasaran+' .nomor3'+att).val();
					var bayar = $(pasaran+' .bayar'+att).val();
					var potongan = $(pasaran+' .potongan'+att).val();
					var minbet = $(pasaran+' .bet'+att).attr("minbet");
					
					if (realbet >= minbet && nomor1 != nomor2  && nomor1 != nomor3  && nomor2 != nomor3 && nomor3 != "") $(pasaran+" .dataConfirm tr:last").after("<tr class=\"form-group-sm\"><td class=\"text-primary\" style=\"vertical-align:middle\">"+index+"</td><td width=\"200\" class=\"form-inline\"><input readonly type=\"text\" class=\"form-control\" style=\"width:30px;font-weight:bold\" value="+$(pasaran+' .nomor'+att).val()+">  <input readonly type=\"text\" class=\"form-control\" style=\"width:30px;font-weight:bold\" value="+$(pasaran+' .nomor2'+att).val()+"> <input readonly type=\"text\" class=\"form-control\" style=\"width:30px;font-weight:bold\" value="+$(pasaran+' .nomor3'+att).val()+"></td><td class=\"text-primary\" style=\"vertical-align:middle\">" + bet + "</td><td class=\"text-primary\" style=\"vertical-align:middle\">" + potongan + "</td><td class=\"text-primary\" style=\"vertical-align:middle\">" + bayar + "</td></tr>");
				});
				
				$(pasaran+" .dataConfirm tr:last").after("<tr><td></td><td></td><td></td><td class=\"text-primary\" align=right><strong>Total : </strong></td><td><strong>"+total+"</strong></td></tr>");
				$(pasaran+" .dataConfirm tr:last").after("</table>");
			}
			
			if (game == "colokjitu")
			{
				$(pasaran+" .cancel").attr('game', game) 
				$(pasaran+" .dataConfirm").append("<table class=\"table table-striped table-hover\"><tr><th>No.</th><th>Nomor</th><th>Bet</th><th>Potongan</th><th>Bayar</th></tr>");
				$(pasaran+' .bet').each(function(index) {
					index++;
					var att = $(this).attr("att");
					var bet = $(pasaran+' .bet'+att).val();
					var realbet = parseInt(nonribuan($(pasaran+' .bet'+att).val()));
					//var game = $(pasaran+' .game'+att).val();
					var nomor = $(pasaran+' .nomor'+att).val();
					var posisi = $(pasaran+' .posisi'+att).val();
					var bayar = $(pasaran+' .bayar'+att).val();
					var potongan = $(pasaran+' .potongan'+att).val();
					var minbet = $(pasaran+' .bet'+att).attr("minbet");
					
					if (realbet >= minbet && nomor != "" && posisi != "") $(pasaran+" .dataConfirm tr:last").after("<tr class=\"form-group-sm\"><td class=\"text-primary\" style=\"vertical-align:middle\">"+index+"</td><td width=\"200\" class=\"form-inline\"><input readonly type=\"text\" class=\"form-control\" style=\"width:30px;font-weight:bold\" value="+nomor+">  <input readonly type=\"text\" class=\"form-control\" style=\"width:100px;font-weight:bold\" value="+posisi+"></td><td class=\"text-primary\" style=\"vertical-align:middle\">" + bet + "</td><td class=\"text-primary\" style=\"vertical-align:middle\">" + potongan + "</td><td class=\"text-primary\" style=\"vertical-align:middle\">" + bayar + "</td></tr>");
				});
				
				$(pasaran+" .dataConfirm tr:last").after("<tr><td></td><td></td><td></td><td align=right><strong>Total : </strong></td><td><strong>"+total+"</strong></td></tr>");
				
				$(pasaran+" .dataConfirm tr:last").after("</table>");
			}
			
			if (game == "5050umum")
			{
				$(pasaran+" .cancel").attr('game', game) 
				$(pasaran+" .dataConfirm").append("<table class=\"table table-striped table-hover\"><tr><th>No.</th><th>Nomor</th><th>Bet</th><th>Kei</th><th>Bayar</th></tr>");
				
				$(pasaran+' .bet').each(function(index) {
					index++;
					var att = $(this).attr("att");
					var bet = $(pasaran+' .bet'+att).val();
					var realbet = parseInt(nonribuan($(pasaran+' .bet'+att).val()));
					var nomor1 = $(pasaran+' .nomorkiri'+att);
					var nomor2 = $(pasaran+' .nomorkanan'+att);
					var bayar = $(pasaran+' .bayar'+att).val();
					var potongan = $(pasaran+' .kei'+att).val();
					var minbet = $(pasaran+' .bet'+att).attr("minbet");
					var nomor = "";
					
					if (nomor1.is(':checked'))
					{
						nomor = nomor1.val();	
					}
					else
					{
						
						nomor = nomor2.val();	
					}
					
					if (realbet >= minbet) $(pasaran+" .dataConfirm tr:last").after("<tr class=\"form-group-sm\"><td class=\"text-primary\" style=\"vertical-align:middle\">"+index+"</td><td width=\"200\" class=\"form-inline\"><input readonly type=\"text\" class=\"form-control\" style=\"width:100px;font-weight:bold\" value="+nomor+"></td><td class=\"text-primary\" style=\"vertical-align:middle\">" + bet + "</td><td class=\"text-primary\" style=\"vertical-align:middle\">" + potongan + "</td><td class=\"text-primary\" style=\"vertical-align:middle\">" + bayar + "</td></tr>");
				});
				
				$(pasaran+" .dataConfirm tr:last").after("<tr><td></td><td></td><td></td><td class=\"text-primary\" align=right><strong>Total : </strong></td><td><strong>"+total+"</strong></td></tr>");
				
				$(pasaran+" .dataConfirm tr:last").after("</table>");
			}
			
			if (game == "5050special")
			{
				$(pasaran+" .cancel").attr('game', game) 
				$(pasaran+" .dataConfirm").append("<table class=\"table table-striped table-hover\"><tr><th>No.</th><th>Nomor</th><th>Bet</th><th>Kei</th><th>Bayar</th></tr>");
				
				$(pasaran+' .bet').each(function(index) {
					index++;
					var att = $(this).attr("att");
					var bet = $(pasaran+' .bet'+att).val();
					var realbet = parseInt(nonribuan($(pasaran+' .bet'+att).val()));
					var game = $(pasaran+' .game'+att).val();
					var tebak = $(pasaran+' .tebak'+att).val();
					var nomor1 = $(pasaran+' .nomorkiri'+att);
					var nomor2 = $(pasaran+' .nomorkanan'+att);
					var bayar = $(pasaran+' .bayar'+att).val();
					var potongan = $(pasaran+' .kei'+att).val();
					var minbet = $(pasaran+' .bet'+att).attr("minbet");
					var nomor = "";
					
					if (nomor1.is(':checked'))
					{
						nomor = nomor1.val();	
					}
					else
					{
						
						nomor = nomor2.val();	
					}
					
					if (realbet >= minbet) $(pasaran+" .dataConfirm tr:last").after("<tr class=\"form-group-sm\"><td class=\"text-primary\" style=\"vertical-align:middle\">"+index+"</td><td width=\"200\" class=\"form-inline\"><input readonly type=\"text\" class=\"form-control\" style=\"width:90px;font-weight:bold\" value="+tebak+"> <input readonly type=\"text\" class=\"form-control\" style=\"width:70px;font-weight:bold\" value="+nomor+"></td><td class=\"text-primary\" style=\"vertical-align:middle\">" + bet + "</td><td class=\"text-primary\" style=\"vertical-align:middle\">" + potongan + "</td><td class=\"text-primary\" style=\"vertical-align:middle\">" + bayar + "</td></tr>");
				});
				
				$(pasaran+" .dataConfirm tr:last").after("<tr><td></td><td></td><td></td><td class=\"text-primary\" align=right><strong>Total : </strong></td><td><strong>"+total+"</strong></td></tr>");
				
				$(pasaran+" .dataConfirm tr:last").after("</table>");
			}
			
			if (game == "5050kombinasi")
			{
				$(pasaran+" .cancel").attr('game', game) 
				$(pasaran+" .dataConfirm").append("<table class=\"table table-striped table-hover\"><tr><th>No.</th><th width=300>Nomor</th><th>Bet</th><th>Kei</th><th>Bayar</th></tr>");
				
				$(pasaran+' .bet').each(function(index) {
					index++;
					var att = $(this).attr("att");
					var bet = $(pasaran+' .bet'+att).val();
					var realbet = parseInt(nonribuan($(pasaran+' .bet'+att).val()));
					var game = $(pasaran+' .game'+att).val();
					var tebak = $(pasaran+' .posisi'+att).val();
					var nomor = $(pasaran+' .nomor'+att).val();
					var bayar = $(pasaran+' .bayar'+att).val();
					var potongan = $(pasaran+' .kei'+att).val();
					var minbet = $(pasaran+' .bet'+att).attr("minbet");
					
					if (realbet >= minbet) $(pasaran+" .dataConfirm tr:last").after("<tr class=\"form-group-sm\"><td class=\"text-primary\" style=\"vertical-align:middle; width:50px\">"+index+"</td><td width=\"200\" class=\"form-inline\"><input readonly type=\"text\" class=\"form-control\" style=\"width:90px;font-weight:bold\" value="+tebak+"> <input readonly type=\"text\" class=\"form-control\" style=\"width:100px;font-weight:bold\" value="+nomor+"></td><td class=\"text-primary\" style=\"vertical-align:middle\">" + bet + "</td><td class=\"text-primary\" style=\"vertical-align:middle\">" + potongan + "</td><td class=\"text-primary\" style=\"vertical-align:middle\">" + bayar + "</td></tr>");
				});
				
				$(pasaran+" .dataConfirm tr:last").after("<tr><td></td><td></td><td></td><td class=\"text-primary\" align=right><strong>Total : </strong></td><td><strong>"+total+"</strong></td></tr>");
				
				$(pasaran+" .dataConfirm tr:last").after("</table>");
			}
			
			if (game == "kombinasi")
			{
				$(pasaran+" .cancel").attr('game', game) 
				$(pasaran+" .dataConfirm").append("<table class=\"table table-striped table-hover\"><tr><th>No.</th><th width=300>Nomor</th><th>Bet</th><th>Kei</th><th>Bayar</th></tr>");
				
				$(pasaran+' .bet').each(function(index) {
					index++;
					var att = $(this).attr("att");
					var bet = $(pasaran+' .bet'+att).val();
					var realbet = parseInt(nonribuan($(pasaran+' .bet'+att).val()));
					var game = $(pasaran+' .game'+att).val();
					var tebak = $(pasaran+' .posisi'+att).val();
					var nomor = $(pasaran+' .nomor'+att).val();
					var nomor2 = $(pasaran+' .nomor2'+att).val();
					var bayar = $(pasaran+' .bayar'+att).val();
					var potongan = $(pasaran+' .potongan'+att).val();
					var minbet = $(pasaran+' .bet'+att).attr("minbet");
					
					if (realbet >= minbet) $(pasaran+" .dataConfirm tr:last").after("<tr class=\"form-group-sm\"><td class=\"text-primary\" style=\"vertical-align:middle; width:50px\">"+index+"</td><td width=\"200\" class=\"form-inline\"><input readonly type=\"text\" class=\"form-control\" style=\"width:90px;font-weight:bold\" value="+tebak+"> <input readonly type=\"text\" class=\"form-control\" style=\"width:80px;font-weight:bold\" value="+nomor+"> <input readonly type=\"text\" class=\"form-control\" style=\"width:80px;font-weight:bold\" value="+nomor2+"></td><td class=\"text-primary\" style=\"vertical-align:middle\">" + bet + "</td><td class=\"text-primary\" style=\"vertical-align:middle\">" + potongan + "</td><td class=\"text-primary\" style=\"vertical-align:middle\">" + bayar + "</td></tr>");
				});
				
				$(pasaran+" .dataConfirm tr:last").after("<tr><td></td><td></td><td></td><td class=\"text-primary\" align=right><strong>Total : </strong></td><td><strong>"+total+"</strong></td></tr>");
				
				$(pasaran+" .dataConfirm tr:last").after("</table>");
			}
			
			if (game == "dasar")
			{
				$(pasaran+" .cancel").attr('game', game) 
				$(pasaran+" .dataConfirm").append("<table class=\"table table-striped table-hover\"><tr><th>No.</th><th>Nomor</th><th>Bet</th><th>Kei</th><th>Bayar</th></tr>");
				$(pasaran+' .bet').each(function(index) {
					index++;
					var att = $(this).attr("att");
					var bet = $(pasaran+' .bet'+att).val();
					var realbet = parseInt(nonribuan($(pasaran+' .bet'+att).val()));
					var game = $(pasaran+' .game'+att).val();
					
					var nomor1 = $(pasaran+' .nomorkiri'+att);
					var nomor2 = $(pasaran+' .nomorkanan'+att);
					var bayar = $(pasaran+' .bayar'+att).val();
					var potongan = $(pasaran+' .kei'+att).val();
					var minbet = $(pasaran+' .bet'+att).attr("minbet");
					var nomor = "";
					
					if (nomor1.is(':checked'))
					{
						nomor = nomor1.val();	
					}
					else
					{
						
						nomor = nomor2.val();	
					}
					
					if (realbet >= minbet) $(pasaran+" .dataConfirm tr:last").after("<tr class=\"form-group-sm\"><td class=\"text-primary\" style=\"vertical-align:middle\">"+index+"</td><td width=\"200\" class=\"form-inline\"><input readonly type=\"text\" class=\"form-control\" style=\"width:70px;font-weight:bold\" value="+nomor+"></td><td class=\"text-primary\" style=\"vertical-align:middle\">" + bet + "</td><td class=\"text-primary\" style=\"vertical-align:middle\">" + potongan + "</td><td class=\"text-primary\" style=\"vertical-align:middle\">" + bayar + "</td></tr>");
				});
				
				$(pasaran+" .dataConfirm tr:last").after("<tr><td></td><td></td><td></td><td class=\"text-primary\" align=right><strong>Total : </strong></td><td><strong>"+total+"</strong></td></tr>");
				
				$(pasaran+" .dataConfirm tr:last").after("</table>");
			}
			
			if (game == "shio")
			{
				$(pasaran+" .cancel").attr('game', game) 
				$(pasaran+" .dataConfirm").append("<table class=\"table table-striped table-hover\"><tr><th>No.</th><th width=200>Nomor</th><th>Bet</th><th>Discount</th><th>Bayar</th></tr>");
				
				$(pasaran+' .bet').each(function(index) {
					index++;
					var att = $(this).attr("att");
					var bet = $(pasaran+' .bet'+att).val();
					var realbet = parseInt(nonribuan($(pasaran+' .bet'+att).val()));
					var nomor = $(pasaran+' .nomor'+att).val();
					var bayar = $(pasaran+' .bayar'+att).val();
					var potongan = $(pasaran+' .potongan'+att).val();
					var minbet = $(pasaran+' .bet'+att).attr("minbet");
					
					if (realbet >= minbet) $(pasaran+" .dataConfirm tr:last").after("<tr class=\"form-group-sm\"><td class=\"text-primary\" style=\"vertical-align:middle; width:50px\">"+index+"</td><td width=\"150\" class=\"form-inline\"><input readonly type=\"text\" class=\"form-control\" style=\"width:120px;font-weight:bold\" value="+nomor+"></td><td class=\"text-primary\" style=\"vertical-align:middle\">" + bet + "</td><td class=\"text-primary\" style=\"vertical-align:middle\">" + potongan + "</td><td class=\"text-primary\" style=\"vertical-align:middle\">" + bayar + "</td></tr>");
				});
				
				$(pasaran+" .dataConfirm tr:last").after("<tr><td></td><td></td><td></td><td class=\"text-primary\" align=right><strong>Total : </strong></td><td><strong>"+total+"</strong></td></tr>");
				
				$(pasaran+" .dataConfirm tr:last").after("</table>");
			}
			
			}
		});
		
		
	}
	
function linkForm4D(pasaran, pasar, game, form, aturan)
	{
		$(document).on("click", pasaran+" ."+game, function(){
			linkGame4D(pasaran, pasar, game, form, aturan);
		});
	}
	

function linkForm(pasaran, pasar, game)
	{
		$(document).on("click", pasaran+" ."+game, function(){
			linkGame(pasaran, pasar, game);
		});
	}
	
function linkGame4D(pasaran, pasar, game, form, aturan)
{
		clearStatus(pasaran);
			//hideForm(pasaran);
			loadFormContainer(pasaran);
			$(pasaran+' .formContainer').html(loadingImg);
			$.ajax({url: "form.php?form="+form+"&p="+pasar, success: function(result){
				//alert(pasaran+pasar);
				$(pasaran+' .formContainer').html(result);
				$(pasaran+' .formContainer').fadeTo(500,1);
				getStatus();
				getPeraturan(pasaran, aturan);
			}});
}	

function linkGame(pasaran, pasar, game)
{
	clearStatus(pasaran);
		hideForm(pasaran);
		loadFormContainer(pasaran);
		$(pasaran+' .'+game+'Form').fadeTo(500,1);
		$(pasaran+' .formContainer').html(loadingImg);
		$.ajax({url: "form.php?form="+game.toLowerCase()+"&p="+pasar, success: function(result){
			$(pasaran+' .formContainer').html(result);
			$(pasaran+' .formContainer').fadeTo(500,1);
			getStatus();
			getPeraturan(pasaran, game.toLowerCase());
		}});
}	

function clickToForm(pasaran, form)
	{
	$(document).on("click", pasaran+" ."+form+" .btn-success", function()
			{
				if (form == "2dqb_form")
				{
					if (checkFormQ2D(pasaran))
					{
						clearStatus(pasaran);
						$.post("form.php",
							$(pasaran+' .'+form).serialize(),
							function(data){
								$(pasaran+' .formContainer').html(data); 
								getStatus();
								hitungForm(pasaran);
							});
						return false;
					}
				}
				else
				{
					if (checkForm(pasaran))
					{
						clearStatus(pasaran);
						$.post("form.php",
							$(pasaran+' .'+form).serialize(),
							function(data){
								$(pasaran+' .formContainer').html(data); 
								getStatus();
								hitungForm(pasaran);
							});
						return false;
					}
				}
			});
	}
	
function clearStatus(pasaran) {
	$(pasaran+' .statusBox').hide();
	$(pasaran+' .formConfirm').hide();
}
	
function hideForm(pasaran) {
	$(pasaran+' .forms').hide();	
	$(pasaran+' .peraturanContainer').hide();	
	$(pasaran+' .formConfirm').hide();
}

function loadFormContainer(pasaran) {
	$(pasaran+' .formContainer').html(loadingImg);
}

function hideFormContainer(pasaran) {
	$(pasaran+' .formContainer').hide();
}



function hitungForm(pasaran)
		{
			var total = 0;
			$(pasaran+' .bet').each(function(index) {
				
					var bayar = 0;
					var potongan = 0;
					var att = $(this).attr("att");
					var pot = 0;
					var game = $(pasaran+' .bet'+att).attr("game");
					
					if (game == "4D3D2D")
					{
						
						var n1 = $(pasaran+' .nomor1'+att).val().length;
						var n2 = $(pasaran+' .nomor2'+att).val().length;
						var n3 = $(pasaran+' .nomor3'+att).val().length;
						var n4 = $(pasaran+' .nomor4'+att).val().length;
						
						if (n1 == 1 && n2 == 1 && n3 == 1 && n4 == 1) { $(pasaran+' .game'+att).val("4D"); } else
						if (n1 == 0 && n2 == 1 && n3 == 1 && n4 == 1) { $(pasaran+' .game'+att).val("3D"); } else
						if (n1 == 0 && n2 == 0 && n3 == 1 && n4 == 1) { $(pasaran+' .game'+att).val("2D"); } else
						if (n1 == 1 && n2 == 1 && n3 == 0 && n4 == 0) { $(pasaran+' .game'+att).val("2D Depan"); } else
						if (n1 == 0 && n2 == 1 && n3 == 1 && n4 == 0) { $(pasaran+' .game'+att).val("2D Tengah"); } else { $(pasaran+' .game'+att).val(""); }
						
						if ($(pasaran+' .checkBet').is(':checked') && $(pasaran+' .game'+att).val() != "") 
							{ 
								$(pasaran+' .bet'+att).val($(pasaran+' .bet0').val()); 
							}
							
						var bet = nonribuan($(pasaran+' .bet'+att).val());
						bet = onlyNumber(bet);
						
						$(pasaran+' .bet'+att).val(ribuan(bet));
						
						var game = $(pasaran+' .game'+att).val();
						var pot = 0;
						
						if (game == "4D") { pot = $(pasaran+' .bet'+att).attr("pot4"); }
						if (game == "3D") { pot = $(pasaran+' .bet'+att).attr("pot3"); }
						if (game == "2D") { pot = $(pasaran+' .bet'+att).attr("pot2"); }
						if (game == "2D Depan") { pot = $(pasaran+' .bet'+att).attr("pot2dd"); }
						if (game == "2D Tengah") { pot = $(pasaran+' .bet'+att).attr("pot2dt"); }
						
						if (game != "") potongan = parseInt((pot * bet)/100); bayar = ribuan(bet - potongan); potongan = ribuan(potongan) + " ("+pot+"%)"; 
						
						$(pasaran+' .potongan'+att).val(potongan);
						$(pasaran+' .bayar'+att).val(bayar);
						
						var tot = 0;
						tot = parseInt(nonribuan(bayar));
						if (tot >= 0) 
						{
							total += tot;
						}
						
						bet = parseInt(bet);
						if (isNaN(bet)) bet = '';
						
						$(pasaran+' .bet'+att).val(ribuan(bet));
						
						
						if ($(pasaran+' .game'+att).val() == "") {
							$(pasaran+' .potongan'+att).val('');
							$(pasaran+' .bayar'+att).val('');
							$(pasaran+' .bet'+att).val('');
						}
						
						if ($(pasaran+' .bet'+att).val() == '') {
							$(pasaran+' .potongan'+att).val('');
							$(pasaran+' .bayar'+att).val('');
						}
					}
					else
					if (game == "5050umum" || game == "5050special" || game == "dasar")
					{
						var bet = nonribuan($(pasaran+' .bet'+att).val());
							bet = onlyNumber(bet);
							
							var kei = 0;
							
							var kiri = $(pasaran+ ' .nomorkiri'+att);
							
							if (kiri.is(':checked'))
							{
								pot = $(pasaran+' .bet'+att).attr("pot1");	
							}
							else
							{
								pot = $(pasaran+' .bet'+att).attr("pot2");
							}
							
							potongan = parseInt((pot * bet)/100); 
							if (pot >= 0) potongan = 0;
							bayar = ribuan(bet - potongan); 
							potongan = ribuan(potongan) + " ("+pot+"%)";
							
							//alert(potongan);
							
							$(pasaran+' .bet'+att).val(ribuan(bet));
							
							$(pasaran+' .kei'+att).val(potongan);
							$(pasaran+' .bayar'+att).val(bayar);
							
							var tot = 0;
							tot = parseInt(nonribuan(bayar));
							if (tot >= 0) 
							{
								total += tot;
							}
							
							
							$(pasaran+' .bet'+att).val(ribuan(bet));
							
							if ($(pasaran+' .bet'+att).val() == '') {
								$(pasaran+' .kei'+att).val('');
								$(pasaran+' .bayar'+att).val('');
							}
				
					}
					else
					if ( game == "5050kombinasi")
					{
						var bet = nonribuan($(pasaran+' .bet'+att).val());
							bet = onlyNumber(bet);
							
							var kei = 0;
							
							if ($(pasaran+' .nomor'+att).val() == 'Mono') 	pot = $(pasaran+' .bet'+att).attr("pot1");	
							if ($(pasaran+' .nomor'+att).val() == 'Stereo') 	pot = $(pasaran+' .bet'+att).attr("pot2");	
							if ($(pasaran+' .nomor'+att).val() == 'Kembang') 	pot = $(pasaran+' .bet'+att).attr("pot3");	
							if ($(pasaran+' .nomor'+att).val() == 'Kempis') 	pot = $(pasaran+' .bet'+att).attr("pot4");	
							if ($(pasaran+' .nomor'+att).val() == 'Kembar') 	pot = $(pasaran+' .bet'+att).attr("pot5");	
							
							potongan = parseInt((pot * bet)/100); 
							if (pot >= 0) potongan = 0;
							bayar = ribuan(bet - potongan); 
							potongan = ribuan(potongan) + " ("+pot+"%)";
							
							//alert(potongan);
							
							$(pasaran+' .bet'+att).val(bet);
							
							$(pasaran+' .kei'+att).val(potongan);
							$(pasaran+' .bayar'+att).val(bayar);
							
							
							var tot = 0;
							tot = parseInt(nonribuan(bayar));
							if (tot >= 0) 
							{
								total += tot;
							}
							
							
							$(pasaran+' .bet'+att).val(ribuan(bet));
							
							if ($(pasaran+' .bet'+att).val() == '') {
								$(pasaran+' .kei'+att).val('');
								$(pasaran+' .bayar'+att).val('');
							}
				
					}
					else
					if ( game == "kombinasi")
					{
						var bet = nonribuan($(pasaran+' .bet'+att).val());
							bet = onlyNumber(bet);
							
							pot = $(pasaran+' .bet'+att).attr("pot1");		
							
							potongan = parseInt((pot * bet)/100); 
							bayar = ribuan(bet - potongan); 
							potongan = ribuan(potongan) + " ("+pot+"%)";
							
							//alert(potongan);
							
							$(pasaran+' .bet'+att).val(bet);
							
							$(pasaran+' .potongan'+att).val(potongan);
							$(pasaran+' .bayar'+att).val(bayar);
							
							var tot = 0;
							tot = parseInt(nonribuan(bayar));
							if (tot >= 0) 
							{
								total += tot;
							}
							
							$(pasaran+' .bet'+att).val(ribuan(bet));
							
							if ($(pasaran+' .bet'+att).val() == '') {
								$(pasaran+' .potongan'+att).val('');
								$(pasaran+' .bayar'+att).val('');
							}
				
					}
					else
					{
					
						var bet = nonribuan($(pasaran+' .bet'+att).val());
						bet = onlyNumber(bet);
						
						pot = $(pasaran+' .bet'+att).attr("pot1");
						potongan = parseInt((pot * bet)/100); 
						bayar = ribuan(bet - potongan); 
						potongan = ribuan(potongan) + " ("+pot+"%)";
						
						//alert(potongan);
						
						
						
						$(pasaran+' .bet'+att).val(ribuan(bet));
						
						$(pasaran+' .potongan'+att).val(potongan);
						$(pasaran+' .bayar'+att).val(bayar);
						
						var tot = 0;
						tot = parseInt(nonribuan(bayar));
						if (tot >= 0) 
						{
							total += tot;
						}
						
						$(pasaran+' .bet'+att).val(ribuan(bet));
						
						if ($(pasaran+' .bet'+att).val() == '') {
							$(pasaran+' .potongan'+att).val('');
							$(pasaran+' .bayar'+att).val('');
						}
					
					}
			});
			
			$(pasaran+' .totalBet').text("Total: "+ ribuan(total));
			$(pasaran+' .total').val(total);
		}
		
function getPeraturan(pasaran, game){
		$(pasaran+' .peraturanContainerBody').html(loadingImg);
		$.ajax({url: 'data.php?content=peraturan&game='+game, success: function(result){
				//alert(pasaran+pasar);
				$(pasaran+' .peraturanContainerBody').html(result);
				if (result != '')
				{
					$(pasaran+' .peraturanContainer').fadeIn(500);
					var pasar = pasaran.substr(1);
					$.ajax({url: 'data.php?content=hadiah&pasaran='+pasar+'&game='+game, success: function(result){
						//alert(result);
						$(pasaran+' .aturan').html(result);
					}});
				}
				else
				{
					$(pasaran+' .peraturanContainer').fadeOut(500);
				}
			}});
}

function getStatus(){
       $.getJSON('data.php?status=pasaran', function(data) {
		   
			for (i = 0; i < data.length; i++)
			{
				var nama = data[i].name.toLowerCase().replace(/\s+/g, '');
				
				if (data[i].status == 1) 
				{ 
					$('#p_'+nama).removeClass('glyphicon-minus-sign text-danger text-warning').addClass('glyphicon-ok-sign text-success');
					$('#'+nama+'_status').html("<div class=\"well well-sm\" style=\"margin-bottom:4px\"><h5>"+data[i].name+" "+data[i].nameid+"-"+data[i].periode+"</h5></div>");
					$('#'+nama+'_statusdown').text(""); 
					$('#'+nama).fadeIn(500);
				} 
				else 
				if (data[i].status == 0) 
				{ 
					$('#p_'+nama).removeClass('glyphicon-ok-sign  text-success text-warning').addClass('glyphicon-minus-sign text-danger'); 
					$('#'+nama+'_statusdown').html("<div class=\"alert alert-warning\">Maaf, Pasaran sudah tutup, Mohon kembali lain waktu...</div>"); 
					$('#'+nama).fadeOut(500);
				}
				else 
				if (data[i].status == 2) 
				{ 
					$('#p_'+nama).removeClass('glyphicon-ok-sign  text-success').addClass('glyphicon-minus-sign text-warning'); 
					$('#'+nama+'_statusdown').html("<div class=\"alert alert-warning\">Maaf, Account anda sedang di suspend, Mohon hubungi Customer Service...</div>"); 
					$('#'+nama).fadeOut(500);
				}
				else 
				if (data[i].status == -1) 
				{ 
					$('#p_'+nama).removeClass('glyphicon-ok-sign  text-success').addClass('glyphicon-minus-sign text-warning'); 
					$('#'+nama+'_statusdown').html("<div class=\"alert alert-warning\">Maaf, Account anda sedang di banned, Mohon hubungi Customer Service...</div>"); 
					$('#'+nama).fadeOut(500);
				}
				
				// Nama Pasaran
				if (data[i].name.substring(data[i].name.length - 6, data[i].name.length) == "NODISC")
				{
					$('.nama_pasaran_'+nama).html(data[i].name.substring(0, data[i].name.length - 6)+'<img src="'+data[i].img+'" style="width:18px; vertical-align:text-bottom" />');
				}
				else
				{
					$('.nama_pasaran_'+nama).html(data[i].name);
				}
			}
        });
}

function getWinBet(){
       $.getJSON('data.php?status=winBet', function(data) {
		   
		   if (data.length > 0)
		   {
				   $('#winBet').html('');
				   
					for (i = 0; i < data.length; i++)
					{
							$('#winBet').append("<div>"+data[i].time+" <strong>["+data[i].pasaranid+"-"+data[i].periode+"] "+data[i].deskripsi+"</strong></div>");
					}
					
					$('#winBet').fadeIn(500);
		   }
        });
}

function getDepoWD(){
       $.getJSON('data.php?status=depoWD', function(data) {
		   
		   if (data.length > 0)
		   {
		   		$('#depoWD').html('');
				for (i = 0; i < data.length; i++)
				{
						$('#depoWD').append("<div>"+data[i].time+" <strong>"+data[i].deskripsi+"</strong> </div>");
				}
				
				$('#depoWD').fadeIn(500);
		   }
        });
}

function getReferal(t,s){
		   $('#referal_content').html(loadingImg);
		   $.ajax({url: "data.php?content=referal&sort="+s+"&page="+t, success: function(result){
		   		$('#referal_content').html(result);
				$('#referal_content').fadeIn(500);
        }});
}

function getTransaksi(t){
		   $('#transaksi .content').html(loadingImg);
		   $.ajax({url: "data.php?content=transaksi&page="+t, success: function(result){
		   		$('#transaksi .content').html(result);
				$('#transaksi .content').fadeIn(500);
        }});
}

function getStatement(){
		   $('#statement .content').html(loadingImg);
		   $.ajax({url: "data.php?content=statement", success: function(result){
		   		$('#statement .content').html(result);
				$('#statement .content').fadeIn(500);
        }});
}


function getTabKeluaran(){
		   $('#keluaran .content').html(loadingImg);
		   $.ajax({url: "data.php?content=tabKeluaran", success: function(result){
		   		$('#keluaran .content').html(result);
				$('#keluaran .content').fadeIn(500);
				$('#keluaran .content2').html("");
        }});
}

function getInbox(i)
{
			$.ajax({url: "data.php?content=inbox&page="+i, success: function(result){
		   		$('#memo-inbox').html(result);
        	}});
}

function getSent(i)
{
			$.ajax({url: "data.php?content=sent&page="+i, success: function(result){
		   		$('#memo-sent').html(result);
        	}});
}

function getTulis()
{
			 $.ajax({url: "data.php?content=tulis", success: function(result){
		   		$('#memo-tulis').html(result);
        	}});
}


//MEMO

function getMemo(){
		  
		   getTulis();
		   getInbox('1');
		   getSent('1');
}


function readMemo(task, page, i) {
			 $.ajax({url: "data.php?read=memo&page="+page+"&task="+task+"&id="+i, success: function(result){
					$('#memo-'+task).html(result);
		   		}}); 
}


function getMemoTotal()
{
	$.ajax({url: "data.php?content=memoBadge", success: function(result){
		$('.badgeTotal').html(result);
	}});
}

//

function getKeluaran(pid,i){
			if (pid == '') { $('#keluaran .content2').html(''); } 
			else
			{
			   $('#keluaran .content2').html(loadingImg);
			   $.ajax({url: "data.php?content=keluaran&pid="+pid+"&page="+i, success: function(result){
					$('#keluaran .content2').html(result);
					$('#keluaran .content2').fadeIn(500);
		   		}}); 
        }
}

$(document).on("change", '#pasaranKeluaran', function()
	{
		var pid = $('#pasaranKeluaran').val();
		getKeluaran(pid,'1');
	});
	
$(document).on("change", '#historyfilter', function()
	{
		var pid = $('#historyfilter').val();
		getTransaksi(pid);
	});

$(document).on("change", '#refsort', function()
	{
		var s = $('#refsort').val();
		var t = $(this).attr('page');
		getReferal(t,s);
	});

  
function getCredit(){
	 	$.ajax({url: "data.php?user=credit", success: function(result){
				$('.userCredit').html(ribuan(result));
				$('.credit').val(result);
				$('#creditTotoForm').val(ribuan(result));
				}});
}

function getSetting() {
		$.getJSON('data.php?status=setting', function(data) {
				$('#min_deposit').val(data.min_deposit);
				$('#min_withdraw').val(data.min_withdraw);
				$('#max_lose').val(data.max_lose);
				});
}

function openinit(nama)
{
				$('#'+nama+' .formContainer').html(loadingImg);
				$.ajax({url: "form.php?form=qb&p="+nama, success: function(result){
						$('#'+nama+' .formContainer').html(result);
						$('#'+nama+' .formContainer').fadeTo(500,1);
						
					}});
					
					getPeraturan('#'+nama, "4D3D2D");
}

function logout()
{
	$.ajax({url: "data.php?task=logout", success: function(result){
		
		window.location='index.php';
						
	}});
}

function getBroadcast()
{
	$.ajax({url: "data.php?content=broadcast", success: function(result){
		$('#broadcast').html(result);
	}});
}

function init(){
       $.getJSON('data.php?status=pasaran', function(data) {
		   
			for (i = 0; i < data.length; i++)
			{
				var nama = data[i].name.toLowerCase().replace(/\s+/g, '');
				
				if (data[i].status == 1) 
				{ 
					$('#p_'+nama).removeClass('glyphicon-minus-sign text-danger text-warning').addClass('glyphicon-ok-sign text-success');
					$('#'+nama+'_status').html("<div class=\"well well-sm\" style=\"margin-bottom:4px\"><h5>"+data[i].name+" "+data[i].nameid+"-"+data[i].periode+"</h5></div>");
					$('#'+nama+'_statusdown').text(""); 
					$('#'+nama).fadeIn(500);
					
					openinit(nama);
				} 
				else 
				if (data[i].status == 0) 
				{ 
					$('#p_'+nama).removeClass('glyphicon-ok-sign text-success text-warning').addClass('glyphicon-minus-sign text-danger'); 
					$('#'+nama+'_statusdown').html("<div class=\"alert alert-warning\">Maaf, Pasaran sudah tutup, Mohon kembali lain waktu...</div>"); 
					$('#'+nama).fadeOut(500);
					
					openinit(nama);
				}
				else 
				if (data[i].status == 2) 
				{ 
					$('#p_'+nama).removeClass('glyphicon-ok-sign text-success').addClass('glyphicon-minus-sign text-warning'); 
					$('#'+nama+'_statusdown').html("<div class=\"alert alert-warning\">Maaf, Account anda sedang di suspend, Mohon hubungi Customer Service...</div>"); 
					$('#'+nama).fadeOut(500);
					
					openinit(nama);
				}
				
				// Nama Pasaran
				if (data[i].name.substring(data[i].name.length - 6, data[i].name.length) == "NODISC")
				{
					$('.nama_pasaran_'+nama).html(data[i].name.substring(0, data[i].name.length - 6)+'<img src="'+data[i].img+'" style="width:18px; vertical-align:text-bottom" />');
				}
				else
				{
					$('.nama_pasaran_'+nama).html(data[i].name);
				}
				
				clickFunction('#'+nama);
			}
        });
		
		$(document).on("click", "#konfirmasi_deposit", function()
		{
			var min_deposit = parseInt(nonribuan($("#min_deposit").val()));
			var deposit = parseInt(nonribuan($("#jumlah_deposit").val()));
			var credit = parseInt($(".credit").val());
			var rektujuan = $('.deposit_form .rektujuan').val();
			var rekasal = $('.deposit_form .rekasal').val();
			
			//alert(rektujuan);
			
			if (!isNaN(deposit))
			{
				if (rektujuan != null && rekasal != null)
				{
					if (deposit >= min_deposit)
					{	
						$("#deposit_form").fadeOut(500, function()
						{
							$('#statusDeposit').removeClass('alert alert-success alert-danger alert-warning text-center glyphicon glyphicon-alert').addClass("alert alert-warning text-center").text(' Tunggu Sebentar...').fadeIn(500);
					
							$.post("data.php", $('.deposit_form').serialize(),
								function(data)
								{
									  if (data == 'success')
									  {
										  setTimeout(function ()
										  {
											$('#statusDeposit').fadeOut(500,function() 
											{
												$('#statusDeposit').removeClass('alert alert-warning text-center glyphicon glyphicon-alert').addClass("alert alert-success text-center").text('Terima kasih, Deposit berhasil disubmit!').fadeIn(1000);
												});
										   }, 1000); 
									  } 
									  else
									  if (data == 'once')
									  {
										  setTimeout(function ()
										  {
											$('#statusDeposit').fadeOut(500,function() 
											{
												$('#statusDeposit').removeClass('alert alert-warning text-center glyphicon glyphicon-alert').addClass("alert alert-danger text-center").text('Maaf Sedang ada Pending Deposit').fadeIn(1000);
												});
											
										   }, 2000); 
									  }
									  else
									  if (data == 'noteempty')
									  {
										  setTimeout(function ()
										  {
											$('#statusDeposit').fadeOut(500,function() 
											{
												$('#statusDeposit').removeClass('alert alert-warning text-center glyphicon glyphicon-alert').addClass("alert alert-danger text-center").text('Nomor Pengirim / Kode SN harus diisi').fadeIn(1000);
												});
											
										   }, 2000); 
									  }
									  else
									  if (data == 'error')
									  {
										  setTimeout(function ()
										  {
											$('#statusDeposit').fadeOut(500,function() 
											{
												$('#statusDeposit').removeClass('alert alert-warning text-center glyphicon glyphicon-alert').addClass("alert alert-danger text-center").text('Error! Silakan ulang kembali').fadeIn(1000);
												});
											
										   }, 2000); 
									  }
							});
							return false; //not to post the form physically
						});
					}
					else
					{
						alert('Maaf, Deposit minimal Rp'+ribuan(min_deposit));
					}
				}
				else
				{
					alert('Error: Tidak ada Rekening Tujuan/Asal, Mohon hubungi CS kami!');
				}
			}
		});
		
		
		$(document).on("click", ".kirim", function()
		{
			var memolength = $('.tulis_memo').val().length;
			var tulissubject = $('.tulis_subject').val();
			

			if (tulissubject != "")
			{
				if (memolength >= 10)
				{
					$.post("data.php", $('.tulis_form').serialize(),
						function(data)
						{
							  if (data == 'success')
							  {
								 alert('Memo berhasil terkirim');
								 $('.tulis_memo').val('');
								 $('.tulis_subject').val('');
								 getSent('1');
							  } 
							  else if (data == 'toomany')
							  {
								 alert('Maaf, anda melebihi batas maksimal memo per hari');  
							  }
							 
					});
					return false; //not to post the form physically
						
				}
				else
				{
					alert('Error: Memo terlalu singkat!');
				}
			}
			else
			{
				alert('Error: Pilih Subject!');
			}
		});
		
		$(document).on("click", ".balas", function()
		{
			var memolength = $('.balas_memo').val().length;
			
			if (memolength >= 10)
			{
				$.post("data.php", $('.balas_form').serialize(),
					function(data)
					{
						  if (data == 'success')
						  {
							 alert('Memo berhasil dibalas');
							 $('.balas_memo').val('');
							 getInbox('1');
						  } 
						 
				});
				return false; //not to post the form physically
					
			}
			else
			{
				alert('Error: Memo terlalu singkat!');
			}
		});
		
		$(document).on("click", "#change_password", function()
		{		
			
				$('#statusPassword').removeClass('alert alert-success alert-danger alert-warning text-center glyphicon glyphicon-alert').addClass("alert alert-warning text-center").text(' Tunggu Sebentar...').fadeIn(500);
		
				$.post("data.php", $('.pass_form').serialize(),
					function(data)
					{
						setTimeout(function ()
						{  
							  if (data == 'passEmpty')
							  {
									$('#statusPassword').fadeOut(500,function() 
									{
										$('#statusPassword').removeClass('alert alert-warning text-center glyphicon glyphicon-alert').addClass("alert alert-warning text-center").text('Password tidak boleh kosong').fadeIn(1000);
									});
							  } 	
							  
							  if (data == 'wrongPassword')
							  {
									$('#statusPassword').fadeOut(500,function() 
									{
										$('#statusPassword').removeClass('alert alert-warning text-center glyphicon glyphicon-alert').addClass("alert alert-warning text-center").text('Password sekarang Salah!').fadeIn(1000);
									});
							  } 	
							  
							  if (data == 'passLess')
							  {
									$('#statusPassword').fadeOut(500,function() 
									{
										$('#statusPassword').removeClass('alert alert-warning text-center glyphicon glyphicon-alert').addClass("alert alert-warning text-center").text('Password harus 6 Karakter atau lebih!').fadeIn(1000);
									});
							  } 	
							  
							  if (data == 'passNotSame')
							  {
									$('#statusPassword').fadeOut(500,function() 
									{
										$('#statusPassword').removeClass('alert alert-warning text-center glyphicon glyphicon-alert').addClass("alert alert-warning text-center").text('Password Konfirmasi tidak sama').fadeIn(1000);
									});
							  } 	
							  
							  if (data == 'passError')
							  {
									$('#statusPassword').fadeOut(500,function() 
									{
										$('#statusPassword').removeClass('alert alert-warning text-center glyphicon glyphicon-alert').addClass("alert alert-warning text-center").text('Password Baru tidak diijinkan, silakan ganti!').fadeIn(1000);
									});
							  } 	
							  
							  if (data == 'success')
							  {
									$('#statusPassword').fadeOut(500,function() 
									{
										$('#statusPassword').removeClass('alert alert-warning text-center glyphicon glyphicon-alert').addClass("alert alert-success text-center").text('Terima kasih, Password berhasil diganti!').fadeIn(1000);
									});
									$('#pass_form .passnow').val('');
									$('#pass_form .passnew').val('');
									$('#pass_form .passnewcon').val('');
							  } 	
						}, 1000); 
				});
				return false; //not to post the form physically
			});
				

		// MY BANK

		$(document).on("click", "#addrek", function()
		{
			$('#addrek').prop('disabled', true);
			$('#addrek').attr("disabled", true);
			$.post("data.php", $('.addrek_form').serialize(),
				function(data)
				{
					  if (data == 'success')
					  {
						 alert('Rekening berhasil ditambah');
						 getRekening();
					  } 
					  else if (data == 'toomany')
					  {
						 alert('Rekening melebihi batas maksimum total');  
						 getRekening();
					  }
					  else if (data == 'empty')
					  {
						 alert('Pilih Bank dan Isi No Rekening');  
						 getRekening();
					  }
					  else if (data == 'exist')
					  {
						 alert('No Rek tersebut sudah ada pada System kami');  
						 getRekening();
					  }
					  else if (data == 'oneonly')
					  {
						 alert('Melebihi Max per Bank, Hubungi customer service untuk penambahan');  
						 getRekening();
					  }
					  else
					  {
						 alert('Gagal menambahkan rekening');  
						 getRekening();
					  }		 

					$('#addrek').prop('disabled', false);
					$('#addrek').removeAttr("disabled"); 
			});
			return false; //not to post the form physically
		});

		$(document).on("click", "#updaterek", function()
		{
			$('#updaterek').prop('disabled', true);
			$('#updaterek').attr("disabled", true);
			$.post("data.php", $('.updaterek_form').serialize(),
				function(data)
				{
					  if (data == 'success')
					  {
						 alert('Rekening berhasil diupdate');
						 getRekening();
					  }
					  else
					  {
						 alert('Gagal mengupdate rekening');  
						 getRekening();
					  }		

				$('#updaterek').prop('disabled', false);
				$('#updaterek').removeAttr("disabled"); 
			});
			return false; //not to post the form physically
		});

		$(document).on("keyup", "#noaddrek", function()
		{	
			var rek = $(this).val();
			rek = onlyNumber(rek);
			if (isNaN(rek)) rek = '';
			$(this).val(rek);		
		});

		//		
		
		$(document).on("click", "#konfirmasi_withdraw", function()
		{
			var min_withdraw = parseInt(nonribuan($("#min_withdraw").val()));
			var withdraw = parseInt(nonribuan($("#jumlah_withdraw").val()));
			var credit = parseInt($(".credit").val());
			
			if (!isNaN(withdraw))
			{
				if (credit >= withdraw)
				{
					if (withdraw >= min_withdraw)
					{	
						$("#withdraw_form").fadeOut(500, function()
						{
							$('#statusWithdraw').removeClass('alert alert-success alert-danger alert-warning text-center glyphicon glyphicon-alert').addClass("alert alert-warning text-center").text(' Tunggu Sebentar...').fadeIn(500);
					
							$.post("data.php", $('.withdraw_form').serialize(),
								function(data)
								{
									  if (data == 'success')
									  {
										  setTimeout(function ()
										  {
											$('#statusWithdraw').fadeOut(500,function() 
											{
												$('#statusWithdraw').removeClass('alert alert-warning text-center glyphicon glyphicon-alert').addClass("alert alert-success text-center").text('Terima kasih, Withdraw berhasil disubmit!').fadeIn(1000);
												});
											
										   }, 1000); 
									  } 	
									  else
									  if (data == 'error')
									  {
										  setTimeout(function ()
										  {
											$('#statusWithdraw').fadeOut(500,function() 
											{
												$('#statusWithdraw').removeClass('alert alert-warning text-center glyphicon glyphicon-alert').addClass("alert alert-danger text-center").text('Maaf ada Error DB!').fadeIn(1000);
												});
											
										   }, 1000); 
									  }
									  else
									  if (data == 'once')
									  {
										  setTimeout(function ()
										  {
											$('#statusWithdraw').fadeOut(500,function() 
											{
												$('#statusWithdraw').removeClass('alert alert-warning text-center glyphicon glyphicon-alert').addClass("alert alert-danger text-center").text('Maaf Sedang ada Pending Withdraw').fadeIn(1000);
												});
											
										   }, 1000); 
									  }
									  else
									  if (data == 'receh')
									  {
										  setTimeout(function ()
										  {
											$('#statusWithdraw').fadeOut(500,function() 
											{
												$('#statusWithdraw').removeClass('alert alert-warning text-center glyphicon glyphicon-alert').addClass("alert alert-danger text-center").text('Maaf Withdraw harus kelipatan seribu (x1000)').fadeIn(1000);
												});
											
										   }, 1000); 
									  }
								
							});
							return false; //not to post the form physically
							
						});
					}
					else
					{
						alert('Maaf, Withdraw minimal Rp'+ribuan(min_withdraw));
					}
					
				}
				else
				{
					alert('Maaf Credit Anda lebih kecil dari Rp'+ribuan(withdraw));	
				}
			}
		});
		
		$(document).on("keyup", "#jumlah_withdraw, #jumlah_deposit", function()
		{			
			var jumlah = nonribuan($(this).val());
			jumlah = onlyNumber(jumlah);
			
			jumlah = parseInt(jumlah);
			if (isNaN(jumlah)) jumlah = '';
			
			$(this).val(ribuan(jumlah));		
		});
}