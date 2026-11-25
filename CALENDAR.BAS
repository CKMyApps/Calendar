10 REM CALENDAR - SUNDAY FIRST
20 PRINT "1 English   2 Ελληνικά   3 简体中文"
30 INPUT "1-3"; L
40 IF L<1 THEN 30
42 IF L>3 THEN 30
44 IF L<>INT(L) THEN 30
50 P$="Year (1-9999)"
60 H$="SU MO TU WE TH FR SA"
70 IF L=2 THEN P$="Έτος (1-9999)"
80 IF L=2 THEN H$="ΚΥ ΔΕ ΤΡ ΤΕ ΠΕ ΠΑ ΣΑ"
90 IF L=3 THEN P$="年份 (1-9999)"
100 IF L=3 THEN H$="日 一 二 三 四 五 六"
110 PRINT P$
115 INPUT Y
120 IF Y<1 THEN 110
122 IF Y>9999 THEN 110
124 IF Y<>INT(Y) THEN 110
130 A=Y-1
140 W=(1+A+INT(A/4)-INT(A/100)+INT(A/400)) MOD 7
150 FOR M=1 TO 12
160 RESTORE
170 FOR I=1 TO 12
180 READ E$,G$,C$,N
190 IF I<>M THEN 240
200 T$=E$
210 IF L=2 THEN T$=G$
220 IF L=3 THEN T$=C$
230 D=N
240 NEXT I
250 IF M<>2 THEN 270
252 IF Y MOD 4=0 THEN D=29
254 IF Y MOD 100=0 THEN D=28
256 IF Y MOD 400=0 THEN D=29
270 PRINT
280 PRINT T$;" ";Y
290 PRINT H$
300 R$=""
310 FOR I=1 TO W
320 R$=R$+"   "
330 NEXT I
340 FOR I=1 TO D
350 READ V$
360 R$=R$+V$+" "
370 W=(W+1) MOD 7
380 IF W=0 THEN PRINT R$
390 IF W=0 THEN R$=""
400 NEXT I
410 IF W<>0 THEN PRINT R$
420 NEXT M
430 END
440 DATA "January","Ιανουάριος","一月",31
450 DATA "February","Φεβρουάριος","二月",28
460 DATA "March","Μάρτιος","三月",31
470 DATA "April","Απρίλιος","四月",30
480 DATA "May","Μάιος","五月",31
490 DATA "June","Ιούνιος","六月",30
500 DATA "July","Ιούλιος","七月",31
510 DATA "August","Αύγουστος","八月",31
520 DATA "September","Σεπτέμβριος","九月",30
530 DATA "October","Οκτώβριος","十月",31
540 DATA "November","Νοέμβριος","十一月",30
550 DATA "December","Δεκέμβριος","十二月",31
560 DATA " 1"," 2"," 3"," 4"," 5"," 6"," 7"," 8"," 9","10"
570 DATA "11","12","13","14","15","16","17","18","19","20"
580 DATA "21","22","23","24","25","26","27","28","29","30","31"
